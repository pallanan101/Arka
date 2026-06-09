let sections = document.querySelectorAll('.section');
let currentIndex = 0;
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    currentIndex++;
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }

  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });

  // Delay to prevent rapid scrolling
  setTimeout(() => {
    isScrolling = false;
  }, 800); // Adjust this value to slow down or speed up
}, { passive: false });