const { newissue, oneIssue, allIssues, deleteissue } = require("../services/issue.service");

//post new issue
exports.addissue = async (req,res) =>{
    try {
        const newIssue = await newissue(req.body)
        console.log(newIssue);
        res.status(200).json(newIssue);
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}
//get by id
exports.issueone = async (req, res) =>{
    try {
        const issue = await oneIssue(req.body)
        res.status(200).json(issue);
    } catch (error) {
        res.status(500).json(error);
    }
}
//get all
exports.issueall = async (req, res) =>{
    try {
        const issues = await allIssues()
        res.status(200).json(issues)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
//edit issue
//delete issue
exports.deleteOne = async (req, res) =>{
    try {
        const deleteone = await deleteissue(req.body)
        res.status(200).json(deleteone)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}