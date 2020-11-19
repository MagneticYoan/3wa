<?php

    class UsersModel
    {
        public function getUsers()
        {
            $users = new Database;
            $sql = "SELECT id, firstname, lastname, email, password, admin_lvl FROM users";
            $result = $users->query($sql);
            return($result);
        }
        
        public function getUser($user_mail)
        {
            $user = new Database;
            $sql = "SELECT id, firstname, lastname, email, password, admin_lvl FROM users WHERE email =?";
            $result = $user->queryOne($sql, [$user_mail]);
            return($result);
        }
        
        public function addUser($newuser)
        {
            $data = new Database;
            $sql = "INSERT INTO users (
                        firstname, 
                        lastname, 
                        birthday, 
                        adress, 
                        city, 
                        zipcode, 
                        country, 
                        email, 
                        password, 
                        best_group, 
                        μs_best_girl, 
                        aqours_best_girl, 
                        niji_best_girl) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            $firstname = $newuser['firstname'];
            $lastname = $newuser['lastname'];
            $birthday = $newuser['birthday']; 
            $adress = $newuser['adress'];
            $city = $newuser['city'];
            $zipcode = $newuser['zipcode'];
            $country = $newuser['country'];
            $email = $newuser['email'];
            $password = password_hash($newuser['password'], PASSWORD_DEFAULT);
            $best_group = $newuser['bestgroup'];
            $μs_best_girl = $newuser['bestus'];
            $aqours_best_girl = $newuser['bestaqours'];
            $niji_best_girl = $newuser['bestniji'];
                    
                    
            
            $data->executeSql($sql, [$firstname, $lastname, $birthday, $adress, $city, $zipcode, $country, $email, $password, $best_group, $μs_best_girl, $aqours_best_girl, $niji_best_girl] );
            
        }
        
    }



?>