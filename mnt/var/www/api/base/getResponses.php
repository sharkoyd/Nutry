<?php 
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');


require_once('../../controllers/requestController.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_SESSION['user_id'])) {
        //get requests of the current user tha have been answered
        $requestController = new RequestController();
        $res = $requestController->getAnsweredRequests($_SESSION['user_id']);
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