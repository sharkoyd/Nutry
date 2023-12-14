<?php
// user_id	int(7)			No	0		Browse distinct values	Change	Drop	Primary	Unique	Index	Fulltext
// food_id	int(7)			No	0		Browse distinct values	Change	Drop	Primary	Unique	Index	Fulltext
// date	datetime			No	0000-00-00 00:00:00		Browse distinct values	Change	Drop	Primary	Unique	Index	Fulltext
// meal_type	enum('breakfast', 'lunch', 'dinner', 'snacks')	latin1_swedish_ci		No	breakfast		Browse distinct values	Change	Drop	Primary	Unique	Index	Fulltext
// quantity	int(30)			No	0		Browse distinct values	
//

include_once("model.php");
class userFoodModel extends Model
{
    private $user_id,$food_id,$date,$meal_type,$quantity;
    function __construct($user_id="",$food_id="",$date="",$meal_type="",$quantity="")
    {
        $this->user_id=$user_id;
        $this->food_id=$food_id;
        $this->date=$date;
        $this->meal_type=$meal_type;
        $this->quantity=$quantity;
        parent::__construct();
    }

}


?>