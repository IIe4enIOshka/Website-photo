<?php

error_reporting(E_ALL);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$connect=mysqli_connect ("sql305.epizy.com","epiz_32175211","Q3ZrSraN4Y5IO")or die("Could not connected:".mysqli_error());

mysqli_select_db ($connect,"epiz_32175211_demo");

mysqli_set_charset($connect,"utf8");

?>