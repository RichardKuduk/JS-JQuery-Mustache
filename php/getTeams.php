<?php
  $mysql = new mysqli("localhost", "root", "", 'worldcup2018');

  $query = "SELECT * FROM teams ORDER BY Stage,Name";

  $result = $mysql->query($query);

  echo json_encode($result->fetch_all(MYSQLI_ASSOC));

?>
