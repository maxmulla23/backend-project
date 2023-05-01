const router = require("express").Router()
const { addnotice, noticeone, noticeall, deleteOne } = require("../controllers/notice.controller")

//post new issue
router.post("/newnotice", addnotice)

//get by id
router.get("/:id", noticeone)
//get all
router.get("/", noticeall)

//delete issue
router.delete("/delOne", deleteOne)

module.exports = router
