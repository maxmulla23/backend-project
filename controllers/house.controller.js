const { checkIfExists } = require("../services/auth.service")
const {
  addNewHouse,
  allHouses,
  House,
  addUser,
  OneHouse,
} = require("../services/house.service")

exports.addHouse = async (req, res) => {
  try {
    const newHouse = await addNewHouse(req.body)
    console.log(newHouse)
    res.status(200).json(newHouse)
  } catch (error) {
    res.status(500).json(Error)
  }
}

//add user to house
exports.addUser = async (req, res) => {
  try {
    const updateHouse = await addUser(req.body)
    res.status(200).json(updateHouse)
  } catch (error) {
    res.status(500).json(error)
  }
}

//get all
exports.Houses = async (req, res) => {
  try {
    const Houses = await allHouses()
    res.status(200).json(Houses)
  } catch (err) {
    res.status(500).json(err)
  }
}

//get house by id
exports.House = async (req, res) => {
  try {
    const house = await OneHouse(req.body)
    res.status(200).json(house)
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
}
