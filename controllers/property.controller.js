const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//get all
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      include: {
        House: true
      }
    })
    res.status(200).json(properties)
  } catch (err) {
    res.status(500).json(err)
  }
}
