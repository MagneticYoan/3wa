<!-- Commencer par générer 1 nombre aléatoire compris entre 1 et 49  (peut-être existe-t-il une fonction en PHP qui répond à ce besoin)  --> 
<!-- Générer ensuite 6 nombres aléatoires compris entre 1 et 49 --> 
<!-- Trouver un moyen d'éviter les doublons --> 
<!-- Trier les 6 numéros --> 
<!-- Afficher le tirage dans le code HTML --> 


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Lotterie</title>
    </head>
    <body>
         
         
         <?php
            $randomNumberArray = [];
            $minValue = 1;
            $maxValue = 49;
            $actualValue = 0;
         
            
            // généré un nombre aléatoire
            function randomNumberBetween($minValue, $maxValue) {
                $actualValue = rand($minValue,$maxValue);
                
                return $actualValue;
            }
            // s'il est déjà dans le tableau, retirage
            // s'il n'y est pas, l'ajouter dans le tableau
            
            function isItAlreadyHere($actualValue, $randomNumberArray) {
                
                if (in_array($actualValue, $randomNumberArray)) {
                    
                    randomNumberBetween($minValue, $maxValue);
                    
                } 
                
                else {
                    
                    array_push($randomNumberArray, $actualValue);
                }
            }
            
            // refaire le process 6 fois
            
            for ($i = 0; $i < 6; $i ++) {
                $actualNumber = randomNumberBetween($minValue, $maxValue);
                
                isItAlreadyHere($actualValue, $randomNumberArray);
                
                sort($randomNumberArray);
            }
            
            // trier les nombres dans l'ordre croissant
            
            
            
            // afficher les nombres
            
            var_dump(array_values ($randomNumberArray));
            
         ?>
         
         
         
    </body>
</html>