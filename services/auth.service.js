const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
// check if user exists
// adding a simple change

exports.checkIfExists = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      password: true,
      email: true,
      roleId: true,
    },
  });
};

exports.createNewUser = async (data) => {
  const { firstname, lastname, email, roleId, password } = data;

  const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(password, salt);

  return prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      roleId,
      password: bcryptPassword,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      roleId: true,
    },
  });
};

exports.comparePasswords = async (data) => {
  const { email, password } = data;

  const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(password, salt);

  return prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      roleId,
      password: bcryptPassword,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      roleId: true,
    },
  });
};
