const jwt = require("jsonwebtoken");

exports.jwtGenerator = (id) => {
  const payload = {
    id: id,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};
