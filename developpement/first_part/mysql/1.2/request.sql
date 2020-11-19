<?php

// Connection a une base de donnees avec l'objet PDO /
// https://www.php.net/manual/en/book.pdo.php



// https://www.php.net/manual/en/pdo.connections.php // Connection
// $credentials = [

// ];

//PHP Data Objects

$pdo = new PDO(
    'mysql:host=home.3wa.io:3307;dbname=live-33_yoanl',
    'yoanl',
    '7b184572NDBkMDQ0Y2Y3MmYyMWE0MTJiYWVhOWExf61b475d',// ici le mot de passe
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$pdo->exec('set names utf8');

var_dump($pdo);






// $connection = '';
