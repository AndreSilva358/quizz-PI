
let questions = [
  {
    id: 1,
    question: "Leia atentamente as afirmativas a seguir, considerando-as como corretas. Em seguida, analise as alternativas e escolha a que julgar correta. <br> <br>• Todos os Diques são Claques; <br> • Alguns Blogs são Claques; <br>• Todos os Enos são Blogs; <br>• Nenhum Flug é Claque; <br>• Alguns Flugs são Blogs. <br>Logicamente:",
    answer: "Alguns Flugs podem ser Diques",
    options: [
      "Todos os Enos são Diques",
      "Nenhum Dique é Blog",
      "Alguns Flugs podem ser Diques",
      "Todos os Enos podem der Diques"
    ]
  },
  {
    id: 2,
    question: "Leia atentamente as afirmativas a seguir, considerando-as verdadeiras. Em seguida, analise as alternativas e escolha a que julgar correta. <br> • Se João é arquiteto, Gabriel é professor; <br> • João é arquiteto se Antônio for juiz; <br> • Antônio ou Leonardo é juiz; <br> • Leonardo é biólogo ou professor. Que profissão exercem João, Gabriel, Leonardo e Antônio, respectivamente?",
    answer: "Arquiteto, professor, biólogo e juiz",
    options: [
      "Arquiteto, biólogo, professor e juiz",
      "Juiz, biólogo, professor e arquiteto",
      "Juiz, professor, biólogo e arquiteto",
      "Arquiteto, professor, biólogo e juiz"
    ]
  },
  {
    id: 3,
    question: "Se dois digitadores podem digitar duas páginas em dois minutos, quantos digitadores seriam necessários para digitar 100 páginas em cinco minutos?",
    answer: "40",
    options: [
      "40",
      "20",
      "400",
      "80"
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
