<?php
    //connection to the bdd
    require('connect.php');
    
    //query to get the
    $query = "
        SELECT *
        FROM products
    ";
    
    $statement = $pdo->prepare($query);

    $statement->execute();
    
    $order = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-Type: Application/json');

    echo json_encode($order);  