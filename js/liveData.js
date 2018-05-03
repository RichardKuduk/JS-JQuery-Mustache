var xmlhttp;  // reference to XMLHttpRequest object

$(function()
{
  // Call this every 5 seconds
  setInterval(getAjaxData,5000);
});
function getAjaxData()
{

  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function ()
  {
    showAjaxData();
  };

  // get data from getData.php passing a cureeny year
  xmlhttp.open("GET",'./php/getDatatest.php',true);
  xmlhttp.send();

}

function showAjaxData(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    var data = JSON.parse(xmlhttp.responseText);
    if(xmlhttp.readyState == 4)
    {
      // select the rows
      _.each(data.matches, function(element){
        // Get the current odds from DOM that will be used for comparing
        var team1Odd = $('#'+ element.MatchID + ' .' + 'Team1Win');
        var drawOdd = $('#'+ element.MatchID + ' .' + 'Draw');
        var team2Odd = $('#'+ element.MatchID + ' .' + 'Team2Win');

        // if different than in DB
        if(element.Team1Win != team1Odd.text())
        {
          // Set the new odd in cell
          team1Odd.text(element.Team1Win);
          // Change color of the cell
          team1Odd.css("background-color" , "Aqua");
        }
        if(element.Draw != drawOdd.text())
        {
          drawOdd.text(element.Draw);
          drawOdd.css("background-color" , "Aqua");
        }
        if(element.Team2Win != team2Odd.text())
        {
          team2Odd.text(element.Team2Win);
          team2Odd.css("background-color" , "Aqua");
        }

      });

    }
}
