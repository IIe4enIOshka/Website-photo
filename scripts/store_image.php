<?php
require "db.php";

$input_name = 'file';
// Директория куда будут загружаться файлы.
$path ="../img/";
$path2 = "img/";
$extension = '.jpg';

$distributive = $_POST['nameDist'];

if (!file_exists($path.$distributive.'/')) {
	mkdir($path.$distributive.'/', true);
}

// echo $_POST['nameDist'];

if (!isset($_FILES[$input_name])) {
	$error = 'Файлы не загружены.';
} else {
	// Преобразуем массив $_FILES в удобный вид для перебора в foreach.
	$files = array();
	$diff = count($_FILES[$input_name]) - count($_FILES[$input_name], COUNT_RECURSIVE);
	if ($diff == 0) {
		$files = array($_FILES[$input_name]);
	} else {
		foreach($_FILES[$input_name] as $k => $l) {
			foreach($l as $i => $v) {
				$files[$i][$k] = $v;
			}
		}		
	}	

	foreach ($files as $file) {
		$error = $success = '';

		// Проверим на ошибки загрузки.
		if (!empty($file['error']) || empty($file['tmp_name'])) {
			$error = 'Не удалось загрузить файл.';
		} elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
			$error = 'Не удалось загрузить файл.';
		} else {
			$filename = $file['name'];
				// Перемещаем файл в директорию.
			if (move_uploaded_file($file['tmp_name'], $path.$distributive. '/' .$filename)) {
				$im_php = imagecreatefromjpeg($path.$distributive . '/' .$filename);
				$im_php = imagescale($im_php, 300);
				if (!file_exists($path.$distributive. '/width300/')) {
					mkdir($path.$distributive. '/width300/', true);
				}
				if (file_exists($path.$distributive. '/width300/')) {
					imagejpeg($im_php, $path.$distributive. '/width300/' . $filename);
				}
				
				// move_uploaded_file($im_php, $path. 'width300/' . $filename);
					// Далее можно сохранить название файла в БД и т.п.
				$query="INSERT INTO image_table (nameDist, imagename, imagepath) VALUES('$distributive','$filename','$path2')";
				$result = mysqli_query($connect, $query) or die(mysqli_error($connect));

				$success = 'Файл «' . $filename . '» успешно загружен.';
			} else {
				$error = 'Не удалось загрузить файл.';
			}
		}
	}
}

// Вывод сообщений о результате загрузки.
echo json_encode(array('success' => 1));
exit();
?>