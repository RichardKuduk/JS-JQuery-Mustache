
window.onload=function()
{
  var output = "";

    // Get data from php file
    $.getJSON("php/getDatatest.php", function(result){

      // Get the unique stages from db
      $.each(result.uniqStage, function(i, group){
          // Print stage as header
          output += "<h1>" + group.Stage + "</h1>";
          // Create table template
          output += '<table border="1" id="results" style="margin: auto;">' +
          "<tr> <th>FLAG</th> <th>TEAM</th>  <th>P</th>  <th>W</th> <th>D</th>"+
          "<th>L</th> <th>PTS</th></tr>";
          // For each team in tables
          $.each(result.tables, function(i, field){
            // if tables stage name is the same as the Stage
            if(field.Stage == group.Stage)
            {
              // Start creating the row for the team
              output += '<tr>';
              output += "<td>";
              var temp = "";
              // For each team
              $.each(result.teams, function(i, element){
                // if Names are the same
                if(element.Name == field.Team)
                {
                  // console.log(element.Name + "  TEST==TEST " + field.Team);
                  // console.log(element.Code);
                  // Assign Code to temp
                  temp =  element.Code;

                }
              });
              output += "<img width=\"35px\" src=\"images/"+temp+"\" />";
              output += "</td>";
              output += "<td>" + field["Team"] + "</td>";
              output += "<td>" + field["Played"] + "</td>";
              output += "<td>" + field["W"] + "</td>";
              output += "<td>" + field["D"] + "</td>";
              output += "<td>" + field["L"] + "</td>";
              output += "<td>" + field["Pts"] + "</td>";
              output += '</tr>';
            }
        });

        output += "</table>";

      });
      $('#tableDiv').append($(output));



    });
}
