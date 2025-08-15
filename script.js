const CARDS_DATA = [
{
  id: 'card-1',
  title: 'Leonardo Anacleto',
  images: [
    'Leonardo Anacleto/Leo1.jpg',
    'Leonardo Anacleto/Leo2.jpg'
  ]
},
  {
  id: 'card-2',
  title: 'Natalia Fernandes',
  images: [
    'Nat Fernandes/Nat1.jpg',
    'Nat Fernandes/Nat2.jpg'
  ]
  },
  {
    id: 'card-3',
    title: 'Thales Sampaio',
    images: [
    'Thales Sampaio/thales1.jpg',
    'Thales Sampaio/thales2.jpg'
    ]
  },
  {
    id: 'card-4',
    title: 'Bruno Nucci',
    images: [
      'Bruno Nucci/bruno1.jpg',
      'Bruno Nucci/bruno2.jpg'
    ]
  }
];

/***********************
 * Likes (pode curtir e descurtir)
 ***********************/
const LIKE_FLAG_KEY  = 'likedFlags_v2'; // quem já curtiu (por card)
const LIKE_COUNT_KEY = 'likeCounts_v2'; // contador total (por card)

function loadMap(key) {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}
function saveMap(key, map) {
  localStorage.setItem(key, JSON.stringify(map));
}

// carrega mapas
const likedFlags = loadMap(LIKE_FLAG_KEY);
const likeCounts = loadMap(LIKE_COUNT_KEY);

/***********************
 * Cards / Carrossel
 ***********************/
const cardsEl = document.getElementById('cards');
const tpl = document.getElementById('card-template');

function createCard({ id, title, images }) {
  const node = tpl.content.cloneNode(true);
  const track = node.querySelector('.track');
  const dots = node.querySelector('.dots');
  const prevBtn = node.querySelector('.prev');
  const nextBtn = node.querySelector('.next');
  const carousel = node.querySelector('.carousel');

  const likeBtn = node.querySelector('.like');
  const likeCount = node.querySelector('.count');
  node.querySelector('.title').textContent = title;

  // monta slides
  let index = 0;
  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${title} - imagem ${i + 1}`;
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dots.appendChild(dot);
  });

  if (images.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dots.style.display = 'none';
  }

  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    [...dots.children].forEach((d, i) => d.classList.toggle('active', i === index));
  }

  prevBtn.addEventListener('click', () => { index = (index - 1 + images.length) % images.length; update(); });
  nextBtn.addEventListener('click', () => { index = (index + 1) % images.length; update(); });

  // LIKE com curtir/descurtir
  const initialLiked = !!likedFlags[id];
  const initialCount = Number.isFinite(likeCounts[id]) ? likeCounts[id] : 0;

  likeBtn.classList.toggle('active', initialLiked);
  likeBtn.setAttribute('aria-pressed', initialLiked);
  likeCount.textContent = String(initialCount);

  likeBtn.addEventListener('click', () => {
    const currentlyLiked = !!likedFlags[id];

    if (currentlyLiked) {
      // descurtindo
      likedFlags[id] = false;
      likeCounts[id] = Math.max(0, (likeCounts[id] || 0) - 1);
      likeBtn.classList.remove('active');
      likeBtn.setAttribute('aria-pressed', 'false');
    } else {
      // curtindo
      likedFlags[id] = true;
      likeCounts[id] = (likeCounts[id] || 0) + 1;
      likeBtn.classList.add('active');
      likeBtn.setAttribute('aria-pressed', 'true');
    }

    likeCount.textContent = String(likeCounts[id]);
    saveMap(LIKE_FLAG_KEY, likedFlags);
    saveMap(LIKE_COUNT_KEY, likeCounts);
  });

  return node;
}

function renderCards(list) {
  cardsEl.innerHTML = '';
  list.forEach(item => cardsEl.appendChild(createCard(item)));
}

// inicializa
renderCards(CARDS_DATA);

/***********************
 * Toolbar
 ***********************/
document.getElementById('shuffleBtn').addEventListener('click', () => {
  const arr = [...CARDS_DATA];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  renderCards(arr);
});

const demoBgs = [
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1920&auto=format&fit=crop'
];
let bgIndex = 0;
document.getElementById('bgBtn').addEventListener('click', () => {
  bgIndex = (bgIndex + 1) % demoBgs.length;
  document.documentElement.style.setProperty('--bg-url', `url('${demoBgs[bgIndex]}')`);
});
