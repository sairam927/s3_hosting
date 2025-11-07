// Animate skill progress bars on scroll
const progressFills = document.querySelectorAll('.progress-bar-fill');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  progressFills.forEach(fill => {
    const boxTop = fill.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      fill.style.width = fill.getAttribute('data-width');
    }
  });
});
