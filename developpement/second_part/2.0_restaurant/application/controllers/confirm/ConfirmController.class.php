<?php

class ConfirmController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
    	 if ( isset($_SESSION['cart']) == false || empty($_SESSION['cart'] ))
        {
            $http->redirectTo('/');    
        }
        
        $cart = $_SESSION['cart'];
        
        $total = 0;
        foreach($cart as $product) {
            $total += htmlspecialchars(floatval($product->price)) * htmlspecialchars(floatval($product->quantity));
        }
        
        $_SESSION['total'] = $total;
        
        return [ 'cart' => $cart, 'total' => $total ];
    	 
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
    	 
    	 $cart = $_SESSION['cart'];
    	 $model = new OrderModel;
    	 $model->addNewOrder();
    	 $model->addGoodiesOrder();
    	 
    	 unset($_SESSION['cart']);
    }
}