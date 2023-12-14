<?php



header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");



session_start();


require_once '../../controllers/userController.php';



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $email = $_POST['email'];
    $password = $_POST['password'] ;

    // Validate data
    
    if ($email && $password) {
        // Create UserController instance
        $controller = new UserController();
        // Call register method
        $res = $controller->loginUser($email, $password);
        //return a success json response

        if($res)
        {
            $response = array(
                'status' => 200,
                'message' => 'logged in successfully.'            
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
            'message' => 'All fields are required.'
        );
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    $response = array(
        'status' => 400,
        'message' => 'invalid method'
    );
}
echo json_encode($response);

?>