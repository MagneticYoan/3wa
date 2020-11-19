<?php


function clean($string) {
    $clean =  htmlentities($string);
    $clean =  htmlspecialchars($clean);
    
    var_dump($string);
    return $clean;
}


function cleanPost($post) {
    $rebuildPost = [];
    
    foreach($post as $key => $value ) {
                        // <script>
        $cleanString = clean($value);
       // &lt;script&gt;
    
        $rebuildPost[$key] = $cleanString;
        
        //$rebuildPost['lastname'] = '&lt;script&gt;';
    
    }
    return $rebuildPost;
    
}
    
$post = $_POST;
$cleanPost = cleanPost($post);

echo '<p>clean post</p>';

var_dump($cleanPost);


// fputcsv() pour mettre au format csv
// fopen()  pour ouvrir un fichier ou une page
// fgetcsv() 

// crée le fichier et donne la possibilité d'écrire à la suite
$handle = fopen('todolist.csv', 'a+');

// transforme le tableau $post en ligne dans le fichier csv $handle
fputcsv($handle, $post);

// ferme le fichier csv
fclose($handle);

// re-ouvre le fichier csv en lecture
$handle = fopen('todolist.csv', 'r');

// fgetcsv($handle);

// tant qu'il reste une ligne sur handle, ecrire la ligne sur le tableau

// verifier sur la ligne quelle est la 4e value (radio) et assigner un id 

//pour chaque ul, on verifie si la date est dépassée

// $toolate = boolean

// ternaire : echo titre . $toolate === true ? 'En retard':''


