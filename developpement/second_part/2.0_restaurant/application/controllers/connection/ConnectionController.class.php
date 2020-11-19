<?php

class ConnectionController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
    	 $mail = $_POST['email'];
    	 $mdp = $_POST['password'];
    	 
    	 $model = new UsersModel;
    	 $user = $model->getUser($mail);
    	 $login_ok = false;
    	 
    	 if(password_verify($mdp, $user['password'])) {
    	     $login_ok = true;
    	 }
    	 
    	 if($login_ok) {
    	     $_SESSION['id'] = $user['id'];
    	     $_SESSION['firstname'] = $user['firstname'];
    	     $_SESSION['admin_lvl'] = $user['admin_lvl'];
    	 }
    	 
    }
}