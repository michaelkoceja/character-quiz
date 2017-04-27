$(function() {
  $("#options").submit(function(event) {
    event.preventDefault();

    var weapon = $("input:radio[name=weapon]:checked").val();
    var color = $("input:radio[name=color]:checked").val();

    if (weapon === "lightsaber" && color === "blue") {
      $("#obi").show();
    } else {
      $("#maul").show();
    }

    var weapon = $("input:radio[name=weapon]:checked").val();
    var color = $("input:radio[name=color]:checked").val();

    if (weapon === "blaster" && color === "blue") {
      $("#han").show();
    } else if {
      $("#boba").show();
    }
       // console.log(weaponInput);
  });
});
