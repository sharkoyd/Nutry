<?php
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require_once '../../controllers/mealController.php'; 
require_once '../../controllers/mealFoodController.php';

$mealController = new MealController();
$mealFoodController = new MealFoodController();

// Get the raw POST data
$json = file_get_contents('php://input');

// Convert the JSON string to an associative array
$data = json_decode($json, true);

//check if the user is logged in
if(isset($_SESSION['user_id'])){
    $user_id = $_SESSION['user_id'];
    
    $name = $data['name'];
    $type = $data['type'];
    //food is an array with food_id and quantity_multiplier
    $foods = $data['foods'];
    //create meal and return meal id
    $meal_id=$mealController->createMeal($name,$type);
    print_r($foods);
    //add each food to meal-food table
    foreach($foods as $f){
        $mealFoodController->createMealFood($meal_id,$f['id'],$f['quantity_multiplier']);
    }

    echo "meal created";
}else{
    echo "user not logged in";
}
?>