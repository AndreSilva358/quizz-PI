
let questions = [
  {
    id: 1,
    question: "Como se faz para imprimir um texto ou cálculos matemáticos em python?",
    answer: "O usuário digita o texto e “imprime” o resultado com print",
    options: [
      "O usuário digita apenas o texto",
      "O usuário digita o texto e faz o comando if",
      "O usuário digita apenas if e coloca",
      "O usuário digita o texto e “imprime” o resultado com print"
    ]
  },
  {
    id: 2,
    question: "Quais os principais comandos que são necessários para fazer uma repetição em python?",
    answer: "Break/while/print e if",
    options: [
      "If e print apenas",
      "While/print e if",
      "Break/while/print e if",
      "Def e return"
    ]
  },
  {
    id: 3,
    question: "Qual código é utilizado para fazer “trem de dados?",
    answer: "Len",
    options: [
      "Len",
      "Def",
      "Print",
      "While"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
