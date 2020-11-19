<?php
// faire un formulaire avec une liste déroulante pour le sens de traduction
// et un espace de texte pour entrer le mot a traduire
// un bouton submit
//dans le html OK

function clean($string) {
    $clean =  htmlentities($string);
    $clean =  htmlspecialchars($string);
    
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
    

// faire une base de donnée

$dictionnary = [
    'chat' => 'cat',
    'chien' => 'dog',
    'lapin' => 'rabbit'
];
        
 
    
// verifier dans la base de donnée si le mot existe
function isItInArray($cleanPost, $dictionnary) {
    
    in_array($cleanPost, $dictionnary);
    
}
    
// si oui, afficher la traduction

if (isset($_POST) && !empty($_POST)) {
    
    $post = $_POST;
    $cleanPost = cleanPost($post);
    $direction = $cleanPost['direction'];
    $word = $cleanPost['word'];
    
    if($direction == 'toFrench') {
        echo 'toFrench is OK';
    }
    
    if($direction == 'toEnglish') {
        echo 'toEnglish is OK';
    }
    
    if(array_key_exists('word', $cleanPost)) {
        echo 'this works';
    }
    
    if(in_array($cleanPost['word'], $dictionnary)) {
            echo 'and this too';
    }

}



