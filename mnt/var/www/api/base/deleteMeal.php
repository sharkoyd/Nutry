<?php
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include "../../controllers/mealController.php";


$mealController = new mealController();

//method is delete 
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    //check if user is logged in
    if (isset($_SESSION['user_id'])) {
        //get meal id from url
        $url = $_SERVER['REQUEST_URI'];
        $url_components = parse_url($url);
        parse_str($url_components['query'], $params);
        $meal_id = $params['id'];
        echo $meal_id;
        //delete meal
        $mealController->deleteMeal($meal_id);
        echo "meal deleted";
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