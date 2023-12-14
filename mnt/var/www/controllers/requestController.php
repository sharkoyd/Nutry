<?php
//controller for requests
include_once("../../models/requestModel.php");
class RequestController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new RequestModel();
    }
    public function createRequest($user_id, $title, $content)
    {
        // Validate input...
        // Create a new request
        $this->model = new RequestModel('',$user_id, $title, $content);
        // Save the request to the database
        $res = $this->model->save();
        return $res;
    }
    public function getAllRequests()
    {
        // Get all requests
        $requests = $this->model->getAll();
        return $requests;
    }

    public function answerRequest($request_id, $admin_response)
    {
        // Get all requests
        $request = $this->model->answerRequest($request_id, $admin_response);
        return $request;
    }
    public function getAnsweredRequests($user_id)
    {
        // Get all requests
        $requests = $this->model->getAnswered($user_id);
        return $requests;
    }
}


?>