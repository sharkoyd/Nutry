<?php


include_once("../../models/foodModel.php");

class FoodController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new FoodModel();
    }

    public function createFood($name, $quantity, $unit, $protein, $fat, $calories, $sodium, $sugar, $fiber, $cholesterol)
    {
        // Validate input...

        // Create a new food
        $this->model = new FoodModel('',$name, $quantity, $unit, $protein, $fat, $calories, $sodium, $sugar, $fiber, $cholesterol);

        // Save the food to the database
        $res = $this->model->save();
        return $res;
    }


    public function getFood($food_id)
    {
        // Get all foods
        $foods = $this->model->getFood($food_id);
        return $foods;
    }
    public function getFoodsByName($name)
    {
        // Get all foods
        $foods = $this->model->getFoodsByName($name);
        return $foods;
    }

    // Other methods for updating, deleting, fetching foods...
}

?>