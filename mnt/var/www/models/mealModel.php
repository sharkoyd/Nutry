<?php



include_once("model.php");
class mealModel extends Model
{
    private $name,$type,$user_id;
    function createMeal($user_id,$name,$type)
    {

        $sql = "INSERT INTO meal (`user_id`,`name`,`type`) VALUES (?,?,?)";
        $res = $this->pdo->prepare($sql);
        echo "$user_id,$name,$type";
        $res->execute(array($user_id, "$name", "$type"));
        //check if the meal was created

        $meal_id = $this->pdo->lastInsertId();
        return $meal_id;
    }

    function getMeals($user_id)
    {
        $sql = "SELECT * FROM meal where `user_id` = ?";
        $res = $this->pdo->prepare($sql);
        $res->execute(array($user_id));
        $meals = $res->fetchAll(PDO::FETCH_ASSOC);
        return $meals;
    }
    function deleteMeal($meal_id)
    {
        $sql = "DELETE FROM meal where `id` = ?";
        $res = $this->pdo->prepare($sql);
        $res->execute(array($meal_id));
    }   

}
?>