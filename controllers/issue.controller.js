const {
  newissue,
  oneIssue,
  allIssues,
  deleteissue,
} = require("../services/issue.service")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

//post new issue
exports.addissue = async (req, res) => {
  try {
    const newIssue = await newissue(req.body)
    console.log(newIssue)

    const newentry = await prisma.issue.findUnique({
      where: {
        id: parseInt(newIssue.id),
      },
      include: {
        owner: true,
        house: true,
      },
    })

    res.status(200).json(newentry)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}
//get by id
exports.issueone = async (req, res) => {
  try {
    console.log(req.params)
    const issue = await oneIssue(req.params)
    res.status(200).json(issue)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
//get all
exports.issueall = async (req, res) => {
  try {
    const issues = await allIssues()
    console.log(issues)
    res.status(200).json(issues)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

//delete issue
exports.deleteOne = async (req, res) => {
  try {
    const deleteone = await deleteissue(req.body)
    res.status(200).json(deleteone)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}
