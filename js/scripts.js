$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var vowells =["a","e","i","o","u"];
    var letters = $("input#sentence").val().split("");
    debugger;
    for (var i = 0; i < 5; i += 1) {
      for (var il = 0; il < letters.length; il += 1) {
        if (vowells[i] === letters[il]) {
          letters.splice(il, 1, "-");
        }
      };
    };
    var results = letters.join("");
    $("#result").text(results);
  });
});
