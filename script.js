let submitBtn1 = document.querySelector(".submitBtn1");
let submitBtn2 = document.querySelector(".submitBtn2");
let result1    = document.querySelector(".result1");
let result2    = document.querySelector(".result2");

function calculateQuiz1() {
  let score = 0;
  for (let i = 1; i <= 5; i++) {
    const radios = document.getElementsByName("q" + i);
    for (const radio of radios) {
      if (radio.checked && radio.value === "1") score++;
    }
  }
  let message = score === 5
    ? "Outstanding!"
    : score >= 3
      ? "Good"
      : "Needs Improvement. Embrace digital skills to thrive in tomorrow's world.";
  result1.textContent = `Score: ${score}/5 - ${message}`;
}

function calculateQuiz2() {
  let score = 0;
  for (let i = 6; i <= 10; i++) {
    const radios = document.getElementsByName("q" + i);
    for (const radio of radios) {
      if (radio.checked && radio.value === "1") score++;
    }
  }
  let message = score === 5
    ? "Excellent! You are fully prepared for the digital future!"
    : score >= 3
      ? "Good! You are on the right track — stay curious and keep learning."
      : "Needs Improvement. Embrace digital skills to thrive in tomorrow's world.";
  result2.textContent = `Score: ${score}/5 - ${message}`;
}

submitBtn1.addEventListener("click", calculateQuiz1);
submitBtn2.addEventListener("click", calculateQuiz2);
