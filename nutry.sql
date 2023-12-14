-- phpMyAdmin SQL Dump
-- version 2.11.0
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 14, 2023 at 02:06 PM
-- Server version: 4.1.22
-- PHP Version: 5.2.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `nutry`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE IF NOT EXISTS `food` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(20) NOT NULL default '',
  `quantity` int(11) NOT NULL default '0',
  `unit` varchar(4) NOT NULL default '',
  `protein` float NOT NULL default '0',
  `fat` float NOT NULL default '0',
  `calories` float NOT NULL default '0',
  `sugar` float default '0',
  `fiber` float default '0',
  `cholesterol` float default '0',
  `sodium` float default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=127 ;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `name`, `quantity`, `unit`, `protein`, `fat`, `calories`, `sugar`, `fiber`, `cholesterol`, `sodium`) VALUES
(1, 'Apple', 1, 'pc', 0.5, 0.2, 52, 0, 0, 0, 0),
(2, 'Chicken Breast', 100, 'g', 31, 3.6, 165, 0, 0, 0, 0),
(3, 'Broccoli', 100, 'g', 4, 0.5, 45, 0, 0, 0, 0),
(4, 'Olive Oil', 15, 'ml', 0, 13.5, 120, 0, 0, 0, 0),
(5, 'Chicken Breast', 100, 'g', 31, 3.6, 165, 0, 0, 85, 74),
(6, 'Salmon Fillet', 150, 'g', 33, 17, 261, 0, 0, 63, 50),
(7, 'Broccoli', 200, 'g', 5.6, 0.6, 55, 2.5, 3.7, 0, 80),
(8, 'Large Egg', 1, 'pc', 6, 5, 68, 0.6, 0, 186, 62),
(9, 'Potato', 150, 'g', 2, 0.2, 130, 1, 3.2, 0, 15),
(10, 'Carrot', 100, 'g', 0.9, 0.2, 41, 4.7, 2.8, 0, 69),
(11, 'Milk', 1, 'cup', 8, 8, 103, 12, 0, 24, 98),
(12, 'Chicken Thigh (Roast', 100, 'g', 28, 13, 297, 0, 0, 105, 74),
(13, 'Rice (White)', 150, 'g', 4, 0.3, 135, 0.1, 0.6, 0, 0),
(14, 'Banana', 1, 'pc', 1.3, 0.4, 105, 14, 2.6, 0, 1),
(15, 'Broccoli (Steamed)', 100, 'g', 2.8, 0.3, 55, 1.2, 2.6, 0, 33),
(16, 'Apple', 1, 'pc', 0.5, 0.3, 52, 10, 2.4, 0, 1),
(17, 'Egg (Boiled)', 1, 'pc', 6, 5, 68, 0.6, 0, 186, 62),
(18, 'Oatmeal', 150, 'g', 6, 3, 150, 1, 4, 0, 2),
(19, 'Salmon Fillet', 150, 'g', 25, 10, 220, 0, 0, 70, 50),
(20, 'Whole Wheat Bread', 1, 'slic', 2, 1, 70, 1, 2, 0, 125),
(21, 'Spinach', 50, 'g', 2.2, 0.3, 23, 0.4, 2.2, 0, 77),
(22, 'Ground Beef (Cooked)', 100, 'g', 26, 17, 250, 0, 0, 93, 54),
(23, 'Cheese (Cheddar)', 30, 'g', 7, 9, 110, 0.1, 0, 30, 180),
(24, 'Pasta (Spaghetti)', 100, 'g', 12, 1.3, 131, 0.5, 2.2, 0, 3),
(25, 'Orange', 1, 'pc', 1.2, 0.2, 62, 12, 2.4, 0, 0),
(26, 'Ground Turkey (Cooke', 100, 'g', 29, 8, 200, 0, 0, 80, 55),
(27, 'Yogurt (Plain)', 150, 'g', 5, 9, 150, 5, 0, 31, 46),
(28, 'Lettuce (Iceberg)', 50, 'g', 0.5, 0, 5, 0.5, 0.5, 0, 5),
(29, 'Tomato', 1, 'pc', 1, 0.2, 22, 3.9, 1.2, 0, 5),
(30, 'Ground Chicken (Cook', 100, 'g', 27, 10, 215, 0, 0, 80, 80),
(31, 'Mushrooms', 100, 'g', 3.1, 0.3, 22, 1, 2.7, 0, 5),
(32, 'Peanut Butter', 2, 'tbsp', 8, 16, 190, 3, 2, 0, 150),
(33, 'Cucumber', 1, 'pc', 0.6, 0.1, 16, 1.9, 0.7, 0, 2),
(34, 'Cabbage (Raw)', 100, 'g', 1.3, 0.1, 25, 2.3, 1.6, 0, 18),
(35, 'Turkey Sausage', 100, 'g', 16, 10, 175, 0, 0, 70, 600),
(36, 'Brown Rice', 150, 'g', 5, 1.5, 215, 0.5, 3, 0, 0),
(37, 'Peach', 1, 'pc', 0.9, 0.1, 15, 3.4, 0.5, 0, 0),
(38, 'Green Beans', 100, 'g', 1.8, 0.1, 31, 3.6, 2.7, 0, 6),
(39, 'Milk (Almond)', 1, 'cup', 1, 3, 60, 7, 1, 0, 150),
(40, 'Bell Pepper (Green)', 1, 'pc', 1.3, 0.2, 19, 3.9, 1.5, 0, 2),
(41, 'Tofu', 150, 'g', 16, 11, 183, 0.1, 1, 0, 9),
(42, 'Grilled Cheese Sandw', 1, 'serv', 12, 14, 220, 1, 0, 36, 410),
(43, 'Corn on the Cob', 1, 'pc', 2.7, 0.6, 77, 6.3, 2.7, 0, 15),
(44, 'Olive Oil', 1, 'tbsp', 0, 14, 120, 0, 0, 0, 0),
(45, 'Plain Bagel', 1, 'pc', 10, 1, 250, 2, 2, 0, 440),
(46, 'Blueberries', 100, 'g', 0.7, 0.3, 29, 5.4, 2.4, 0, 1),
(47, 'Ground Pork (Cooked)', 100, 'g', 24, 18, 297, 0, 0, 83, 60),
(48, 'Couscous with Lamb', 200, 'g', 25, 10, 300, 2, 5, 60, 400),
(49, 'Brik (Tunisian Pastr', 1, 'pc', 10, 12, 180, 1, 1, 30, 250),
(50, 'Chakchouka', 150, 'g', 6, 8, 120, 6, 3, 150, 600),
(51, 'Tunisian Salad', 100, 'g', 2, 5, 80, 2, 3, 0, 200),
(52, 'Harissa Chicken', 150, 'g', 20, 12, 250, 1, 2, 80, 350),
(53, 'Fish Tagine', 200, 'g', 30, 15, 350, 2, 3, 70, 450),
(54, 'Lablabi (Chickpea So', 250, 'ml', 10, 5, 150, 2, 4, 0, 500),
(55, 'Makroudh', 1, 'pc', 5, 8, 150, 10, 1, 20, 50),
(56, 'Ojja (Spicy Tomato a', 200, 'g', 8, 10, 180, 4, 3, 40, 300),
(57, 'Rfissa', 250, 'g', 15, 10, 220, 2, 5, 30, 400),
(58, 'Mloukhia', 150, 'g', 5, 5, 120, 2, 4, 0, 500),
(59, 'Tunisian Tuna Sandwi', 1, 'serv', 15, 8, 220, 2, 3, 30, 400),
(60, 'Stuffed Peppers (Fel', 150, 'g', 7, 6, 150, 3, 2, 15, 200),
(61, 'Tunisian Seafood Pae', 200, 'g', 20, 12, 280, 3, 2, 80, 600),
(62, 'Tunisian Vegetable T', 200, 'g', 5, 7, 150, 4, 3, 0, 400),
(63, 'Makbouba', 150, 'g', 10, 10, 200, 3, 2, 25, 300),
(64, 'Kefta Tagine', 200, 'g', 25, 15, 300, 2, 3, 70, 450),
(65, 'Tunisian Lemonade', 250, 'ml', 0, 0, 50, 12, 0, 0, 10),
(66, 'Zgougou', 1, 'cup', 5, 8, 150, 3, 2, 0, 0),
(67, 'Tunisian Lamb Stew', 200, 'g', 30, 20, 350, 2, 4, 90, 500),
(68, 'Baklava', 1, 'pc', 3, 10, 200, 15, 1, 0, 5),
(69, 'Tunisian Shakshouka', 150, 'g', 8, 10, 180, 4, 3, 40, 300),
(70, 'Tunisian Rice Pilaf', 150, 'g', 5, 7, 150, 1, 1, 0, 300),
(71, 'Tunisian Stuffed Dat', 30, 'g', 2, 4, 80, 10, 1, 0, 5),
(72, 'Msemen (Moroccan Pan', 1, 'pc', 5, 10, 150, 2, 1, 15, 100),
(73, 'Tunisian Chicken Keb', 150, 'g', 20, 10, 250, 1, 2, 80, 350),
(74, 'Khobz Tabouna', 1, 'pc', 3, 1, 80, 0, 1, 0, 150),
(75, 'Tunisian Grilled Sar', 150, 'g', 25, 15, 280, 0, 0, 90, 400),
(76, 'Makrouna Bel Khodra', 200, 'g', 10, 5, 180, 2, 3, 0, 300),
(77, 'Chorba (Tunisian Sou', 250, 'ml', 8, 5, 120, 2, 3, 0, 400),
(78, 'Tunisian Fish Soup', 250, 'ml', 15, 8, 200, 2, 3, 60, 500),
(79, 'Brik with Tuna', 1, 'pc', 10, 12, 180, 1, 1, 30, 250),
(80, 'Tunisian Lamb Cousco', 200, 'g', 25, 10, 300, 2, 5, 60, 400),
(81, 'Tunisian Vegetable C', 200, 'g', 10, 5, 180, 3, 5, 0, 300),
(82, 'Tunisian Date Cake (', 1, 'pc', 5, 8, 150, 10, 1, 20, 50),
(83, 'Tunisian Saffron Chi', 150, 'g', 20, 12, 250, 1, 2, 80, 350),
(84, 'Fricassee', 1, 'serv', 15, 10, 220, 2, 3, 40, 300),
(85, 'Tunisian Orange Sala', 100, 'g', 1, 0, 20, 4, 1, 0, 5),
(86, 'Tunisian Mint Tea', 250, 'ml', 0, 0, 5, 1, 0, 0, 10),
(87, 'Tunisian Lamb Kofta', 150, 'g', 20, 12, 250, 1, 2, 80, 350),
(88, 'Salmon', 150, 'g', 25, 10, 220, 0, 0, 70, 50),
(89, 'Brown Rice', 200, 'g', 5, 1.5, 215, 0.5, 3, 0, 0),
(90, 'Avocado', 100, 'g', 2, 15, 160, 0.7, 6.7, 0, 7),
(91, 'Sweet Potato', 150, 'g', 1.2, 0.2, 112, 3.3, 4, 0, 70),
(92, 'Quinoa', 100, 'g', 4, 1.5, 120, 0.9, 2.8, 0, 5),
(93, 'Chicken Breast (Gril', 100, 'g', 31, 3.6, 165, 0, 0, 85, 74),
(94, 'Kale', 50, 'g', 1, 0.5, 32, 0.5, 1.3, 0, 25),
(95, 'Almonds', 30, 'g', 6, 14, 160, 1, 3.5, 0, 0),
(96, 'Egg (Boiled)', 1, 'pc', 6, 5, 68, 0.6, 0, 186, 62),
(97, 'Black Beans', 150, 'g', 7.5, 0.5, 115, 0.5, 7.5, 0, 2),
(98, 'Banana', 1, 'pc', 1.3, 0.4, 105, 14, 2.6, 0, 1),
(99, 'Cauliflower (Steamed', 100, 'g', 2, 0.3, 25, 1.9, 2.5, 0, 30),
(100, 'Greek Yogurt', 150, 'g', 15, 10, 190, 8, 0, 40, 50),
(101, 'Strawberries', 100, 'g', 0.7, 0.3, 32, 4.9, 2, 0, 1),
(102, 'Tuna (Canned in Wate', 100, 'g', 25, 1, 110, 0, 0, 20, 350),
(103, 'Broccoli (Steamed)', 100, 'g', 2.8, 0.3, 55, 1.2, 2.6, 0, 33),
(104, 'Lentils', 150, 'g', 9, 0.4, 115, 0.8, 7.9, 0, 5),
(105, 'Whole Wheat Bread', 1, 'slic', 2, 1, 70, 1, 2, 0, 125),
(106, 'Peanut Butter', 2, 'tbsp', 8, 16, 190, 3, 2, 0, 150),
(107, 'Mango', 1, 'pc', 0.8, 0.4, 45, 9, 1.6, 0, 1),
(108, 'Cottage Cheese', 100, 'g', 11, 4, 98, 2, 0, 15, 405),
(109, 'Spinach (Raw)', 50, 'g', 2.2, 0.3, 23, 0.4, 2.2, 0, 77),
(110, 'Olive Oil', 1, 'tbsp', 0, 14, 120, 0, 0, 0, 0),
(111, 'Carrot (Raw)', 1, 'pc', 0.6, 0.3, 12, 2.6, 1.5, 0, 42),
(112, 'Pomegranate Seeds', 100, 'g', 1.7, 0.9, 83, 9.2, 4, 0, 3),
(113, 'Hummus', 2, 'tbsp', 2, 6, 70, 0, 1, 0, 120),
(114, 'Walnuts', 30, 'g', 4, 18, 190, 0.7, 1.7, 0, 0),
(115, 'Orange', 1, 'pc', 1.2, 0.2, 62, 12, 2.4, 0, 0),
(116, 'Shrimp (Grilled)', 100, 'g', 24, 1.7, 99, 0, 0, 195, 120),
(117, 'Asparagus (Steamed)', 100, 'g', 2.2, 0.2, 20, 1.8, 2.1, 0, 2),
(118, 'Blueberries', 100, 'g', 0.7, 0.3, 29, 5.4, 2.4, 0, 1),
(119, 'Cucumber (Raw)', 1, 'pc', 0.6, 0.1, 16, 1.9, 0.7, 0, 2),
(120, 'Tofu', 150, 'g', 16, 11, 183, 0.1, 1, 0, 9),
(121, 'Beef (Grilled)', 100, 'g', 26, 17, 250, 0, 0, 93, 54),
(122, 'Chickpeas', 150, 'g', 7.3, 2.4, 134, 1.1, 4.8, 0, 11),
(123, 'Red Bell Pepper (Raw', 1, 'pc', 1.3, 0.2, 19, 3.9, 1.5, 0, 2),
(124, 'Mushrooms', 100, 'g', 3.1, 0.3, 22, 1, 2.7, 0, 5),
(125, 'Pineapple', 100, 'g', 0.5, 0.1, 50, 9.9, 1.4, 0, 1),
(126, 'Turkey Breast (Slice', 100, 'g', 29, 1, 135, 0, 0, 70, 50);

