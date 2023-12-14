<?php

session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');


require_once('../../controllers/requestController.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_SESSION['user_id']) && $_SESSION['is_staff']) {
        $requestController = new RequestController();
        $res= $requestController->answerRequest($_POST['request_id'], $_POST['admin_response']);
        echo json_encode($res);
    } else {
        echo "user not logged in";
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