const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

if (quizForm && quizResult) {
  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const questionNames = ["q1", "q2", "q3", "q4", "q5"];
    let score = 0;

    for (const questionName of questionNames) {
      const selectedAnswer = document.querySelector(
        `input[name="${questionName}"]:checked`
      );

      if (!selectedAnswer) {
        quizResult.textContent = "Please answer every question before submitting.";
        return;
      }

      if (selectedAnswer.value === "correct") {
        score += 1;
      }
    }

    const total = questionNames.length;
    const message =
      score === total
        ? "Excellent work!"
        : score >= 3
          ? "Good job. Review the questions you missed and try again."
          : "Keep practicing. You can reset the quiz and try again.";

    quizResult.textContent = `Your score: ${score} / ${total}. ${message}`;
  });

  quizForm.addEventListener("reset", function () {
    quizResult.textContent = "";
  });
}
