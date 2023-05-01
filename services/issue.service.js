const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

//post new issue
exports.newissue = async (data) => {
  const { userId, title, description, houseId } = data
  return prisma.issue.create({
    data: {
      userId,
      title,
      description,
      houseId,
    },
    select: {
      id: true,
    },
  })
}

//get my complaints
exports.oneIssue = async (data) => {
  const { id } = data
  return prisma.issue.findMany({
    where: {
      userId: parseInt(id),
    },
    include: {
      owner: true,
      house: true,
    },
  })
}

//get all
exports.allIssues = async () => {
  return prisma.issue.findMany({
    include: {
      owner: true,
      house: true,
    },
    orderBy: {
      created_at: "desc",
    },
  })
}
//delete issue
exports.deleteissue = async (data) => {
  const { id } = data
  return prisma.issue.delete({
    where: {
      id: id,
    },
  })
}
