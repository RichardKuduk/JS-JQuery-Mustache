
$(document).ready(function() {
  $.getJSON('getData.php', { get_param: 'value' }, function(data) {
    $.each(data, function(index, element) {
        $('year').append($('<div>', {
            text: element.name
        }));
    });
});


});
