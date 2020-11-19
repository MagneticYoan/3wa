<?php


$title = 'Lotterie';

$rules = ['rule 1 ', 'rule 2', 'rule 3'];

function randomNum($min, $max) {
    return rand($min, $max);
}

function lottery($tirage = [], $i = 0) {
    $min = 1;
    $max = 49;
    $longueurTirage = 6;
    
    for($i; $i < $longueurTirage; $i++) {
        $num = randomNum($min, $max);
    
    
        if(in_array($num, $tirage)) {
            echo 'same number';
            return lottery($tirage, $i);
        }
    
        $tirage[] = $num;
        // array_push($tirage, $num);
    }
    
    return $tirage;
    
}

echo $title;

$array = lottery();

var_dump(array_values ($randomNumberArray));

// include('affichage.php');
// include_once('affichage.php');

// require('affichage.php');
// require_once('affichage.php');

  