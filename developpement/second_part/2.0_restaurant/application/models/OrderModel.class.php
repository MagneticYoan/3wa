<?php
    
    class OrderModel 
    {
        public function addNewOrder () 
        {
            //ajouter chaque ligne dans goodies order
            //product id / order_id / character_id / quantity
            $data = new Database;
            $sqlOrder = "INSERT INTO orders(user_id, comment, price, order_date, tax, pickup_type)
            VALUES(?,?,?, NOW(), ?, ?)";
            
            $id = $_SESSION['id'];
            $comment = "hahaha";
            $price = $_SESSION['total'];
            $tax = 10;
            $pickup = 'sending';
            
            $data->executeSql($sqlOrder, [$id, $comment, $price, $tax, $pickup]);
            
            
            //ajouter une ligne dans order
        }
        
        public function selectOrder()
        {
            $order = new Database;
            $sql = "SELECT id, user_id FROM orders WHERE user_id = ?";
            $result = $order->queryOne($sql, [$_SESSION['id']]);
            return($result);
        }
        
        public function addGoodiesOrder()
        {
            $data = new Database;
            $order_id = $this->selectOrder();
            $cart = $_SESSION['cart'];
            
            foreach($cart as $product)
            {
                $sql = "INSERT INTO goodies_order(product_id, order_id, quantity) VALUES(?,?,?)";
                $product_id = $product->id;
                $quantity = $product->quantity;
                $data->executeSql($sql, [$product_id, $order_id, $quantity]);
            }
            
            
        }
    }