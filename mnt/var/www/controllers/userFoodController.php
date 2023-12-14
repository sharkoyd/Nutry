<?php
include_once("models/userFoodModel.php");

class UserFoodController
{
    private $model;

    public function __construct()
    {
        $this->model = new UserFoodModel();
    }

    public function createUserFood($user_id, $food_id, $serving_size, $date_consumed)
    {
        // Validate input...

        // Create a new user-food relation
        $this->model->setUserId($user_id);
        $this->model->setFoodId($food_id);
        $this->model->setServingSize($serving_size);
        $this->model->setDateConsumed($date_consumed);

        // Save the user-food relation to the database
        $this->model->save();
    }

    // Other methods for updating, deleting, fetching user-food relations...
}

?>