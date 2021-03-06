<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/mystyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/fillterMatchesJS.js"></script>
  <script type="text/javascript" src="js/mustache.js" ></script>
  <script type="text/javascript" src="js/underscore.js" ></script>
  <script id="template" type="text/template">
      <table id="table" border=1>
        <tr><th>Date</th><th>Time</th><th>Stage</th><th>FLAG</th><th>Team 1</th><th>1</th> <th>x</th><th>2</th><th>Team 2</th><th>FLAG</th><th>Prediction</th></tr>
      {{#matches}}
       <tr>
         <td>{{Date}}</td>
         <td>{{Time}}</td>
         <td>{{Stage}}</td>
         <td><img src="images/{{flag1}}" alt="user-avatar" width="30px" /></td>
         <td>{{Team1}}</td>
         <td>{{Team1Win}}</td>
         <td>{{Draw}}</td>
         <td>{{Team2Win}}</td>
         <td>{{Team2}}</td>
         <td><img src="images/{{flag2}}" alt="user-avatar" width="30px" /></td>
         <td>{{Prediction}}</td>
       </tr>
      {{/matches}}
      </table>
  </script>

</head>
<body>
  <?php include 'assets/header.php';?>

  <h1>Fillter Matches [JQuery/UnderScore/Mustache]</h1>

  Stage:<select id="stage">
  </select>

  Team:<select id="team">
  </select>
  <hr>
 <div id="tableDiv">
 </div>
<?php include 'assets/footer.php';?>
</body>
</html>
