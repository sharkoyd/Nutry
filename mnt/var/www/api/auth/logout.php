<?php


header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, *");
 //log out the user
session_start();
session_destroy();
$response = array(
    'status' => 200,
    'message' => 'User logged out successfully.'
);

header('Content-Type: application/json');
echo json_encode($response);





?>