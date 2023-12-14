<?php

include_once("model.php");
class RequestModel extends Model
{
    private $request_id, $user_id, $title, $content, $timestamp, $admin_response;
    function __construct($request_id = "", $user_id = "", $title = "", $content = "", $timestamp = "", $admin_response = "")
    {
        $this->request_id = $request_id;
        $this->user_id = $user_id;
        $this->title = $title;
        $this->content = $content;
        $this->timestamp = $timestamp;
        $this->admin_response = $admin_response;
        parent::__construct();
    }
    public function getAll()
    {
        $query = "select * from `request` where `admin_response` IS NULL or `admin_response` = '' or `admin_response` = 'NULL' order by `timestamp` desc;";
        $res = $this->pdo->query($query);
        return $res->fetchAll(PDO::FETCH_ASSOC);
    }
    function save()
    {
        $query = "insert into request(`user_id`,`title`,`content`)values (?, ?, ?)";
        $res = $this->pdo->prepare($query);
        return $res->execute(array($this->user_id, $this->title, $this->content));
    }
    function answerRequest($request_id, $admin_response)
    {
        $query = "update request set `admin_response` = ? where `request_id` = ?";
        $res = $this->pdo->prepare($query);
        return $res->execute(array($admin_response, $request_id));
    }
    public function getAnswered($user_id)
    {
        $query = "select * from `request` where `user_id` = ? and `admin_response` IS NOT NULL and `admin_response` != '' and `admin_response` != 'NULL' order by `timestamp` desc;";
        $res = $this->pdo->prepare($query);
        $res->execute(array($user_id));
        return $res->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>