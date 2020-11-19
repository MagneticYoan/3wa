<?php

class InscriptionController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
    	 $model = new GroupsModel();
    	 $groups = $model->getGroups();
    	 $idols = $model->getIdols();
    	 
    	 return ['groups' => $groups, 'idols' => $idols ];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
    	 
    	$user = $_POST;
    	$firstname = $user['firstname'];
        $lastname = $user['lastname'];
        $birthday = $user['birthday']; 
        $adress = $user['adress'];
        $city = $user['city'];
        $zipcode = $user['zipcode'];
        $country = $user['country'];
        $email = $user['email'];
        $password = $user['password'];
        $best_group = $user['bestgroup'];
        $μs_best_girl = $user['bestus'];
        $aqours_best_girl = $user['bestaqours'];
        $niji_best_girl = $user['bestniji'];
    	 
    	 $model2 = new UsersModel();
    	 
    	 $model = new GroupsModel();
    	 $groups = $model->getGroups();
    	 $idols = $model->getIdols();
    	 $users = $model2->getUser($email);
    	
    	
    	 
    	 //check errors
    	 $errors = array();
    	 
    	 if (empty($firstname)) {
    	     array_push($errors, 'Firstname should not be empty'); 
    	 }
    	 
    	 if (empty($lastname)) {
    	     array_push($errors, 'Lastname should not be empty'); 
    	 }
    	 
    	 if (empty($birthday)) {
    	     array_push($errors, 'Birthday should not be empty'); 
    	 }
    	 
    	 if(empty($adress) || strlen($adress) < 5) {
    	     array_push($errors, 'Adress should not be empty');
    	 }
    	 
    	 if(empty($zipcode) || strlen($zipcode) < 5) {
    	     array_push($errors, 'Zipcode should be at least 5 caracters long.');
    	 } 
    	 
    	 if(empty($country)) {
    	     array_push($errors, 'Country should not be empty');
    	 }
    	 
    	 if(empty($email)) {
    	     array_push($errors, 'Email should not be empty');
    	 }
    	 
    	 if($email == $users['email']) {
    	     array_push($errors, 'This mail has already been used to sign up.');
    	 }
    	 
    	 if(empty($password) || strlen($password) < 8) {
    	     array_push($errors, 'Password should be at least 8 caracters long.');
    	 }
    	 
    	 if (!empty($errors)) {
    	     return ['errors' => $errors, 'groups' => $groups, 'idols' => $idols];
    	 }
    	 else {
    	    $model2->addUser($user);
    	    return ['groups' => $groups, 'idols' => $idols ];
    	 }
    }
}