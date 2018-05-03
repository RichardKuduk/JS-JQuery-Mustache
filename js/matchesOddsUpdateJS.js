$(function() {

  $(".updateBtn").click(function(){
      // This gets the row selected
      var rowSelected = $(this).parent().attr('id');
      // This get field selected
      var fieldSelected = $(this).prev().attr('id');
      // This gets previous value
      var oddSelected = $(this).prev().text();


    //Validation if the field is not empty
    if(oddSelected != "") {
        $.ajax({
            url: "php/updateAPI.php",
            type: "POST",
            async: true,
            data: { Row: rowSelected, Field: fieldSelected, Odd: oddSelected}, //data to post goes here as a json object
            dataType: "text",
            success: function(data) {
              console.log("Data changed!");
            },
        });
    } else {
        alert("Error updating odds!");
    }

  });

});
