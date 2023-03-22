const router = require("express").Router()
const {
  addHouse,
  Houses,
  House,
  addUser,
} = require("../controllers/house.controller")

//add new house
router.post("/createhouse", addHouse)

//update house
router.put("/edithouse", addUser)
//get all houses
router.get("/", Houses)

//get by id
router.get("/onehouse", House)

module.exports = router
