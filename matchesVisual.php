<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/mystyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/matchesVisualJS.js"></script>
  <script type="text/javascript" src="js/mustache.js" ></script>
  <script type="text/javascript" src="js/underscore.js" ></script>

  <script id="template" type="text/template">
      <table id="visualTable" >
      {{#matches}}
       <tr id="{{MatchID}}">
         <td>{{desc}}</td>
         <td><img src="images/{{flag1}}" alt="user-avatar" width="30px" /></td>
         <td class="team1Field">{{Team1}}</td>
         <td class="drawField">
            <svg class="chart" width="500px" height="25px">
            </svg>
          </td>
         <td class="team2Field">{{Team2}}</td>
         <td><img src="images/{{flag2}}" alt="user-avatar" width="30px" /></td>
       </tr>
      {{/matches}}
      </table>
  </script>

</head>
<body>
  <?php include 'assets/header.php';?>
  <h1>Matches Visual JQuery/D3</h1>



 <div id="tableDiv">
 </div>
<?php include 'assets/footer.php';?>
</body>
</html>
