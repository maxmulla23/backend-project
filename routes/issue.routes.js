const router = require("express").Router()
const { addissue, issueone, issueall, deleteOne } = require("../controllers/issue.controller")

//post new issue
router.post("/newissue", addissue);
//get by id
router.get("/issueId", issueone);
//get all
router.get("/", issueall);
//edit issue
router.put("/", );
//delete issue
router.delete("/delOne", deleteOne);

module.exports = router;