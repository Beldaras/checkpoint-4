-- MySQL Script generated by MySQL Workbench
-- Mon Apr  3 14:15:05 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mangaDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mangaDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mangaDB` DEFAULT CHARACTER SET utf8 ;
USE `mangaDB` ;

-- -----------------------------------------------------
-- Table `mangaDB`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mangaDB`.`user` ;

CREATE TABLE IF NOT EXISTS `mangaDB`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(45) NOT NULL,
  `email` VARCHAR(155) NOT NULL,
  `hashed_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mangaDB`.`status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mangaDB`.`status` ;

CREATE TABLE IF NOT EXISTS `mangaDB`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `mangaDB`.`status` (`id`, `state`) VALUES ('1', 'Edition complète'), ('2', 'Edition en cours');

-- -----------------------------------------------------
-- Table `mangaDB`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mangaDB`.`category` ;

CREATE TABLE IF NOT EXISTS `mangaDB`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `mangaDB`.`category` (`id`, `type`) VALUES ('1', 'shonen'), ('2', 'seinen'), ('3', 'shojo');

-- -----------------------------------------------------
-- Table `mangaDB`.`manga`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mangaDB`.`manga` ;

CREATE TABLE IF NOT EXISTS `mangaDB`.`manga` (
  `idmanga` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `mangaka` VARCHAR(155) NOT NULL,
  `editor` VARCHAR(100) NOT NULL,
  `status_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`idmanga`, `status_id`, `category_id`),
  INDEX `fk_manga_status2_idx` (`status_id` ASC) VISIBLE,
  INDEX `fk_manga_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_manga_status2`
    FOREIGN KEY (`status_id`)
    REFERENCES `mangaDB`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_manga_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `mangaDB`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `mangaDB`.`manga` (`idmanga`, `name`, `mangaka`, `editor`, `status_id`, `category_id`) VALUES ('1', 'Versus Fighting Story', 'Izu, Kalon, Madd', 'Glénat', '1', '1'), ('2', 'Dragon Quest - The Adventure of Daï', 'Koji Inada, Riku Sanjô, Yuji Horii', 'Delcourt/Tonkam', '2', '1');

-- -----------------------------------------------------
-- Table `mangaDB`.`volume`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mangaDB`.`volume` ;

CREATE TABLE IF NOT EXISTS `mangaDB`.`volume` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  `release_date` DATE NOT NULL,
  `pages` INT NOT NULL,
  `picture` VARCHAR(150) NULL,
  `read` TINYINT NOT NULL DEFAULT 0,
  `synopsis` TEXT NULL,
  `manga_idmanga` INT NOT NULL,
  PRIMARY KEY (`id`, `manga_idmanga`),
  INDEX `fk_volume_manga1_idx` (`manga_idmanga` ASC) VISIBLE,
  CONSTRAINT `fk_volume_manga1`
    FOREIGN KEY (`manga_idmanga`)
    REFERENCES `mangaDB`.`manga` (`idmanga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `mangaDB`.`volume` (`id`, `number`, `release_date`, `pages`, `picture`, `read`, `manga_idmanga`) VALUES ('1', '1', '2018-03-07', '192', 'VFS-T1.jpeg', '0', '1'), ('2', '2', '2018-07-04', '192', 'VFS-T2.jpeg', '0', '1'), ('3', '3', '2019-05-15', '192', 'VFS-T3.jpeg', '0', '1'), ('4', '4', '2020-02-19', '192', 'VFS-T4.jpeg', '0', '1'), ('5', '1', '2022-03-02', '336', 'Dai-T1.jpg', '0', '2'), ('6', '2', '2022-03-02', '336', 'Dai-T2.jpg', '0', '2'), ('7', '3', '2022-07-06', '352', 'Dai-T3.jpg', '0', '2'), ('8', '4', '2022-10-12', '352', 'Dai-T4.jpg', '0', '2'), ('9', '5', '2023-03-29', '288', 'Dai-T5.jpg', '0', '2'), ('10', '6', '2023-03-29', '272', 'Dai-T6.jpg', '0', '2');


-- -----------------------------------------------------
-- Table `mangaDB`.`user_has_manga`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mangaDB`.`user_has_manga` ;

CREATE TABLE IF NOT EXISTS `mangaDB`.`user_has_manga` (
  `user_id` INT NOT NULL,
  `manga_idmanga` INT NOT NULL,
  PRIMARY KEY (`user_id`, `manga_idmanga`),
  INDEX `fk_user_has_manga_manga1_idx` (`manga_idmanga` ASC) VISIBLE,
  INDEX `fk_user_has_manga_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_manga_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mangaDB`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_manga_manga1`
    FOREIGN KEY (`manga_idmanga`)
    REFERENCES `mangaDB`.`manga` (`idmanga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
