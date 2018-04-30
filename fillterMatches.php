<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/mystyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/fillterMatchesJS.js"></script>
  <script type="text/javascript" src="js/mustache.js" ></script>
  <script type="text/javascript" src="js/underscore.js" ></script>
</head>
<body>
  <?php include 'assets/header.php';?>

  <h1>Fillter Matches [JQuery/UnderScore/Mustache]</h1>

  Stage:<select id="stage">
  </select>

  Team:<select id="team">
  </select>

 <div id="tableDiv">
 </div>
<?php include 'assets/footer.php';?>
</body>
</html>
