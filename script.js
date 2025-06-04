const stages = [
  {
    img: 'https://source.unsplash.com/featured/?travel',
    text: 'Добро пожаловать в визуальную новеллу о карьере Павла Смирнова, QA инженера.'
  },
  {
    img: 'https://source.unsplash.com/featured/?novosibirsk',
    text: 'Павел из Новосибирска. Он увлечён тестированием и разработкой мобильных игр.'
  },
  {
    img: 'https://source.unsplash.com/featured/?coding',
    text: 'Его навыки включают функциональное и регрессионное тестирование, работу с Android Studio, Appium и другими инструментами.'
  },
  {
    img: 'https://source.unsplash.com/featured/?office',
    text: 'Опыт Павла включает работу в Stereo 7, Playphoria и Finiki Games, а также проекты VK Testers и Utest.'
  },
  {
    img: 'https://source.unsplash.com/featured/?game',
    text: 'Он участвовал в тестировании Moon Pioneer, Oilman, Idle Lumberjack 2 и других игр.'
  },
  {
    img: 'https://source.unsplash.com/featured/?contact',
    text: 'Свяжитесь с Павлом: pavelsmirnov98@gmail.com или Telegram @Zogang.'
  },
  {
    img: 'https://source.unsplash.com/featured/?portfolio',
    text: 'Спасибо за просмотр! Больше информации вы найдёте в полном портфолио.'
  }
];

const imgEl = document.getElementById('stage-img');
const textEl = document.getElementById('stage-text');
const btnEl = document.getElementById('next-btn');
let current = 0;

function showStage(index) {
  const stage = stages[index];
  imgEl.src = stage.img;
  textEl.textContent = stage.text;
  btnEl.textContent = index < stages.length - 1 ? 'Далее' : 'Открыть портфолио';
}

btnEl.addEventListener('click', () => {
  current++;
  if (current < stages.length) {
    showStage(current);
  } else {
    window.location.href = 'https://pablizho.github.io/test-local/';
  }
});

showStage(0);
