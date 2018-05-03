$('document').ready(function() {

	$.getJSON('php/getTeams.php',function(data)
	{

		//console.log(data);
        var template = $("#template").html();
        var html = Mustache.render(template,{"teams": data});
        $('#table').html(html);

	});
});
