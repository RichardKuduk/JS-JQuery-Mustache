var globalData;
window.onload=function()
{
  getData();
}

function getData()
{
  $.getJSON("php/getDatatest.php", function(result){
    response(result);
    change();
    bar();

});


}

function response(data)
{
    // Assign data to globalData
    globalData = data;
}

function change(){

    // UnderScore function to fillter data
    var fillteredData = _.filter(globalData.matches, function(element){
            // Add new field to the object
            // Named flag1 and flag2
            // That adds filltered image code from globalData
            element.flag1  = _.find(globalData.teams, function(e){
              if(element.Team1 == e.Name)
                return  e.Code;
            }).Code;

            element.flag2  = _.find(globalData.teams, function(e){
              if(element.Team2 == e.Name)
                return  e.Code;
            }).Code;

            element.desc  = _.find(globalData.stages, function(e){
              if(element.Stage == e.stage)
                return  e.stage;
            }).description;
          return element;

     });

     // Mustache to display filltered data
    var template = $("#template").html();
    var html = Mustache.render(template,{"matches": fillteredData});
    $('#tableDiv').html(html);


}

function bar(){
    $('.chart').attr('width',500).attr('height',25);

    $.each($('.chart') ,function(i, item){
      //console.log(globalData.matches[i].Team1Win);
      // Get the odds for each of the teams
      var team1Odd = Number(globalData.matches[i].Team1Win);
      var draw = Number(globalData.matches[i].Draw);
      var team2Odd = Number(globalData.matches[i].Team2Win);
      // Calculate sum
      var sum = team1Odd + draw + team2Odd;
      //console.log(sum);
      // Create a bar
      var bar = document.createElementNS("http://www.w3.org/2000/svg","rect");
      bar.setAttribute('x',0);
      bar.setAttribute('y',0);
      // Set width of the bar to be proportional to the sum
      bar.setAttribute('width',team1Odd/sum * 500);
      bar.setAttribute('height',25);
      bar.setAttribute('fill','blue');
      $(this).append(bar);

      var bar = document.createElementNS("http://www.w3.org/2000/svg","rect");
      bar.setAttribute('x',team1Odd/sum * 500);
      bar.setAttribute('y',0);
      bar.setAttribute('width',draw/sum * 500);
      bar.setAttribute('height',25);
      bar.setAttribute('fill','grey');
      $(this).append(bar);

      var bar = document.createElementNS("http://www.w3.org/2000/svg","rect");
      bar.setAttribute('x',(team1Odd+draw)/sum * 500);
      bar.setAttribute('y',0);
      bar.setAttribute('width',team2Odd/sum * 500);
      bar.setAttribute('height',25);
      bar.setAttribute('fill','lightblue');
      $(this).append(bar);

    });
}
