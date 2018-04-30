var globalData;
window.onload=function()
{

  getData();

}


function getData()
{
  $.getJSON("getDatatest.php", function(result){
    response(result);
});


}

function response(data)
{
    // Add ALL option
    $('#stage').append($('<option>', {
        value: "All",
        text : "All"
    }));
    // Add ALL option
    $('#team').append($('<option>', {
        value: "All",
        text : "All"
    }));
    // Loop to dynamiclly fill stage select
    $.each(data.stages, function (i, item) {
        $('#stage').append($('<option>', {
            value: item.stage,
            text : item.description
        }));
    });
    // Loop to dynamiclly fill team name select
    $.each(data.teams, function (i, item) {
        $('#team').append($('<option>', {
            value: item.Name,
            text : item.Name
        }));
    });
    // On change event for select
    $("#stage").change(function(e){
      change(e);
    });
    // On change event for select
    $("#team").change(function(e){
      change(e);
    });
    // Assign data to globalData
    globalData = data;

}

function change(e){
  var stage = $( "#stage option:selected" ).val();
  var team = $( "#team option:selected" ).val();

  var output = "";
  // Create table template
  output += '<table border="1" id="results" style="margin: auto;">' +
  "<tr> <th>Date</th> <th>Time</th>  <th>Stage</th>  <th>FLAG</th> <th>Team 1</th>"+
  "<th>1</th> <th>x</th><th>2</th><th>Team 2</th><th>FLAG</th><th>Prediction</th></tr>";

  $.each(globalData.matches, function (i, field) {
    if((stage == field.Stage || stage == "All") && (team == field.Team1 || team == field.Team2 || team == "All"))
    {
      // Start creating the row for the team
      output += '<tr>';
      output += "<td>" + field.Date + "</td>";
      output += "<td>" + field.Time + "</td>";
      output += "<td>" + field.Stage + "</td>";
      output += "<td>" + "FLAG" + "</td>";
      output += "<td>" + field.Team1 + "</td>";
      output += "<td>" + field.Team1Win + "</td>";
      output += "<td>" + field.Draw + "</td>";
      output += "<td>" + field.Team2Win + "</td>";
      output += "<td>" + field.Team2 + "</td>";
      output += "<td>" + "FLAG" + "</td>";
      output += "<td>" + field.Prediction + "</td>";
      output += '</tr>';
    }
  });

  output += "</table>";

  $('#tableDiv').html($(output));

}
