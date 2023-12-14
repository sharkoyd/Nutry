<?php

include_once("models/sessionModel.php");

class SessionController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new SessionModel();
    }

    public function createSession($user_id)
    {
        // Validate input...

        // Create a new session
        $this->model->setUserId($user_id);

        // Save the session to the database
        $this->model->save();
    }

    // Other methods for updating, deleting, fetching sessions...
}

?>