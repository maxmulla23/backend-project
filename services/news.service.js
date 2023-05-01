const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

//post new notice
exports.newnotice = async (data) => {
  const { title, description, propertyId } = data
  return prisma.news.create({
    data: {
      title,
      description,
      propertyId,
    },
    select: {
      id: true,
    },
  })
}
//get all notice
exports.allnotices = async () => {
  return prisma.news.findMany({
    include: {
      property: true,
    },
    orderBy: {
      created_at: "desc",
    },
  })
}
//delete notice
exports.deletenotice = async (data) => {
  const { id } = data
  return prisma.notice.delete({
    where: {
      id: id,
    },
  })
}

//get my notices
exports.onenotice = async (data) => {
  const { id } = data

  return prisma.news.findMany({
    where: {
      propertyId: parseInt(id),
    },
    include: {
      property: true,
    },
    orderBy: {
      created_at: "desc",
    },
  })
}
