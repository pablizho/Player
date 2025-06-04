const stages = [
  {
    img: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    text: 'Добро пожаловать в визуальную новеллу о карьере Павла Смирнова, QA инженера.'
  },
  {
    img: 'https://www.novo-sibirsk.ru/upload/resize_cache/iblock/bbf/1600_1000_1/photo_zheleznodorozhnyy_most_cherez_ob_detail_zheleznodorozhnyy_most_cherez_ob.jpg',
    text: 'Павел из Новосибирска. Он увлечён тестированием и разработкой мобильных игр.'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    text: 'Его навыки включают функциональное и регрессионное тестирование, работу с Android Studio, Appium и другими инструментами.'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    text: 'Опыт Павла включает работу в Stereo 7, Playphoria и Finiki Games, а также проекты VK Testers и Utest.'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    text: 'Он участвовал в тестировании Moon Pioneer, Oilman, Idle Lumberjack 2 и других игр.'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    text: 'Свяжитесь с Павлом: pavelsmirnov98@gmail.com или Telegram @Zogang.'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
