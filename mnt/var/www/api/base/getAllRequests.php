<?php


session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

//require RequestController
require_once('../../controllers/requestController.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_SESSION['user_id']) && $_SESSION['is_staff']) {
        $requestController = new RequestController();

        $res = $requestController->getAllRequests();
        if ($res) {

            header("HTTP/1.1 200 OK");
            // nconverti f requests array khater kif tabda wa7da barka mawjouda tetb3ath {} = > .map() tbeugi
            echo json_encode(array("message" => "Requests were fetched.", "requests" => $res));
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array("message" => "Unable to fetch requests."));
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(array("message" => "user not logged in or not an admin"));
    }
} else {
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(array("message" => "Unable to fetch requests."));
}


?>