<?php
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

include_once("../../controllers/userController.php");

//check if the user is authed and if he is an admin get the get parameters if valid get all the users and return them in json format plus the number of users in the database
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_SESSION['user_id']) && $_SESSION['is_staff']) {
        //get the get parameters
        $url = $_SERVER['REQUEST_URI'];
        $url_components = parse_url($url);
        parse_str($url_components['query'], $params);
        $limit = $params['limit'];

        //get all users
        $userController = new userController();
        $users = $userController->getUsers($limit);
        //get the number of users in the database
        $num_users = $userController->getUsersCount();
        //return the users and the number of users in the database
        $response = array(
            'status' => 200,
            'users' => $users,
            'num_users' => $num_users,
        );
        echo json_encode($response);
    } else {
        echo "user not logged in or not an admin";
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