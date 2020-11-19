<?php

    class GroupsModel
    {
        public function getGroups()
        {
            $groups = new Database;
            $sql = "SELECT id, name FROM groups";
            $result = $groups->query($sql);
            return($result);
        }
        
        public function getIdols()
        {
            $idols = new Database;
            $sql = "SELECT
                id, 
                firstname,
                lastname,
                group_id
                FROM characters";
            $result = $idols->query($sql);
            return($result);
        }
    }



?>