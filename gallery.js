const photos = [
  { src: 'photos/st_brosephs_1691577558_3165504441041162026.webp', caption: 'Children enjoying a group activity.' },
  { src: 'photos/st_brosephs_1691577558_3165504441007684816.webp', caption: 'Volunteers distributing supplies.' },
  { src: 'photos/st_brosephs_1691577558_3165504440999329837.webp', caption: 'Community event in progress.' },
  { src: 'photos/st_brosephs_1691577558_3165504441016004665.webp', caption: 'Smiles all around at Broseph Foundation.' },
  { src: 'photos/st_brosephs_1691577558_3165504441016085249.webp', caption: '' },
  { src: 'photos/st_brosephs_1691577558_3165504440999175994.webp', caption: '' },
  { src: 'photos/st_brosephs_1691577558_3165504440999198168.webp', caption: '' },
  { src: 'photos/st_brosephs_1691577558_3165504440999150981.webp', caption: '' },
  { src: 'photos/st_brosephs_1699973012_3235930614134360041.webp', caption: '' },
  { src: 'photos/st_brosephs_1699973012_3235930614319010379.webp', caption: '' },
  { src: 'photos/st_brosephs_1699973012_3235930614327240303.webp', caption: '' },
  { src: 'photos/st_brosephs_1699973012_3235930614142687960.webp', caption: '' },
  { src: 'photos/st_brosephs_1699973012_3235930614327249417.webp', caption: '' },
  { src: 'photos/st_brosephs_1699973012_3235930614134375226.webp', caption: '' },
];

let current = 0;
const image = document.getElementById('galleryImage');
const caption = document.getElementById('galleryCaption');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showPhoto(idx) {
  const photo = photos[idx];
  image.src = photo.src;
  caption.textContent = photo.caption || '';
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + photos.length) % photos.length;
  showPhoto(current);
});
nextBtn.addEventListener('click', () => {
  current = (current + 1) % photos.length;
  showPhoto(current);
});

// Initialize
showPhoto(current); 