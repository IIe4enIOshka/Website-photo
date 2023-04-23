<?php
require "db.php";

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$nameDist = $data['nameDist'];

$query = "SELECT * FROM `image_table` WHERE `nameDist` = '$nameDist'";
$result=mysqli_query($connect, $query);
$arr = array();

while($row=mysqli_fetch_assoc($result))
{
	$arr[] = $row;
}
echo json_encode($arr);
?>