-- --------------------------------------------------------

--
-- Table structure for table `meal`
--

CREATE TABLE IF NOT EXISTS `meal` (
  `id` int(30) NOT NULL auto_increment,
  `user_id` int(11) NOT NULL default '0',
  `name` varchar(30) NOT NULL default '',
  `type` enum('breakfast','lunch','dinner','snacks') NOT NULL default 'breakfast',
  PRIMARY KEY  (`id`,`user_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `meal`
--

INSERT INTO `meal` (`id`, `user_id`, `name`, `type`) VALUES
(28, 67, 'kosksi', 'dinner'),
(29, 68, 'kosksi', 'dinner'),
(30, 69, '3ejja', 'lunch');

-- --------------------------------------------------------

--
-- Table structure for table `meal-food`
--

CREATE TABLE IF NOT EXISTS `meal-food` (
  `meal_id` int(11) NOT NULL default '0',
  `food_id` int(11) NOT NULL default '0',
  `quantity_multiplier` int(11) NOT NULL default '0',
  PRIMARY KEY  (`meal_id`,`food_id`),
  KEY `food_id` (`food_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meal-food`
--

INSERT INTO `meal-food` (`meal_id`, `food_id`, `quantity_multiplier`) VALUES
(28, 9, 1),
(28, 29, 4),
(29, 14, 3),
(29, 17, 1),
(30, 8, 3),
(30, 29, 7),
(30, 56, 1);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE IF NOT EXISTS `request` (
  `request_id` int(11) NOT NULL auto_increment,
  `user_id` int(11) NOT NULL default '0',
  `title` varchar(100) NOT NULL default '',
  `content` text NOT NULL,
  `timestamp` timestamp NOT NULL default CURRENT_TIMESTAMP,
  `admin_response` text,
  PRIMARY KEY  (`request_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`request_id`, `user_id`, `title`, `content`, `timestamp`, `admin_response`) VALUES
(8, 1, 'a7sen source protein ?', '<p>tnajem t9oli enehu a7sen source protein ?</p>', '2023-12-12 10:29:36', '<h2>YES  !!! </h2><p><strong>Eggs,Chiken</strong> breast rkhas w yet7adhrou fisa3</p>'),
(9, 1, 'el batata 9adeh feha calories', '<h1>test test test test</h1><p><span class=\\"ql-font-monospace\\"> test test test test</span> test test test test test test test test test test test test test test <strong>test test test  </strong>	</p>', '2023-12-12 11:35:34', '<h1>mana3arefch</h1>'),
(10, 67, 'chnowa nakel bch nesmen', '<h1>testsadjaskjdahs</h1><p>dkjlahjldHSFLJKSAHfjklfhkasjfh?</p>', '2023-12-12 11:45:51', '<p>lishdoiqhioduwqoiduoiqwudqw</p>'),
(11, 68, 'so2al', '<p>bara nik </p>', '2023-12-12 12:23:15', '<p>hani bach nji nikak</p>'),
(12, 69, 'sodium', '<p>ngarni dam</p>', '2023-12-12 12:28:39', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(7) NOT NULL auto_increment,
  `email` varchar(30) NOT NULL default '',
  `password` varchar(100) NOT NULL default '',
  `first_name` varchar(20) NOT NULL default '',
  `last_name` varchar(20) NOT NULL default '',
  `is_staff` tinyint(1) NOT NULL default '0',
  `is_active` tinyint(1) NOT NULL default '1',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=70 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `first_name`, `last_name`, `is_staff`, `is_active`) VALUES
(1, 'hbechir52@gmail.com', '1', 'bechir', 'hamdi', 1, 1),
(2, 'test1@gmail.com', '1', 'bechir', 'hamdi', 0, 1),
(4, 'test3@gmail.com', '1', 'bechir', 'hamdi', 0, 0),
(10, 'admin@gmail.com', '0000', 'admin', 'hamdi', 1, 1),
(11, 'test3@gmail.com', '1', 'bechir', 'hamdi', 0, 0),
(12, 'b@b', '1', 'Bechir', 'Hamdi', 0, 0),
(13, 'user1@example.com', '0000', 'John', 'Doe', 0, 1),
(14, 'user2@example.com', '0000', 'Alice', 'Smith', 0, 0),
(15, 'user3@example.com', '0000', 'Bob', 'Johnson', 0, 1),
(16, 'user4@example.com', '0000', 'Eva', 'Brown', 0, 1),
(17, 'user5@example.com', '0000', 'Michael', 'Miller', 0, 1),
(18, 'user6@example.com', '0000', 'Olivia', 'Davis', 0, 1),
(19, 'user7@example.com', '0000', 'Daniel', 'Wilson', 0, 1),
(20, 'user8@example.com', '0000', 'Sophia', 'Moore', 0, 1),
(21, 'user9@example.com', '0000', 'Matthew', 'Lee', 0, 1),
(22, 'user10@example.com', '0000', 'Emma', 'Taylor', 0, 1),
(23, 'user11@example.com', '0000', 'Liam', 'Anderson', 0, 1),
(24, 'user12@example.com', '0000', 'Ava', 'White', 0, 1),
(25, 'user13@example.com', '0000', 'Mason', 'Martinez', 0, 1),
(26, 'user14@example.com', '0000', 'Isabella', 'Brown', 0, 1),
(27, 'user15@example.com', '0000', 'Noah', 'Jones', 0, 1),
(28, 'user16@example.com', '0000', 'Sophia', 'Taylor', 0, 1),
(29, 'user17@example.com', '0000', 'Ethan', 'Davis', 0, 1),
(30, 'user18@example.com', '0000', 'Olivia', 'White', 0, 1),
(31, 'user19@example.com', '0000', 'William', 'Smith', 0, 1),
(32, 'user20@example.com', '0000', 'Emily', 'Johnson', 0, 1),
(33, 'user21@example.com', '0000', 'James', 'Brown', 0, 1),
(34, 'user22@example.com', '0000', 'Grace', 'Miller', 0, 1),
(35, 'user23@example.com', '0000', 'Alexander', 'Martinez', 0, 1),
(36, 'user24@example.com', '0000', 'Emma', 'Jones', 0, 1),
(37, 'user25@example.com', '0000', 'Benjamin', 'Taylor', 0, 1),
(38, 'user26@example.com', '0000', 'Ava', 'Smith', 0, 1),
(39, 'user27@example.com', '0000', 'Logan', 'Johnson', 0, 1),
(40, 'user28@example.com', '0000', 'Ella', 'Brown', 0, 1),
(41, 'user29@example.com', '0000', 'Jackson', 'White', 0, 1),
(42, 'user30@example.com', '0000', 'Mia', 'Miller', 0, 1),
(43, 'user31@example.com', '0000', 'Lucas', 'Jones', 0, 1),
(44, 'user32@example.com', '0000', 'Lily', 'Davis', 0, 1),
(45, 'user33@example.com', '0000', 'Carter', 'Smith', 0, 1),
(46, 'user34@example.com', '0000', 'Grace', 'Taylor', 0, 1),
(47, 'user35@example.com', '0000', 'Christopher', 'Johnson', 0, 1),
(48, 'user36@example.com', '0000', 'Chloe', 'Brown', 0, 1),
(49, 'user37@example.com', '0000', 'Daniel', 'Miller', 0, 1),
(50, 'user38@example.com', '0000', 'Ava', 'White', 0, 1),
(51, 'user39@example.com', '0000', 'Oliver', 'Jones', 0, 1),
(52, 'user40@example.com', '0000', 'Sophia', 'Davis', 0, 1),
(53, 'user41@example.com', '0000', 'William', 'Brown', 0, 1),
(54, 'user42@example.com', '0000', 'Emily', 'Taylor', 0, 1),
(55, 'user43@example.com', '0000', 'Ethan', 'Smith', 0, 1),
(56, 'user44@example.com', '0000', 'Ava', 'Johnson', 0, 1),
(57, 'user45@example.com', '0000', 'Noah', 'Miller', 0, 1),
(58, 'user46@example.com', '0000', 'Isabella', 'White', 0, 1),
(59, 'user47@example.com', '0000', 'Liam', 'Jones', 0, 1),
(60, 'user48@example.com', '0000', 'Olivia', 'Brown', 0, 1),
(61, 'user49@example.com', '0000', 'Mason', 'Taylor', 0, 1),
(62, 'user50@example.com', '0000', 'Sophia', 'Davis', 0, 1),
(63, 'bachra1508@gmail.com', '1', 'Bechir', 'Hamdi', 0, 1),
(64, 'bachra@gmail.com', '1', 'bechir', 'hamdi', 0, 1),
(65, 'bachra@gmail.com', '1', 'bechir', 'hamdi', 0, 1),
(66, 'bachra@gmail.com', '1', 'bechir', 'hamdi', 0, 1),
(67, 'hbechir522@gmail.com', '1', 'qwqw', 'asas', 0, 1),
(68, 'bochboch@gmail.com', 'qwert', 'bochboch', 'jalozl', 1, 1),
(69, 'islem.alibii@gmail.com', 'islem', 'alibi', 'islem', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_food`
--

CREATE TABLE IF NOT EXISTS `user_food` (
  `user_id` int(11) NOT NULL default '0',
  `food_id` int(11) NOT NULL default '0',
  `date` datetime NOT NULL default '0000-00-00 00:00:00',
  `meal_type` enum('breakfast','lunch','dinner','snacks') NOT NULL default 'breakfast',
  `quantity_multiplier` int(11) NOT NULL default '0',
  PRIMARY KEY  (`user_id`,`food_id`),
  KEY `food_id` (`food_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_food`
--


--
-- Constraints for dumped tables
--

--
-- Constraints for table `meal`
--
ALTER TABLE `meal`
  ADD CONSTRAINT `meal_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `meal-food`
--
ALTER TABLE `meal-food`
  ADD CONSTRAINT `meal-food_ibfk_3` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `meal-food_ibfk_4` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user_food`
--
ALTER TABLE `user_food`
  ADD CONSTRAINT `user_food_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `user_food_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`);
