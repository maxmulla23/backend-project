const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


//post new lease
exports.newlease = async (data) => {
    const{ startdate, description, enddate, userId, houseId } = data;

    return prisma.lease.create({
        data: {
            startdate,
            description,
            enddate,
            userId,
            enddate,
            houseId,
        },
        select: {
            id: true,
            startdate,
            description,
            enddate,
            userId,
            enddate,
            houseId,
            user: {
                select: {
                    id: true,
                    firstname:true,
                    lastname:true,
                },
            },
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
//update lease
//delete lease
//get by id
//get all