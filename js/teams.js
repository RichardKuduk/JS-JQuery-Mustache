$('document').ready(function() {

	$.getJSON('getTeams.php',function(data)
	{

		//console.log(data);
        var template = $("#template").html();
        var html = Mustache.render(template,{"teams": data});
        $('#table').html(html);

	});
});
