<?php

session_start();



header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");



include_once("../../controllers/userController.php");



if ($_SERVER['REQUEST_METHOD'] === 'POST'&& isset($_SESSION['user_id']) && $_SESSION['is_staff']) {
    //ban user with the id 
    $id =  $_POST['id'];
    $userController = new userController();
    $ban = $userController->banUser($id);
    //return a success json response
    if(!$ban){
        $response = array(
            'status' => 200,
            'message' => 'user with id '.$id.' is now banned.'            
        );
    }else{
        $response = array(
            'status' => 200,
            'message' => 'user with id '.$id.' is now unbanned.'            
        );
    }
    echo json_encode($response);
    

}
else{
    header('HTTP/1.1 400 Bad Request');
    $response = array(
        'status' => 400,
        'message' => 'user not logged in or not an admin'
    );
    echo json_encode($response);
}


?>