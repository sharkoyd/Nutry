<?php
// Assuming you have a UserController with a register method
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require_once '../../controllers/userController.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $email = $_POST['email'];
    $password = $_POST['password'] ;
    $first_name = $_POST['first_name'] ;
    $last_name = $_POST['last_name'] ;

    // Validate data
    
    if ($email && $password && $first_name && $last_name) {
        // Create UserController instance
        $controller = new UserController();
        // Call register method
        $controller->createUser($email, $password, $first_name, $last_name);
        //return a success json response
        $response = array(
            'status' => 200,
            'message' => 'User added successfully.'
        );
        header('Content-Type: application/json');
        
    } else {
        header('HTTP/1.1 400 Bad Request');

        $response = array(
            'status' => 400,
            'message' => 'All fields are required'
        );
    }
} else {
    header('HTTP/1.1 400 Bad Request');

    $response = array(
        'status' => 400,
        'message' => 'Invalid request method'
    );
}
echo json_encode($response);