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
  },
  {
    id: 'card-5',
    title: 'Rogerio Moraes',
    images: [
      'Rogerio Moraes/rogerio1.jpg',
      'Rogerio Moraes/rogerio2.jpg'
    ]
  },
  {
    id: 'card-6',
    title: 'Karla Rodrigues',
    images: [
      'Karla Rodrigues/karla1.jpg',
      'Karla Rodrigues/karla2.jpg'
    ]
  },
  {
    id: 'card-7',
    title: 'Felipe Gomes',
    images: [
      'Felipe Gomes/felipe1.jpg',
      'Felipe Gomes/felipe2.jpg'
    ]
  }
  ,
  {
    id: 'card-8',
    title: 'Flavia Maria',
    images: [
      'Flavia Maria/flavia1.jpg',
      'Flavia Maria/flavia2.jpg'
    ]
  }
  ,
  {
    id: 'card-9',
    title: 'Amanda Stoeberl',
    images: [
      'Amanda Stoeberl/amanda1.jpg',
      'Amanda Stoeberl/amanda2.jpg'
    ]
  }
    ,
  {
    id: 'card-11',
    title: 'Larissa Estancovich',
    images: [
      'Larissa Estancovich/estancovich1.jpeg',
      'Larissa Estancovich/estancovich2.jpg'
    ]
  }
  
   ,
  {
    id: 'card-14',
    title: 'Amanda Andrade',
    images: [
      'Amanda Andrade/andrade1.jpeg',
      'Amanda Andrade/andrade2.jpg'
    ]
  }
   ,
  {
    id: 'card-15',
    title: 'Talita Guimaraes',
    images: [
      'Talita Guimaraes/talita1.jpg',
      'Talita Guimaraes/talita2.jpg'
    ]
  } 
  ,
  {
    id: 'card-16',
    title: 'Daniela Aparecida',
    images: [
      'Daniela Aparecida/aparecida1.jpeg',
      'Daniela Aparecida/aparecida2.jpeg'
    ]
  }
    ,
  {
    id: 'card-17',
    title: 'Laila Damasceno',
    images: [
      'Laila Damasceno/laila1.jpeg',
      'Laila Damasceno/laila2.jpg'
    ]
  }
     ,
  {
    id: 'card-18',
    title: 'Julia Bernardon',
    images: [
      'Julia Bernardon/julia1.jpeg',
      'Julia Bernardon/julia2.jpg'
    ]
    
  }
     ,
  {
    id: 'card-19',
    title: 'Sidvan Santos',
    images: [
      'Sidvan Santos/sidvan1.jpeg',
      'Sidvan Santos/sidvan2.jpg'
    ]
    
  }
       ,
  {
    id: 'card-20',
    title: 'Saulo Tortola',
    images: [
      'Saulo Tortola/saulo1.jpg',
      'Saulo Tortola/saulo2.jpg'
    ]
    
  }
         ,
  {
    id: 'card-21',
    title: 'Julio Bonfim',
    images: [
      'Julio Bonfim/julio1.jpeg',
      'Julio Bonfim/julio2.jpg'
    ]
    
  }
         ,
  {
    id: 'card-22',
    title: 'Laura Dalla Bona',
    images: [
      'Laura Dalla Bona/laura1.jpeg',
      'Laura Dalla Bona/laura2.jpg'
    ]
    
  }
         ,
  {
    id: 'card-23',
    title: 'Hygia Chevitarese',
    images: [
      'Hygia Chevitarese/hygia1.jpeg',
      'Hygia Chevitarese/hygia2.jpg'
    ]
    
  }
         ,
  {
    id: 'card-24',
    title: 'Luiza Eduarda',
    images: [
      'Luiza Eduarda/luiza1.jpeg',
      'Luiza Eduarda/luiza2.jpg'
    ]
    
  }
         ,
  {
    id: 'card-25',
    title: 'Ludan Burey',
    images: [
      'Ludan Burey/ludan1.jpeg',
      'Ludan Burey/ludan2.jpg'
    ]
    
  }
           ,
  {
    id: 'card-26',
    title: 'Lucas Machado',
    images: [
      'Lucas Machado/machado1.jpg',
      'Lucas Machado/machado2.jpg'
    ]
    
  }
             ,
  {
    id: 'card-27',
    title: 'Darlison Lebark',
    images: [
      'Darlison Lebark/darlison1.jpeg',
      'Darlison Lebark/darlison2.jpg'
    ]
    
  }
               ,
  {
    id: 'card-28',
    title: 'Letícia Diel',
    images: [
      'Leticia Diel/diel1.jpeg',
      'Leticia Diel/diel2.jpg'
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
/***********************
 * Toolbar (versão segura)
 ***********************/
const shuffleBtn = document.getElementById('shuffleBtn');
if (shuffleBtn) {
  shuffleBtn.addEventListener('click', () => {
    const arr = [...CARDS_DATA];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    renderCards(arr);
  });
}

const demoBgs = [
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1920&auto=format&fit=crop'
];
let bgIndex = 0;

const bgBtn = document.getElementById('bgBtn');
if (bgBtn) {
  bgBtn.addEventListener('click', () => {
    bgIndex = (bgIndex + 1) % demoBgs.length;
    document.documentElement.style.setProperty('--bg-url', `url('${demoBgs[bgIndex]}')`);
  });
}


/***********************
 * CONTADOR FOLIANÓPOLIS
 ***********************/
function iniciarContagemFolia() {
  const dataFolia = new Date("November 20, 2025 00:00:00").getTime();
  const timer = document.getElementById("countdown-timer");
  if (!timer) return; // evita erro se o elemento não existir

  function atualizar() {
    const agora = new Date().getTime();
    const restante = dataFolia - agora;

    if (restante <= 0) {
      timer.textContent = "🎉 O Folia começou! 🎉";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((restante % (1000 * 60)) / 1000);

    timer.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }

  atualizar(); // executa na hora
  const intervalo = setInterval(atualizar, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarContagemFolia);
