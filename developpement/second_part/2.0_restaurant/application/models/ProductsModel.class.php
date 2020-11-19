<?php

    class ProductsModel
    {
        public function getProducts()
        {
            $products = new Database;
            $sql = "SELECT 
                p.id, 
                p.name, 
                p.price,
                p.type,
                p.description,
                p.group_id,
                p.img,
                g.name AS group_name
            FROM products AS p
            JOIN groups AS g ON g.id = p.group_id";
            $result = $products->query($sql);
            return($result);
        }
        
        public function getProductsType($where)
        {
            $products = new Database;
            $sql = "SELECT 
                p.id, 
                p.name, 
                p.price,
                p.type,
                p.description,
                p.group_id,
                g.name AS group_name
            FROM products AS p
            JOIN groups AS g ON g.id = p.group_id
            WHERE p.type = ?";
            $result = $products->query($sql, [$where]);
            return($result);
        }
        
        public function getProductId($id)
        {
            $product = new Database;
            $sql = "SELECT 
                p.id, 
                p.name, 
                p.price,
                p.type,
                p.description,
                p.group_id,
                p.img,
                g.id AS group_id,
                g.name AS group_name
            FROM products AS p
            JOIN groups AS g ON g.id = p.group_id
            WHERE p.id = ?";
            $result = $product->queryOne($sql, [$id]);
            return($result);
        }
    }



?>