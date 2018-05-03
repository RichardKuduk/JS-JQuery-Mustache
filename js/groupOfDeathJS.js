$("document").ready(function(){

  $.getJSON("php/getDatatest.php", function(data){
    console.log(data.teams[1].OverallOddsRank);

    var fifaRanking = {};
    // Sum up the fifa ranking points
    $.each(data.teams, function(index, item) {
      if(fifaRanking[item.Stage])
        // cast to number
        fifaRanking[item.Stage] += Number(item.FIFARanking);
      else {
        fifaRanking[item.Stage] = Number(item.FIFARanking);
      }

    });
    //console.log(fifaRanking);

    $('#chart').attr('width',900).attr('height',800);
    var i = 0;

    $.each(fifaRanking , function( index , item) {
      //console.log("i" + i , "item" + item);
      var bar = document.createElementNS("http://www.w3.org/2000/svg","rect");
      bar.setAttribute('x',90);
      bar.setAttribute('y',i*55);
      bar.setAttribute('width',item*2);
      bar.setAttribute('height',50);
      // Check which one is the lowest and set different color
      if(item == _.min(fifaRanking))
        bar.setAttribute('fill','red');
      else {
        bar.setAttribute('fill','steelblue');

      }
      $('#chart').append(bar);


      var newText = document.createElementNS("http://www.w3.org/2000/svg","text");
      newText.setAttribute("x",50);
      newText.setAttribute("y",i*55+35);
      newText.setAttribute("font-size","40");

      var textNode = document.createTextNode(index);
      newText.appendChild(textNode);
      $("#chart").append(newText);

      var newTexta = document.createElementNS("http://www.w3.org/2000/svg","text");
      newTexta.setAttribute("x",item*2+20);
      newTexta.setAttribute("y",i*55+35);
      newTexta.setAttribute("font-size","40");
      newTexta.setAttribute("fill", "white");

      var textNodea = document.createTextNode(item);
      newTexta.appendChild(textNodea);
      $("#chart").append(newTexta);
      i++;

});

  });
});
