const stages = [
  { text: 'Добро пожаловать в небольшое путешествие по карьере Павла Смирнова!', position: { x: 0, z: 0 } },
  { text: 'Наш путь начинается в Новосибирске, где Павел сделал первые шаги к профессии QA инженера.', position: { x: 10, z: -10 } },
  { text: 'В 2021 году Павел присоединился к Stereo 7 и погрузился в мир мобильных игр.', position: { x: -10, z: -20 } },
  { text: 'Следующая остановка — Playphoria, где он совершенствовал навыки тестирования и автоматизации.', position: { x: 0, z: -30 } },
  { text: 'Сегодня Павел работает в Finiki Games и продолжает исследовать новые горизонты в QA.', position: { x: 10, z: -40 } },
  { text: 'Спасибо, что прошли это небольшое путешествие! Вы можете узнать больше, изучив его портфолио.', position: { x: 0, z: -50 } }
];

const overlayText = document.getElementById('overlay-text');

let scene, camera, renderer, player;
const keys = {};
const speed = 0.1;

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0c4ff);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.6), 0.1, 1000);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
  document.getElementById('game').appendChild(renderer.domElement);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(1, 2, 1);
  scene.add(dirLight);
  scene.add(new THREE.AmbientLight(0x707070));

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.MeshPhongMaterial({ color: 0x8ecae6 })
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  player = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 0xf94144 })
  );
  player.position.y = 0.5;
  scene.add(player);

  stages.forEach(stage => {
    const marker = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0x577590 })
    );
    marker.position.set(stage.position.x, 0.5, stage.position.z);
    stage.mesh = marker;
    scene.add(marker);
  });

  camera.position.set(0, 3, 5);
  camera.lookAt(player.position);

  window.addEventListener('resize', onResize);
  document.addEventListener('keydown', e => keys[e.key.toLowerCase()] = true);
  document.addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);
}

function onResize() {
  camera.aspect = window.innerWidth / (window.innerHeight * 0.6);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
}

function updatePlayer() {
  if (keys['w'] || keys['arrowup']) player.position.z -= speed;
  if (keys['s'] || keys['arrowdown']) player.position.z += speed;
  if (keys['a'] || keys['arrowleft']) player.position.x -= speed;
  if (keys['d'] || keys['arrowright']) player.position.x += speed;
}

function updateCamera() {
  camera.position.x = player.position.x + 5;
  camera.position.y = player.position.y + 3;
  camera.position.z = player.position.z + 5;
  camera.lookAt(player.position);
}

function checkStages() {
  for (const stage of stages) {
    if (player.position.distanceTo(stage.mesh.position) < 2) {
      overlayText.textContent = stage.text;
      return;
    }
  }
  overlayText.textContent = '';
}

function animate() {
  requestAnimationFrame(animate);
  updatePlayer();
  updateCamera();
  checkStages();
  renderer.render(scene, camera);
}
