<?php

include_once("../../models/mealFoodModel.php");
class mealFoodController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new mealFoodModel();
    }

    public function createMealFood($meal_id, $food_id, $quantity_multiplier)
    {
        echo "mealFoodController: $meal_id, $food_id, $quantity_multiplier";
        return $this->model->createMealFood($meal_id, $food_id, $quantity_multiplier);
    }

    public function getMealFoods($meal_id)
    {
        $foods = $this->model->getMealFoods($meal_id);
        return $foods;
    }
    // Other methods for updating, deleting, fetching mealFoods...
}

?>