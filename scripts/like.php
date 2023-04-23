<?php

error_reporting(E_ALL);

require "db.php";

$postData = file_get_contents('php://input');

$data = json_decode($postData, true);



$query = "UPDATE `image_table` SET `checking` = NOT `checking` WHERE `id` = $data[id]";

$result=mysqli_query($connect, $query);



$query = ("SELECT * FROM image_table WHERE `id` = $data[id]");

$result=mysqli_query($connect, $query);

$row = $result->fetch_assoc();

echo json_encode(array('success' => $row['checking']));

?>