<?php

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"worldcup2018");

$sql = "SELECT * FROM teams";
// for results
$result = mysqli_query($connection,$sql);
$rs = array();
$i=0;
while($rs[] = mysqli_fetch_assoc($result)) {
// do nothing ;-)
}

// for team details
$result2 = mysqli_query($connection,"SELECT * FROM tables ORDER BY Pts DESC");
$rs2 = array();
$i=0;
while($rs2[] = mysqli_fetch_assoc($result2)) {
// do nothing ;-)
}

// query for current round
$result3 = mysqli_query($connection,"SELECT * FROM matches ORDER BY Date,Time");
$rs3 = array();
$i=0;
while($rs3[] = mysqli_fetch_assoc($result3)) {
// do nothing ;-)
}

// for distincts years? How many unique years is there?
$result4 = mysqli_query($connection,"SELECT * FROM stages");
$rs4 = array();
$i=0;
while($rs4[] = mysqli_fetch_assoc($result4)) {
// do nothing ;-)
}

// for distincts years? How many unique years is there?
$result5 = mysqli_query($connection,"SELECT DISTINCT Stage FROM tables");
$rs5 = array();
$i=0;
while($rs5[] = mysqli_fetch_assoc($result5)) {
// do nothing ;-)
}



mysqli_close($connection);

unset($rs[count($rs)-1]);  //removes a null value
unset($rs2[count($rs2)-1]);  //removes a null value
unset($rs3[count($rs3)-1]);  //removes a null value
unset($rs4[count($rs4)-1]);  //removes a null value
unset($rs5[count($rs5)-1]);  //removes a null value

// print("{ \"results\":" . json_encode($rs) . "}");                                    // this returns a round number    // this returns years
print("{ \"teams\":" . json_encode($rs) . " , \"tables\":" . json_encode($rs2) . " , \"matches\":" . json_encode($rs3) . " , \"stages\":" . json_encode($rs4) . " , \"uniqStage\":" . json_encode($rs5) . " }");

?>
