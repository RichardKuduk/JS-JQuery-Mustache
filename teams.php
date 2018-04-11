<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="mystyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!-- <script type="text/javascript" src="teams.js"></script> -->
  <script type="text/javascript" src="mustache.js" ></script>
  <script>
    var template = "<tr><td>{{Stage}}</td><td><img src=\"images/{{Code}}\" alt=\"user-avatar\" width=\"30px\" /></td><td>{{Name}}</td><td>{{OverallOdds}}</td><td>{{FIFARanking}}</td></tr>";

      $(function () {
          $.getJSON('getData.php',
          function (teamData) {

              $.each(teamData, function (i, team) {
                  var html = Mustache.render(template,
                  team);
                  $('#teamsTable').append(html);
              });

          });
      });
  </script>
  <div id="content"></div>


</head>

<body>
  <div id="nav">
    <a href="teams.php" class="button">Teams[JQuery/}]</a>
    <a href="groups.php" class="button">Groups[JQuery]</a>
    <a href="#" class="button">Live[JS]</a>
    <a href="#" class="button">Archive[JS]</a>
    <a href="#" class="button">Teams[Leaflet]</a>
    <a href="#" class="button">tats[Leaflet]</a>
  </div>
  <hr>
  <div id="year" class="year">

  </div>
  <hr>

  <table border="1" id = "teamsTable">
  <tr>
  <th>Group</th>
  <th>Flag</th>
  <th>Name</th>
  <th>Outright</th>
  <th>FIFA Ranking</th>

  </tr>
</table>

<div class="year">
    <p>Copyright &copy; <span id="footerYear"></span> Richard Kuduk - L00120064@student.lyit.ie</p>
  </div>
</body>
</html>
