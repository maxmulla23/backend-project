const { newlease } = require("../services/lease.service")

//post new lease
exports.addlease = async (req,res) =>{
    try {
        const new_lease = await newlease(req.body)
        res.status(200).json(new_lease)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}
//update lease
//delete lease
//get by id
//get all