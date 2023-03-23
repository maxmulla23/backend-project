const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

//post new issue
exports.newissue = async (data) =>{
    const{ userId, title, description, houseId } = data
    return prisma.issue.create({
        data: {
            userId,
            title,
            description,
            houseId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            houseId: true,
            userId: true,
            house: {
                select: {
                    id: true,
                    house_number:true,
                    userId:true,
                    propertyId:true
                },
            },
         
        }
    })
}
//get by id
exports.oneIssue = async (data) => {
    const { id } = data
    return prisma.issue.findMany({
        where: {
            AND: [
                {
                    id: id,
                },
            
            ],
        },
        include: {
            house: true
        }
    })
}

//get all 
exports.allIssues = async () =>{
    return prisma.issue.findMany({
        include: {
            house: true,
        },
    })
}
//delete issue
exports.deleteissue = async (data) => {
    const {id} = data
    return prisma.issue.delete({
        where: {
            id: id,
        }
    })
}