DROP DATABASE IF EXISTS `GestionUserApp`;
CREATE DATABASE `GestionUserApp`;
USE `GestionUserApp`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,

);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
);

INSERT INTO user ( email, password)
VALUES 
('test@gmail.com', 'test');
('eric@gmail.com', '1234');

INSERT INTO student (firstname, lastname, email)
VALUES 
  ('Valere', 'Apert', 'valerie.apert@example.com'),
  ('Alice', 'Johnsie', 'alice.johnsie@example.com'),
  ('Robert', 'Brown', 'robert.brown@example.com'),
  ('Sophie', 'Garcia', 'sophie.garcia@example.com'),
  ('Maxime', 'Dubois', 'maxime.dubois@example.com'),
  ('Julia', 'Lee', 'julia.lee@example.com'),
  ('Alexandre', 'Moreau', 'alexandre.moreau@example.com'),
  ('Laura', 'Sanchez', 'laura.sanchez@example.com'),
  ('Thomas', 'Rousseau', 'thomas.rousseau@example.com'),
  ('john', 'doe', 'j.do@example.com'),