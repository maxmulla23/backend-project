const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
// const { login, createUser } = require("../controllers/auth.controller");

// get all houses
exports.allHouses = async () => {
  return prisma.house.findMany({
    include: {
      property: true,
    },
  })
}

// get house by ID
exports.OneHouse = async (data) => {
  const { house_number, propertyId } = data

  return prisma.house.findMany({
    where: {
      AND: [
        {
          propertyId: propertyId,
        },
        { house_number: house_number },
      ],
    },
    include: {
      property: true,
    },
  })
}

// post
exports.addNewHouse = async (data) => {
  const { house_number, propertyId } = data
  return prisma.house.create({
    data: {
      house_number,
      propertyId,
    },
    select: {
      id: true,
      house_number: true,
      created_at: true,
      updated_at: true,
      userId:true,
      propertyId: true,
      property: {
        select: {
          id: true,
          name: true,
          location: true,
          created_at: true,
          updated_at: true,
        },
      },
    },
  })
}

//add user to house
exports.addUser = async (data) => {
  const { house_id, user_id } = data
  console.log(house_id)
  console.log(user_id)

  return prisma.house.update({
    where: {
      id: house_id,
    },
    data: {
      userId: user_id,
    },
    select: {
      id: true,
      house_number: true,
      userId:true,
      created_at: true,
      updated_at: true,
      propertyId: true,
      property: {
        select: {
          id: true,
          name: true,
          location: true,
          created_at: true,
          updated_at: true,
        },
      },
    },
  })
}
