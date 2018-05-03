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
         return element;

     });

     // Mustache to display filltered data
    var template = $("#template").html();
    var html = Mustache.render(template,{"matches": fillteredData});
    $('#tableDiv').html(html);


}
