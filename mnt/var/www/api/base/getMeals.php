<?php
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

include_once("../../controllers/mealController.php");
include_once("../../controllers/mealFoodController.php");
include_once("../../controllers/foodController.php");

$mealController = new mealController();
$mealFoodController = new mealFoodController();
$foodController = new foodController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $meals = $mealController->getMeals();
    //put food in each meal
    //this is meals Array ( [id] => 1 [user_id] => 1 [name] => mar9a [type] => dinner )

    foreach ($meals as &$meal) {
        $meal_id = $meal['id'];
        $foods = $mealFoodController->getMealFoods($meal_id);
        foreach ($foods as &$food) {

            $food_id = $food['food_id'];
            $food_details = $foodController->getFood($food_id);
            $food['food_details'] = $food_details;
        }
        $meal['foods'] = $foods;
    }

    
    
    echo json_encode($meals);

} else {
    header('HTTP/1.1 400 Bad Request');
    $response = array(
        'status' => 400,
        'message' => 'Invalid request method'
    );
    echo json_encode($response);
}


?>