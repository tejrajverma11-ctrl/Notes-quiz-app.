// Save Notes
function saveNote() {
  let noteInput = document.getElementById("noteInput");
  let notesList = document.getElementById("notesList");

  if (noteInput.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = noteInput.value;
  notesList.appendChild(li);

  noteInput.value = "";
}

// Quiz Questions
let quizData = [
  {
    question: "HTML ka full form kya hai?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "CSS kis ke liye use hoti hai?",
    options: ["Styling", "Database", "Server"],
    answer: "Styling"
  }
];

let quizBox = document.getElementById("quizBox");

quizData.forEach((q, index) => {
  let div = document.createElement("div");
  div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
  q.options.forEach(opt => {
    div.innerHTML += `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`;
  });
  quizBox.appendChild(div);
});

// Check Quiz
function checkQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText = `Score: ${score}/${quizData.length}`;
}
