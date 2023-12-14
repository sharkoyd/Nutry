<?php

session_start();



header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");



include_once("../../controllers/userController.php");


//check if the user is authed and admin then take the post data id and make the user with that id an admin
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_SESSION['user_id']) && $_SESSION['is_staff']) {
        //get the post data
        $id =  $_POST['id'];
       
        //make the user with that id an admin
        $userController = new userController();
        $admin = $userController->makeUserAdmin($id);
        //return a success json response
        if($admin){
            $response = array(
                'status' => 200,
                'message' => 'user with id '.$id.' is now an admin.'            
            );
        }else{
            $response = array(
                'status' => 200,
                'message' => 'user with id '.$id.' is now a normal user.'            
            );
        }
        
        echo json_encode($response);
    } else {
        header('HTTP/1.1 400 Bad Request');
        $response = array(
            'status' => 400,
            'message' => 'user not logged in or not an admin'
        );
        echo json_encode($response);
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    $response = array(
        'status' => 400,
        'message' => 'Invalid request method'
    );
    echo json_encode($response);
}



?>