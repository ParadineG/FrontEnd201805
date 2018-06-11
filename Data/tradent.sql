-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Loomise aeg: Juuni 11, 2018 kell 08:03 EL
-- Serveri versioon: 10.1.31-MariaDB
-- PHP versioon: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Andmebaas: `tradent`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `user` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `furniture` tinyint(4) DEFAULT NULL,
  `sports` tinyint(4) DEFAULT NULL,
  `kitchen` tinyint(4) DEFAULT NULL,
  `clothes` tinyint(4) DEFAULT NULL,
  `electronics` tinyint(4) DEFAULT NULL,
  `home` tinyint(4) DEFAULT NULL,
  `books` tinyint(4) DEFAULT NULL,
  `tools` tinyint(4) DEFAULT NULL,
  `other` tinyint(4) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `pricer` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Andmete tõmmistamine tabelile `items`
--

INSERT INTO `items` (`id`, `name`, `description`, `photo`, `user`, `furniture`, `sports`, `kitchen`, `clothes`, `electronics`, `home`, `books`, `tools`, `other`, `price`, `pricer`, `location`) VALUES
(14, 'Kasutatud tugitool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 'temp.JPG', '', 0, 0, 1, 0, 0, 0, 0, 0, 0, 125, 'Sell', 'Central'),
(15, 'Kulunud laualamp', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'temp.JPG', 'sbg@tlu.ee', 0, 0, 0, 0, 0, 1, 0, 0, 0, 64, 'Sell', 'Central'),
(16, 'Kasutatud koerakuut', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 'temp.JPG', 'sbg@tlu.ee', 0, 0, 0, 0, 0, 0, 1, 0, 0, 250, 'Sell', 'Central'),
(17, 'Uus roheline pink', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 'temp.JPG', 'sbg@tlu.ee', 1, 0, 0, 0, 0, 0, 0, 0, 0, 35, 'Sell', 'Central'),
(18, 'Uus laud', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 'temp.JPG', 'sbg@tlu.ee', 0, 0, 0, 0, 0, 0, 0, 1, 0, 89, 'Sell', 'Central');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `location` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pricer` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `arts` tinyint(1) NOT NULL,
  `music` tinyint(1) NOT NULL,
  `language` tinyint(1) NOT NULL,
  `general` tinyint(1) NOT NULL,
  `household` tinyint(1) NOT NULL,
  `mecha` tinyint(1) NOT NULL,
  `other` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Andmete tõmmistamine tabelile `service`
--

INSERT INTO `service` (`id`, `name`, `description`, `user`, `price`, `location`, `pricer`, `arts`, `music`, `language`, `general`, `household`, `mecha`, `other`) VALUES
(4, 'sa', 'sa', 'sbg@tlu.ee', 7, 'volvo', 'Give Away', 0, 0, 0, 0, 0, 1, '0');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `profile` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `info` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tweeter` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `instagram` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkedIn` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Andmete tõmmistamine tabelile `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `profile`, `info`, `facebook`, `tweeter`, `instagram`, `linkedIn`) VALUES
(4, 'Saba', 'sbg@tlu.ee', '123', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Roman', 'paradine@tlu.ee', 'roman', NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indeksid tõmmistatud tabelitele
--

--
-- Indeksid tabelile `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT tõmmistatud tabelitele
--

--
-- AUTO_INCREMENT tabelile `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT tabelile `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT tabelile `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
