<?php
abstract class Model
{
    protected $pdo;
    function __construct()
    {
        try {
            $this->pdo = new PDO('mysql:host=localhost;dbname=nutry', 'root', '');
        } catch (PDOException $e) {
            die("Could not connect to the database: " . $e->getMessage());
        }    }
    function __destruct()
    {
        $this->pdo = null;
    }
}
?>