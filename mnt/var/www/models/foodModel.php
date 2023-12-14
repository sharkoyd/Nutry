<?php

include_once("model.php");
class foodModel extends Model
{
    private $id,$name, $quantity, $unit, $protein, $fat, $calories, $sodium, $sugar, $fiber, $cholesterol;

    // constructor 

    function __construct($id = "", $name = "", $quantity = "", $unit = "", $protein = "", $fat = "", $calories = "", $sodium = "", $sugar = "", $fiber = "", $cholesterol = "")
    {
        $this->id = $id;
        $this->name = $name;
        $this->quantity = $quantity;
        $this->unit = $unit;
        $this->protein = $protein;
        $this->fat = $fat;
        $this->calories = $calories;
        $this->sodium = $sodium;
        $this->sugar = $sugar;
        $this->fiber = $fiber;
        $this->cholesterol = $cholesterol;
        parent::__construct();
    }
    function save()
    {

        $query = "insert into food(`name`,`quantity`,`unit`,`protein`,`fat`,`calories`,`sodium`,`sugar`,`fiber`,`cholesterol`)values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $res = $this->pdo->prepare($query);
        return $res->execute(array($this->name, $this->quantity, $this->unit, $this->protein, $this->fat, $this->calories, $this->sodium, $this->sugar, $this->fiber, $this->cholesterol));
    }

    function getFood($food_id)
    {
        $sql = "SELECT * FROM food where id = ?";
        $res = $this->pdo->prepare($sql);
        $res->execute(array($food_id));
        $food = $res->fetch(PDO::FETCH_ASSOC);
        return $food;
    }
    function getFoodsByName($name)
    {
        $sql = "SELECT * FROM `food` where name like ?";
        $res = $this->pdo->prepare($sql);
        $res->execute(array("%".$name."%"));
        $foods = $res->fetchAll(PDO::FETCH_ASSOC);
        return $foods;
    }
}
?>