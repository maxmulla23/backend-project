const { PrismaClient } = require("@prisma/client");
const { newnotice, onenotice, allnotices, deletenotice } = require("../services/news.service");

const prisma = new PrismaClient

//post new notice
exports.addnotice = async(req, res) =>{
    try {
        const newNotice = await newnotice(req.body)
        console.log(newNotice)
        const newstuff = await prisma.news.findUnique({
          where: {
            id: parseInt(newNotice.id),
          },
          include: {
            property: true,
          },
        })
 
        res.status(200).json(newstuff)
    } catch (error) {
        res.status(500).json(error)
    console.log(error)
    }
}
//by id
exports.noticeone = async (req, res) => {
    try {
      const notice = await onenotice(req.params)
      res.status(200).json(notice)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }

//get all
exports.noticeall = async (req, res) => {
    try {
      const notices = await allnotices()
      console.log(notices)
      res.status(200).json(notices)
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  }  

//delete notice
exports.deleteOne = async (req, res) => {
    try {
      const deleteone = await deletenotice(req.body)
      res.status(200).json(deleteone)
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  }