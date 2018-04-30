<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/mystyle.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/teams.js"></script>
  <script type="text/javascript" src="js/mustache.js" ></script>

  <script id="template" type="text/template">
      <table id="table" border=1>
        <tr><th>Stage</th><th>Photo</th><th>Name</th><th>Overall Odds</th><th>FIFA Ranking</th></tr>
      {{#teams}}
       <tr>
         <td>{{Stage}}</td>
         <!-- <td><img src=\"images/{{Code}}\" alt=\"user-avatar\" width=\"30px\" /></td> -->
         <td><img src="images/{{Code}}" alt="user-avatar" width="30px" /></td>

         <td>{{Name}}</td>
         <td>{{OverallOdds}}</td>
         <td>{{FIFARanking}}</td>
       </tr>
      {{/teams}}
      </table>
  </script>



</head>

<body>
  <?php include 'assets/header.php';?>

  <div id="table">

  </div>

  <hr>

  <?php include 'assets/footer.php';?>
</body>
</html>
