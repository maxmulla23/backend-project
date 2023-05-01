/*
  Warnings:

  - You are about to drop the column `houseId` on the `notice` table. All the data in the column will be lost.
  - Added the required column `propertyId` to the `Notice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `notice` DROP FOREIGN KEY `Notice_houseId_fkey`;

-- AlterTable
ALTER TABLE `notice` DROP COLUMN `houseId`,
    ADD COLUMN `propertyId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Notice` ADD CONSTRAINT `Notice_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
