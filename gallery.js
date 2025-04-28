const photos = [
  {
    src: 'photos/st_brosephs_1691577558_3165504441041162026.webp',
    caption: '“I never thought I would enjoy learning so much! The volunteers made every class fun and interesting. I now dream of becoming a scientist.”',
    name: 'Asha',
    role: '8th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504441007684816.webp',
    caption: '“Teaching here has been a life-changing experience. Watching the kids grow in confidence and curiosity is the best reward.”',
    name: 'Rohit',
    role: 'Volunteer Tutor'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504440999329837.webp',
    caption: '“The support from BSV helped me improve my grades and make new friends. I feel like I can achieve anything now!”',
    name: 'Priya',
    role: '9th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504441016004665.webp',
    caption: '“Volunteering at BSV gave me practical skills and a sense of purpose. I recommend it to anyone who wants to make a real difference.”',
    name: 'Anjali',
    role: 'Volunteer Tutor'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504441016085249.webp',
    caption: '“I love the science experiments and group activities. Every class is something new!”',
    name: 'Manoj',
    role: '8th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504440999175994.webp',
    caption: '“The mock tests and extra help sessions made me confident for my exams.”',
    name: 'Suma',
    role: '9th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504440999198168.webp',
    caption: '“I learned so much about teamwork and leadership while volunteering here.”',
    name: 'Vikram',
    role: 'Volunteer Tutor'
  },
  {
    src: 'photos/st_brosephs_1691577558_3165504440999150981.webp',
    caption: '“The classes are always interactive and the teachers are very supportive.”',
    name: 'Lakshmi',
    role: '8th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1699973012_3235930614134360041.webp',
    caption: '“I made so many friends and learned new things every week.”',
    name: 'Arjun',
    role: '9th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1699973012_3235930614319010379.webp',
    caption: '“Helping others learn helped me discover my own strengths.”',
    name: 'Sneha',
    role: 'Volunteer Tutor'
  },
  {
    src: 'photos/st_brosephs_1699973012_3235930614327240303.webp',
    caption: '“The after-class sessions are my favorite part of the week!”',
    name: 'Rahul',
    role: '8th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1699973012_3235930614142687960.webp',
    caption: '“I feel proud to be part of BSV and help my community.”',
    name: 'Deepa',
    role: 'Volunteer Tutor'
  },
  {
    src: 'photos/st_brosephs_1699973012_3235930614327249417.webp',
    caption: '“The volunteers are always patient and explain things until we understand.”',
    name: 'Kiran',
    role: '9th Grade Student'
  },
  {
    src: 'photos/st_brosephs_1699973012_3235930614134375226.webp',
    caption: '“I look forward to every class. Thank you BSV!”',
    name: 'Meena',
    role: '8th Grade Student'
  },
];

let current = 0;
const image = document.getElementById('galleryImage');
const caption = document.getElementById('galleryCaption');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const nameEl = document.getElementById('testimonialName');
const roleEl = document.getElementById('testimonialRole');
const testimonialCard = document.getElementById('testimonialCard');

let autoScrollTimeout = null;
let isHovered = false;

function getDisplayTime(text) {
  // 2.5s base + 0.04s per character, clamp between 2.5s and 7s
  const base = 2500;
  const perChar = 40;
  const min = 2500;
  const max = 7000;
  return Math.max(min, Math.min(max, base + text.length * perChar));
}

function showPhoto(idx) {
  const photo = photos[idx];
  image.src = photo.src;
  caption.textContent = photo.caption || '';
  nameEl.textContent = photo.name || '';
  roleEl.textContent = photo.role || '';
}

function scheduleAutoScroll() {
  clearTimeout(autoScrollTimeout);
  if (!isHovered) {
    const time = getDisplayTime(photos[current].caption || '');
    autoScrollTimeout = setTimeout(() => {
      nextPhoto();
    }, time);
  }
}

function nextPhoto() {
  current = (current + 1) % photos.length;
  showPhoto(current);
  scheduleAutoScroll();
}
function prevPhoto() {
  current = (current - 1 + photos.length) % photos.length;
  showPhoto(current);
  scheduleAutoScroll();
}

prevBtn.addEventListener('click', () => {
  prevPhoto();
});
nextBtn.addEventListener('click', () => {
  nextPhoto();
});

testimonialCard.addEventListener('mouseenter', () => {
  isHovered = true;
  clearTimeout(autoScrollTimeout);
});
testimonialCard.addEventListener('mouseleave', () => {
  isHovered = false;
  scheduleAutoScroll();
});

// Initialize
showPhoto(current);
scheduleAutoScroll(); 