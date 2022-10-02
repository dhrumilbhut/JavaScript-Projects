const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const submitBtn = document.getElementById("submit");
const radios = document.querySelectorAll('input[name="answer"]');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const quiz = quizData[currentQuiz];

  //   console.log(quiz.correct);

  questionEl.innerText = quiz.question;

  a_text.innerText = quiz.a;
  //   a.value = quiz.a;

  b_text.innerText = quiz.b;
  //   b.value = quiz.b;

  c_text.innerText = quiz.c;
  //   c.value = quiz.c;

  d_text.innerText = quiz.d;
  radios.forEach((radio) => (radio.checked = false));
  //   d.value = quiz.d;
}

// Code for calculation score

// function checkAns() {
//   for (let ans of answerEls) {
//     if (ans.checked) {
//       //   console.log(ans.checked, ans.id, quizData[currentQuiz - 1].correct);
//       if (ans.id == quizData[currentQuiz - 1].correct) {
//         console.log("Inside If");
//         score++;
//         console.log(score);
//       }
//     }
//   }
//   radios.forEach((radio) => (radio.checked = false));
// }

submitBtn.addEventListener("click", () => {
  // check ans, update score
  // load next quiz

  if (currentQuiz >= quizData.length - 1) {
    // currentQuiz++;
    // checkAns();
    // console.log(score);
  } else {
    currentQuiz++;
    loadQuiz();
    // checkAns();
  }
});
