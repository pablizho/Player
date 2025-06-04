const questions = [
  {
    q: 'Как зовут автора портфолио?',
    choices: ['Павел Смирнов', 'Иван Иванов', 'Алексей Сергеев', 'Дмитрий Петров'],
    answer: 0
  },
  {
    q: 'В какой компании Павел работает с 2024 года?',
    choices: ['Finiki Games', 'Playphoria', 'Stereo 7', 'VK Testers'],
    answer: 0
  },
  {
    q: 'Сколько лет опыта в QA индустрии имеет Павел?',
    choices: ['4 года', '2 года', '1 год', '6 лет'],
    answer: 0
  },
  {
    q: 'Какой инструмент Павел использовал для автоматизации тестирования?',
    choices: ['Appium', 'Visual Studio C++', 'Photoshop', 'Figma'],
    answer: 0
  },
  {
    q: 'Какую специализацию имеет Павел?',
    choices: [
      'Hyper/hybrid casual и tower defense',
      'Data Science',
      'Web Development',
      'Backend Development'
    ],
    answer: 0
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const resultEl = document.getElementById('result');

function showQuestion() {
  if (current >= questions.length) {
    questionEl.style.display = 'none';
    choicesEl.style.display = 'none';
    resultEl.style.display = 'block';
    resultEl.textContent = `Ваш результат: ${score} из ${questions.length}`;
    return;
  }
  const q = questions[current];
  questionEl.textContent = q.q;
  choicesEl.innerHTML = '';
  q.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(index);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (index === questions[current].answer) {
    score++;
  }
  current++;
  showQuestion();
}

showQuestion();
