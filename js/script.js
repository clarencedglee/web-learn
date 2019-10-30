$(() => {
  const correctAnswers = "70cm+Bedrich Smatana+3";

  $("#done").click(function() {
    const answers = $("input:checked")
      .get()
      .map(checkbox => checkbox.value)
      .join("+");

    if (answers === correctAnswers) {
      showSuccess();
    } else {
      showError();
    }
  });

  $("#restart").click(function() {
    restart();
  });
});

function showSuccess() {
  $(".question-wrapper, #done").hide();
  $(".success, #restart").show();
}

function showError() {
  $(".question-wrapper, #done").hide();
  $(".error, #restart").show();
}

function restart() {
  $(".question-wrapper, #done").show();
  $(".error, .success, #restart").hide();
  $("input").prop("checked", false);
}
