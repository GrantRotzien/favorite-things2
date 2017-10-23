$(document).ready(function() {

  $("form#favThings").submit(function(event) {
     event.preventDefault();
    var a = $("input#fav1").val();
    var b = $("input#fav2").val();
    var c = $("input#fav3").val();
    favThingsArray = [a, b, c];
    console.log(favThingsArray.toString());
    var newArray = [];
      newArray.push(favThingsArray[1],favThingsArray[0],favThingsArray[2]);
      console.log(newArray);

  $("li#1").text(newArray[0]);
  $("li#2").text(newArray[1]);
  $("li#3").text(newArray[2]);


  });
});
