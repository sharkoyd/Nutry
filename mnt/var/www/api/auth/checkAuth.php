<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, *");



session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_SESSION['user_id'])) {
        // User is logged in
        $response = array(
            'status' => 200,
            'isAuthenticated' => true,
            'isAdmin' => $_SESSION['is_staff'],
            
        );
    } else {
        // User is not logged in
        header('HTTP/1.1 401 Unauthorized');
        $response = array(
            'status' => 401,
            'isAuthenticated' => false,
            'isAdmin' =>false,
        );
    }
    header('Content-Type: application/json');
    echo json_encode($response);
    
} else {
    header('HTTP/1.1 400 Bad Request');
    $response = array(
        'status' => 400,
        'message' => 'Invalid request method'
    );
    header('Content-Type: application/json');
    echo json_encode($response);
}