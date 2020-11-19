<!-- Commencer par générer 1 nombre aléatoire compris entre 1 et 49  (peut-être existe-t-il une fonction en PHP qui répond à ce besoin)   
 Générer ensuite 6 nombres aléatoires compris entre 1 et 49
 Trouver un moyen d'éviter les doublons
 Trier les 6 numéros
 Afficher le tirage dans le code HTML -->
 
 <?php
    // random entre 1 et 49
    // rand(1, 49);
    
    $tableLottery = [];
    
    function tirages($max) {
        $table = [];
        for($i=0; $i < $max; $i++) {
            $tirageActuel = rand(1,49);
            
            if (!in_array($tirageActuel, $table)) {
                    array_push($table, $tirageActuel);
            }
            else {
                $i--;
            }
        }
        
        return $table;
    }
    
    function orderAndDisplay($table) {
        sort($table);
        var_dump($table);
    }
    
    $tableLottery = tirages(6);
    orderAndDisplay($tableLottery);
    
    // appeler le random 6x et mettre les valeurs dans un tableau
    
    
    // verifier si la valeur est déjà dans le tableau. Si oui, retirer. 
    
    
    // trier les numéros
    
    
    // afficher