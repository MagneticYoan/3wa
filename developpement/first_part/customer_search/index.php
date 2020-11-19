<?php
$pdo = new PDO(
            'mysql:host=home.3wa.io:3307;dbname=live-33_yoanl_blog',
            'yoanl',
            '7b184572NDBkMDQ0Y2Y3MmYyMWE0MTJiYWVhOWExf61b475d',// ici le mot de passe
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    
$pdo->exec('set names utf8');
    
$search = $_POST['customer'];

$query = "
    SELECT customerNumber, customerName
    FROM customers
    WHERE customerName 
    LIKE '%$search%'
";

$statement = $pdo->prepare($query);

$statement->execute();

$orders = $statement->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: Application/json');

echo json_encode($order);  
// foreach ($order)
// echo <tr><td>$customerNumber</td><td>$customerName</td></tr>