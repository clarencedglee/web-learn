$(() => {
  $("body").addClass("f");

  $("#start").click(function() {
    $(".screen.intro").removeClass("show");
    $(".screen.one").addClass("show");
    $("body").removeClass("f");
  });

  $(".screen.one input").click(function() {
    $(".screen.one").removeClass("show");
    $(".screen.two").addClass("show");
  });

  $(".screen.two input").click(function() {
    $(".screen.two").removeClass("show");
    $(".screen.three").addClass("show");
  });

  $(".screen.three input").click(function() {
    $(".screen.three").removeClass("show");
    showResults();
  });

  $(".restart").click(function() {
    restart();
  });
});

const correctAnswers = "70cm+Bedrich Smatana+3";

function showResults() {
  const answers = $("input:checked")
    .get()
    .map(checkbox => checkbox.value)
    .join("+");

  if (answers === correctAnswers) {
    $(".screen.success").addClass("show");
  } else {
    $(".screen.error").addClass("show");
  }
}

function restart() {
  $(".screen").removeClass("show");
  $(".screen.intro").addClass("show");
  $("input").prop("checked", false);
  $("body").addClass("f");
}
