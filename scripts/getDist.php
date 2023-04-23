<?php
require "db.php";
$query = "SELECT DISTINCT `nameDist` FROM `image_table`";
$result=mysqli_query($connect, $query);
$arr = array();

while($row=mysqli_fetch_assoc($result))
{
	$arr[] = $row;
}
echo json_encode($arr);
?>