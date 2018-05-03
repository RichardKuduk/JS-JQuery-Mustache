<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/mystyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/matchesAjaxJS.js"></script>

  <script type="text/javascript" src="js/mustache.js" ></script>
  <script type="text/javascript" src="js/underscore.js" ></script>
  <script id="template" type="text/template">
      <table id="table" border=1>
        <tr><th>Date</th><th>Time</th><th>Stage</th><th>FLAG</th><th>Team 1</th><th>1</th><th>--</th> <th>x</th><th>--</th><th>2</th><th>--</th><th>Team 2</th><th>FLAG</th><th>Prediction</th></tr>
      {{#matches}}
       <tr id="{{MatchID}}">
         <td>{{Date}}</td>
         <td>{{Time}}</td>
         <td>{{Stage}}</td>
         <td><img src="images/{{flag1}}" alt="user-avatar" width="30px" /></td>
         <td>{{Team1}}</td>
         <td contenteditable='true' id="Team1Win">{{Team1Win}}</td>
         <td class="updateBtn" onlcik="updateOdds()">Update</td>
         <td contenteditable='true' id="Draw">{{Draw}}</td>
         <td class="updateBtn" onlcik="updateOdds()">Update</td>
         <td contenteditable='true' id="Team2Win">{{Team2Win}}</td>
         <td class="updateBtn" onlcik="updateOdds()">Update</td>
         <td>{{Team2}}</td>
         <td><img src="images/{{flag2}}" alt="user-avatar" width="30px" /></td>
         <td>{{Prediction}}</td>
       </tr>
      {{/matches}}
      </table>
      <script type="text/javascript" src="js/matchesOddsUpdateJS.js"></script>

  </script>

</head>
<body>
  <?php include 'assets/header.php';?>
  <h1>Matches Odds Update [Mustache / PHP / JQuery / Ajax / UnderScore]</h1>


 <div id="tableDiv">
 </div>
<?php include 'assets/footer.php';?>
</body>
</html>
