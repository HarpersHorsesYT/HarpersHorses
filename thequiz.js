function checkAllAnswers() {
  const questions = document.querySelectorAll("#knowledge-quiz li");

  questions.forEach((item) => {
    const select = item.querySelector("select");
    const feedback = item.querySelector(".feedback");
    const correct = select.getAttribute("data-correct");
    const userAnswer = select.value;

    if (!userAnswer) {
      feedback.textContent = "⏳ Please select an answer.";
      feedback.style.color = "#777";
      return;
    }

    if (userAnswer.toLowerCase() === correct.toLowerCase()) {
      feedback.textContent = "✅ Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Incorrect. Try again!";
      feedback.style.color = "red";
    }
  });
}