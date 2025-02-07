-- CreateTable
CREATE TABLE `Field` (
    `fieldCode` VARCHAR(191) NOT NULL,
    `fieldName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `extendSize` VARCHAR(191) NOT NULL,
    `fieldImage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`fieldCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Crop` (
    `cropId` VARCHAR(191) NOT NULL,
    `cropName` VARCHAR(191) NOT NULL,
    `cropImage` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `fieldCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cropId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Staff` (
    `staffId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `contactNo` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `fieldCode` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Staff_email_key`(`email`),
    PRIMARY KEY (`staffId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `vehicleCode` VARCHAR(191) NOT NULL,
    `licensePlateNo` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Vehicle_licensePlateNo_key`(`licensePlateNo`),
    PRIMARY KEY (`vehicleCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `equipmentId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `fieldCode` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`equipmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Crop` ADD CONSTRAINT `Crop_fieldCode_fkey` FOREIGN KEY (`fieldCode`) REFERENCES `Field`(`fieldCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Staff` ADD CONSTRAINT `Staff_fieldCode_fkey` FOREIGN KEY (`fieldCode`) REFERENCES `Field`(`fieldCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `Staff`(`staffId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_fieldCode_fkey` FOREIGN KEY (`fieldCode`) REFERENCES `Field`(`fieldCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `Staff`(`staffId`) ON DELETE CASCADE ON UPDATE CASCADE;
