<?php

session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

include_once("../../controllers/mealController.php");
include_once("../../controllers/mealFoodController.php");
include_once("../../controllers/foodController.php");

$foodController = new foodController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    //we send a get request to get foods that contain a certain string
    if (isset($_GET['search']) and $_GET['search'] != "") {
        $search = $_GET['search'];
        $foods = $foodController->getFoodsByName($search);
        //add quantity mulitpiplier to each food
        foreach ($foods as $key => $food) {
            $foods[$key]['quantity_multiplier'] = 1;
        }
        echo json_encode($foods);
        return;
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