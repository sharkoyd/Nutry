<?php

session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');



//require RequestController
require_once('../../controllers/requestController.php');



//get from data title and content of request

if(isset($_POST['title']) && isset($_POST['content']) && isset($_SESSION['user_id'])){

    $title = $_POST['title'];
    $content = $_POST['content'];
    $user_id = $_SESSION['user_id'];

    $requestController = new RequestController();
    
    $res = $requestController->createRequest($user_id, $title, $content);
    if($res){
        
        header("HTTP/1.1 200 OK");
        echo json_encode(array("message" => "Request was created."));
    }else{
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(array("message" => "Unable to create request."));
    }
}else{
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(array("message" => "Unable to create request."));
}



?>