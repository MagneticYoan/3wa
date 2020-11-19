<?php
    
    require('connect.php');
    
    $query = "
        SELECT id, name, comments FROM todo";
    
    $statement = $pdo->prepare($query);
    $statement->execute();
    $todo = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    var_dump($todo);
    echo json_encode($todo);
    header('Content-Type: Application/json');