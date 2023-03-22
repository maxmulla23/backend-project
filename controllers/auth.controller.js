const { checkIfExists, createNewUser } = require("../services/auth.service");
const { jwtGenerator } = require("../utils/helpers");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    const user = await checkIfExists(req.body.email);
    console.log(user)
    if (user) return res.status(400).json({ msg: "user already exists" });

    const newuser = await createNewUser(req.body);
    
    res.status(200).json(newuser);
  } catch (error) { 
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await checkIfExists(email);

    if (!user) return res.status(400).json({ msg: "user does not exist" });

    // Now check if password is correct
    const validPassword = await bcrypt.compareSync(password, user.password);

    if (!validPassword)
      return res.status(400).json({ msg: "Incorrect email or password" });

    // Assign JWT
    delete user["password"];
    const token = await jwtGenerator(user.id);

    res.status(200).json({ token, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Internal Server error");
  }
};
