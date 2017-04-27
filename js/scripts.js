$(function() {
  $("#options").submit(function(event) {
    event.preventDefault();

    var lightsaber = $("input:radio[name=lightsaber]:checked").val();
    var blue = $("input:radio[name=blue]:checked").val();

    if ("lightsaber" && "blue") {
      $("#obi").show();
    }
    // console.log(weaponInput);
  });
});
