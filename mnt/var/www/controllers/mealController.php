<?php

include_once("../../models/mealModel.php");

class MealController
{
    private $model;
        
    public function __construct()
    {
        $this->model = new MealModel();
    }

    public function createMeal($name,$type)
    {   
        //create a new meal for the current session user
        $user_id = $_SESSION['user_id'];
        

        $meal_id = $this->model->createMeal($user_id,$name,$type);
        return $meal_id;
    }
    public function getMeals()
    {
        //get all meals for the current session user
        $user_id = $_SESSION['user_id'];
        $meals = $this->model->getMeals($user_id);
        return $meals;
    }
    function deleteMeal($meal_id)
    {
        //delete a meal
        $this->model->deleteMeal($meal_id);
    }
    // Other methods for updating, deleting, fetching meals...
}


?>