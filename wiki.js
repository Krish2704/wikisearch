$(document).ready(function(){
  $('#random').click(function(){
 window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
  $('#submit').click(function(e){
    e.preventDefault();
    var search=$('#input1').val();
    var link="https://en.wikipedia.org/w/api.php?action=opensearch&search=%22+"+search+"+%22&format=json&callback=?";
    var add;
    $('#searchresult').html("<br/>");
    $.getJSON(link,function(json){
      console.log(JSON.stringify(json));
      for(var i=0;i<json[1].length;i++)
        {
          add="<p><a href="+json[3][i]+" target=_blank ><h3 class='text-center text-responsive'>"+json[1][i]+"</h3></a><br/>"+"<h4 class='text-center text-responsive'>"+json[2][i].slice(0,150)+"...</h4></p><br/><br/>";
          $('#searchresult').append(add);
        }
    });
  });
});