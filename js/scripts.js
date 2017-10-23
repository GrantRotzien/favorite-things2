$(document).ready(function() {

  $("form#favThings").submit(function(event) {
     event.preventDefault();
    var a = $("input#fav1").val();
    var b = $("input#fav2").val();
    var c = $("input#fav3").val();
    favThingsArray = [a, b, c];
    console.log(favThingsArray);
    console.log(favThingsArray.toString());
  });
});
