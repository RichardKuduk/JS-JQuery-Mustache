<?php
  $mysql = new mysqli("localhost", "root", "", 'worldcup2018');

  $row = $_POST['Row'];
  $field = $_POST['Field'];
  $odd = $_POST['Odd'];

  // print("<pre>");
  // print_r("----" );
  // print_r($row);
  // print_r("----" );
  // print_r($field);
  // print_r("----" );
  // print_r($odd);
  // print_r("----" );
  // print("</pre>");

  $query = 'UPDATE matches SET  '. $field .'  = '. $odd .' WHERE MatchID=' . $row;

   // print("<pre>");
   // print_r($query);
   // print("</pre>");

  $result = $mysql->query($query);

?>
