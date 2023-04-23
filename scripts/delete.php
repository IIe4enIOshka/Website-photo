<?php
require "db.php";
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$query = ("SELECT * FROM image_table WHERE `id` = $data[id]");
$result=mysqli_query($connect, $query);

$row = $result->fetch_assoc();
$string = '../' . $row['imagepath'] . $row['nameDist'] . '/' . $row['imagename'];
$string2 = '../' . $row['imagepath'] . $row['nameDist'] . '/'  . 'width300/' . $row['imagename'];
unlink($string);
unlink($string2);
$query = "DELETE FROM `image_table` WHERE `id` = $data[id]";
$result=mysqli_query($connect, $query);

echo json_encode(array('success' => 1));
?>