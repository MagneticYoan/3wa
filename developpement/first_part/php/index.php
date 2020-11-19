<?php


$number = 1;
$string = 'string';


$number = 'string'; // string
$string = 'number'; // string


// Constante
define('NOMCONSTANTE', 'valeur'); 
const CONST2 = 'valeur2';
//

$true = true; // boolean
$false = false; // boolean
$float = 1.2; // float
$int = 1; // integer


echo ($float * $int);

echo $number . " " . "string" . " " . "NOMCONSTANTE";
echo $string;
echo NOMCONSTANTE;
echo CONST2;
echo $true;
echo $float;
echo $int;

var_dump($number);