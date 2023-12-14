<?php

include_once("model/nutritionModel.php");
class nutritionController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new nutritionModel();
    }

    public function createNutrition($calories, $fat, $carbs, $protein)
    {
        // Validate input...

        // Create a new nutrition
        $this->model->setCalories($calories);
        $this->model->setFat($fat);
        $this->model->setCarbs($carbs);
        $this->model->setProtein($protein);

        // Save the nutrition to the database
        $this->model->save();
    }

    // Other methods for updating, deleting, fetching nutritions...
}

?>