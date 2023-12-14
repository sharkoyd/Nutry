<?php
session_start();

header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require_once '../../controllers/foodController.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    
    $name = $_POST['name'];
    $quantity = $_POST['quantity'];
    $unit = $_POST['unit'];
    $protein = $_POST['protein'];
    $fat = $_POST['fat'];
    $calories = $_POST['calories'];
    $sodium = $_POST['sodium'];
    $sugar = $_POST['sugar'];
    $fiber = $_POST['fiber'];
    $cholesterol = $_POST['cholesterol'];



    // Validate data
    if (($name && $quantity && $unit && $protein && $fat && $calories && $sodium && $sugar && $fiber && $cholesterol) == 1) {
        // Create UserController instance
        $controller = new FoodController();
        // Call register method
        $res = $controller->createFood($name, $quantity, $unit, $protein, $fat, $calories, $sodium, $sugar, $fiber, $cholesterol);
        //return a success json response

        if($res)
        {
            $response = array(
                'status' => 200,
                'message' => 'Food created successfully.'            
            );
        }
        else
        {
            header('HTTP/1.1 400 Bad Request');
            $response = array(
                'status' => 400,
                'message' => 'Invalid credentials.'
            );
        }
        
        
    } else {
        header('HTTP/1.1 400 Bad Request');

        $response = array(
            'status' => 400,
            'message' => "$name, $quantity, $unit, $protein, $fat, $calories, $sodium, $sugar, $fiber, $cholesterol"
        );
    }

} else {
    echo "Invalid request method.";
}
echo json_encode($response);




?>