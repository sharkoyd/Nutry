<?php

include_once("model.php");
class mealFoodModel extends Model
{
    private $meal_id,$food_id,$quantity_multiplier;

    function createMealFood($meal_id, $food_id, $quantity_multiplier)
    {
        $sql = "INSERT INTO `meal-food` (`meal_id`,`food_id`,`quantity_multiplier`) VALUES (?, ?, ?)";
        $res = $this->pdo->prepare($sql);
        $res->execute(array($meal_id, $food_id, $quantity_multiplier));
    }
    function getMealFoods($meal_id)
    {
        $sql = "SELECT * FROM `meal-food` where meal_id = ?";
        $res = $this->pdo->prepare($sql);
        $res->execute(array($meal_id));
        $mealFoods = $res->fetchAll(PDO::FETCH_ASSOC);
        return $mealFoods;
    }

}

?>