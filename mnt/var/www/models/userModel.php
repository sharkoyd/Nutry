<?php
include_once("model.php");
class userModel extends Model
{
    private $email, $password, $first_name, $last_name, $is_staff, $is_active;


    function save()
    {
        $query = "insert into user(`email`,`password`,`first_name`,`last_name`)values (?, ?, ?, ?)";
        $res = $this->pdo->prepare($query);

        return $res->execute(array($this->email, $this->password, $this->first_name, $this->last_name));
    }

    function __construct($email = "", $password = "", $first_name = "", $last_name = "", $is_staff = "", $is_active = "")
    {
        $this->email = $email;
        $this->password = $password;
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->is_staff = $is_staff;
        $this->is_active = $is_active;
        parent::__construct();
    }

    function login()
    {
        $query = "select * from user where email=? and password=?";
        $res = $this->pdo->prepare($query);
        $res->execute(array($this->email, $this->password));
        $row = $res->fetch(PDO::FETCH_ASSOC);
        if ($row) {
            return $row;
        } else {
            return false;
        }
    }

    function getUsers($limit)
    {
        $query = "SELECT * FROM `user` LIMIT $limit";
        $res = $this->pdo->prepare($query);
        $res->execute();
        $rows = $res->fetchAll(PDO::FETCH_ASSOC);
        return $rows;
    }
    function getUsersCount()
    {
        $query = "select count(*) as num_users from user";
        $res = $this->pdo->prepare($query);
        $res->execute();
        $row = $res->fetch(PDO::FETCH_ASSOC);
        return $row['num_users'];
    }
    function makeUserAdmin($id)
    {
        $query = "select is_staff from `user` where `id`=?";
        $res = $this->pdo->prepare($query);
        $res->execute(array($id));
        $row = $res->fetch(PDO::FETCH_ASSOC);
        $is_staff = $row['is_staff'];
        $is_staff = ($is_staff == 1) ? 0 : 1;
        $query = "update `user` set `is_staff`=? where id=?";
        $res = $this->pdo->prepare($query);
        $res->execute(array($is_staff, $id));
        return $is_staff;
    }
    function banUser($id)
    {
        $query = "select is_active from `user` where `id`=?";
        $res = $this->pdo->prepare($query);
        $res->execute(array($id));
        $row = $res->fetch(PDO::FETCH_ASSOC);
        $is_active = $row['is_active'];
        $is_active = ($is_active == 1) ? 0 : 1;
        $query = "update `user` set `is_active`=? where `id`=?";
        $res = $this->pdo->prepare($query);
        $res->execute(array($is_active, $id));
        return $is_active;
    }



    function setEmail($email)
    {
        $this->email = $email;
    }
    function setPassword($password)
    {
        $this->password = $password;
    }
    function setFirstName($first_name)
    {
        $this->first_name = $first_name;
    }
    function setLastName($last_name)
    {
        $this->last_name = $last_name;
    }
    function setIsStaff($is_staff)
    {
        $this->is_staff = $is_staff;
    }
    function setIsActive($is_active)
    {
        $this->is_active = $is_active;
    }

}




?>