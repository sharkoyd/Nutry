<?php

include_once("../../models/userModel.php");
class userController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new userModel();
    }
    

    public function createUser($email, $password, $first_name, $last_name)
    {
        // Validate input...

        // Create a new user
        $this->model->setFirstName($first_name);
        $this->model->setLastName($last_name);
        $this->model->setEmail($email);
        $this->model->setPassword($password);

        // Save the user to the database
        $res = $this->model->save();
    }
    public function loginUser($email, $password)
    {
        // Validate input...

        // Create a new user
        $this->model->setEmail($email);
        $this->model->setPassword($password);

        // Save the user to the database
        $user = $this->model->login();
        if($user)
        {
            if($user['is_active']==0)
            {
                return false;
            }
            // Start the session
            session_start();
            // Store user data in the session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['is_staff']= ($user['is_staff']==1)?true:false;
            return true;
        }
        else
        {
            return false;
        }
    }
    public function getUsers($limit)
    {
        $users = $this->model->getUsers($limit);
        foreach($users as &$user)
        {
            unset($user['password']);
        }
        return $users;
    }
    public function getUsersCount()
    {
        $num_users = $this->model->getUsersCount();
        return $num_users;
    }
    public function makeUserAdmin($id)
    {
        $res = $this->model->makeUserAdmin($id);
        return $res;
    }
    public function banUser($id)
    {
        $res = $this->model->banUser($id);
        return $res;
    }

}

?>