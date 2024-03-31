-- CreateTable
CREATE TABLE `admin` (
    `admin_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NOT NULL,
    `admin_pw` INTEGER NOT NULL,

    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auftrag` (
    `auftrag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `kennzeichen` VARCHAR(45) NOT NULL,
    `info` VARCHAR(45) NOT NULL,
    `eintreffdatum` DATE NOT NULL,
    `abgabedatum` DATE NULL,
    `email` VARCHAR(45) NOT NULL,
    `admin_id` INTEGER NOT NULL,
    `kunde_id` INTEGER NOT NULL,

    PRIMARY KEY (`auftrag_id`)
);

-- CreateTable
CREATE TABLE `kunde` (
    `kunde_id` INTEGER NOT NULL AUTO_INCREMENT,
    `vorname` VARCHAR(45) NOT NULL,
    `nachname` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `telnummer` INTEGER NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`kunde_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `auftrag` ADD CONSTRAINT `auftrag_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admin`(`admin_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `auftrag` ADD CONSTRAINT `auftrag_kunde_id_fkey` FOREIGN KEY (`kunde_id`) REFERENCES `kunde`(`kunde_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

