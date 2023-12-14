<?php 
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');



//this returns some nutritious stats for the user and the current meals he has in his day, LIKE NUMBER of calories  and number of proteins and carbs and fats ...etc plus the total number of meals he has in his day

include_once("../../controllers/mealController.php");
include_once("../../controllers/mealFoodController.php");
include_once("../../controllers/foodController.php");

$mealController = new mealController();
$mealFoodController = new mealFoodController();
$foodController = new foodController();
//check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo "user not logged in";
    exit();
}

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


    $result = array(
        'calories' => 0,
        'protein' => 0,
        'fat' => 0,
        'sugar' => 0,
        'fiber' => 0,
        'cholesterol' => 0,
        'sodium' => 0,
    );

    //loop through meals
    foreach ($meals as &$meal) {
        //loop through foods
        foreach ($meal['foods'] as &$food) {
            //quantity multiplier
            $quantity = $food['quantity_multiplier'];
            //add food calories to meal calories
            $result['calories'] += $food['food_details']['calories'] * $quantity;
            //add food protein to meal protein
            $result['protein'] += $food['food_details']['protein'] * $quantity;
            //add food fat to meal fat
            $result['fat'] += $food['food_details']['fat'] * $quantity;
            //add food sugar to meal sugar
            $result['sugar'] += $food['food_details']['sugar'] * $quantity;
            //add food fiber to meal fiber
            $result['fiber'] += $food['food_details']['fiber'] * $quantity;
            //add food cholesterol to meal cholesterol
            $result['cholesterol'] += $food['food_details']['cholesterol'] * $quantity;
            //add food sodium to meal sodium
            $result['sodium'] += $food['food_details']['sodium'] * $quantity;
        }
    }

    echo json_encode($result);
} else {
    header('HTTP/1.1 400 Bad Request');
    $response = array(
        'status' => 400,
        'message' => 'Invalid request method'
    );
    echo json_encode($response);
}





?>