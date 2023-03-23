const router = require("express").Router();
const { addlease } = require("../controllers/lease.controller")


//post new lease
router.post("/newLease", addlease)
//update lease
router.put("/", )
//delete lease
router.delete("/",)
//get by id
router.get("/", )
//get all
router.get("/", )

module.exports = router;