CREATE database blog;

USE blog;

CREATE TABLE `live-33_yoanl_blog`.`articles` ( `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT , 
    `titre` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL , 
    `description` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) 
    ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;
    
INSERT INTO articles (id, nom, prenom, email, password, created_at)
VALUES (null, 'SUPER TITRE', 'What about now ?', CURRENT_TIMESTAMP)

ALTER TABLE articles ADD COLUMN updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;

INSERT INTO `articles`('updated_at')
VALUES (10-03-1999);



-- CREATE DATABASE blog;

-- USE blog;

-- DROP TABLE nom-table;

ALTER TABLE articles ADD COLUMN nom VARCHAR(30) NOT NULL DEFAULT NONE;
ALTER TABLE articles ADD COLUMN prenom VARCHAR(30) NOT NULL DEFAULT NONE;
ALTER TABLE articles ADD COLUMN email VARCHAR(30) NOT NULL DEFAULT NONE;
ALTER TABLE articles ADD COLUMN password VARCHAR(30) NOT NULL DEFAULT NONE;

INSERT INTO articles (id, nom, prenom, email, password, created_at, updated_at)
VALUES (NULL, 'Yoyo', 'Kyuke', 'yoyokoko@machin.com', '£12oihfzeoifjetgfDDeerIJDFBPIJSDG', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO `articles` (`id`, `title`, `body`, `user_id`, `created_at`)
VALUES (NULL, 'mon super titre', 'Let me tell you the approach i used', 1, CURRENT_TIMESTAMP);

SELECT CONCAT(nom, ' ', prenom) AS fullname from users WHERE id = 1;
