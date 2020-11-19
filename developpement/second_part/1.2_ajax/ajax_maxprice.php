<?php
    
    require('connect.php');
    
    $priceMax = $_GET['key'];
    
    $query = "
        SELECT *
        FROM products
        WHERE buyPrice < $priceMax
    ";
    
    $statement = $pdo->prepare($query);

    $statement->execute();
    
    $order = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-Type: Application/json');

    echo json_encode($order);  