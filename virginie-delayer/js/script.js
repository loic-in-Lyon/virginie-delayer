// ------------- DRAG HORIZONTAL -------------
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  gallery.classList.add('dragging');
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
  gallery.classList.remove('dragging');
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
  gallery.classList.remove('dragging');
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // vitesse du drag
  gallery.scrollLeft = scrollLeft - walk;
});

// ------------- SUPPORT TOUCH -------------
let touchStartX = 0;
let touchScrollLeft = 0;

gallery.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - touchStartX) * 2;
  gallery.scrollLeft = touchScrollLeft - walk;
});
