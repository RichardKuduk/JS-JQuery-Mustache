var xmlhttp;  // reference to XMLHttpRequest object


window.onload=function()
{
  getAjaxData();

}
function getAjaxData()
{
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function ()
  {
    showAjaxData();
  };
  
  // get data from getData.php passing a cureeny year
  xmlhttp.open("GET","getDatatest.php",true);
  xmlhttp.send();
  //alert("hello");

}
function showAjaxData(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    // Variable to hold html output
    var output = '<table border="1" id="results" style="margin: auto;">' +
    "<tr> <th>FLAG</th> <th>TEAM</th>  <th>P</th>  <th>W</th> <th>D</th>"+
    "<th>L</th> <th>PTS</th></tr>";
    // loop thorugh each row and add data
    for (var i = 0; i < data.tables.length; i++)
    {

      // console.log(data);
      // console.log(data.teams[i].Team);
      // console.log(data.teams.Team); 
      // console.log(data.teams.Team[i]);


      output += '<tr>';
      //output += "<td>" + '<img src="images/' + data.teams[i].Code +'.png" alt="icon" class="icons" />' + "</td>";
      output += "<td>" + data.tables[i].Stage + "</td>";
      //  output += "<td>" + data.tables[i].Played + "</td>";
      // output += "<td>" + data.tables[i].W + "</td>";
      // output += "<td>" + data.tables[i].D + "</td>";
      // output += "<td>" + data.tables[i].L + "</td>";
      // output += "<td>" + data.tables[i].Pts + "</td>";

      output += '</tr>';
    }
    // Closing table
    output += '</table>';
    // insert table to div in html page
    document.getElementById("tableDiv").innerHTML = output;
    

  }
}
