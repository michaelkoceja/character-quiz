$(function() {
  $("#options").submit(function(event) {
    event.preventDefault();

    var weapon = $("input:radio[name=weapon]:checked").val();
    var color = $("input:radio[name=color]:checked").val();

    if (weapon === "lightsaber" && color === "blue") {
      $(".image").hide();
      $("#obi").show();
    }
    else if (weapon === "lightsaber" && color === "red") {
      $(".image").hide();
      $("#maul").show();
    }
    else if (weapon === "blaster" && color === "blue") {
      $(".image").hide();
      $("#han").show();
    }
    else if (weapon === "blaster" && color === "red") {
      $(".image").hide();
      $("#boba").show();
    }
    else if (weapon === "spaceship" && color === "blue") {
      $(".image").hide();
      $("#xwing").show();
    }
    else if (weapon === "spaceship" && color === "red") {
      $(".image").hide();
      $("#tiefighter").show();
    }
    else if (weapon === "bowcaster" && color === "blue") {
      $(".image").hide();
      $("#chewbacca").show();
    }
    else if (weapon === "bowcaster" && color === "red") {
      $(".image").hide();
      $("#evilchewbacca").show();
    }
  });
});
