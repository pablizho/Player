const stages = [
  {
    text: 'Добро пожаловать в небольшое путешествие по карьере Павла Смирнова!',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80'
  },
  {
    text: 'Наш путь начинается в Новосибирске, где Павел сделал первые шаги к профессии QA инженера.',
    image: 'https://images.unsplash.com/photo-1531587580089-53603c1c8d54?auto=format&fit=crop&w=800&q=80'
  },
  {
    text: 'В 2021 году Павел присоединился к Stereo 7 и погрузился в мир мобильных игр.',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4436b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    text: 'Следующая остановка — Playphoria, где он совершенствовал навыки тестирования и автоматизации.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    text: 'Сегодня Павел работает в Finiki Games и продолжает исследовать новые горизонты в QA.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    text: 'Спасибо, что прошли это небольшое путешествие! Вы можете узнать больше, изучив его портфолио.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  }
];

let current = 0;

const imgEl = document.getElementById('stage-img');
const textEl = document.getElementById('stage-text');
const nextBtn = document.getElementById('next-btn');

function showStage() {
  const stage = stages[current];
  imgEl.src = stage.image;
  textEl.textContent = stage.text;
  if (current === stages.length - 1) {
    nextBtn.textContent = 'Завершить';
  } else if (current === 0) {
    nextBtn.textContent = 'Далее';
  }
}

nextBtn.addEventListener('click', () => {
  current++;
  if (current >= stages.length) {
    document.getElementById('game').innerHTML = '<p>Путешествие окончено. Благодарим за интерес!</p>';
  } else {
    showStage();
  }
});

showStage();
