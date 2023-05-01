const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//get all
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        roleId: 2
      },
      include: {
        House: true,
        role: true,
        Payment: true
      }
    })
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
}
