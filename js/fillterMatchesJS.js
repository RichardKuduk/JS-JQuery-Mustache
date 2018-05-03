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
      change();
    });
    // On change event for select
    $("#team").change(function(e){
      change();
    });
    // Assign data to globalData
    globalData = data;

}

function change(){
    var stage = $( "#stage option:selected" ).val();
    var team = $( "#team option:selected" ).val();

    // UnderScore function to fillter data
    var fillteredData = _.filter(globalData.matches, function(element){
         if ((stage == element.Stage || stage == "All") &&
          (team == element.Team1 || team == element.Team2 || team == "All")) {
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
       }
     });



     // Mustache to display filltered data
    var template = $("#template").html();
    var html = Mustache.render(template,{"matches": fillteredData});
    $('#tableDiv').html(html);


}
