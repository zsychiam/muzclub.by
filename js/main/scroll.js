const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (window.scrollY > animItemOffset - animItemPoint && window.scrollY < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
        
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
        animOnScroll();
     }, 500);
}

var parallax = document.querySelectorAll('._parallax');

window.addEventListener('scroll', () => {
  var {
    top,
    bottom
  } = parallax.getBoundingClientRect();
  var size = 0;
  if (top < 0 && bottom > window.innerHeight) size = Math.round(-top / (parallax.scrollHeight - window.innerHeight) * 100);
  if (bottom < window.innerHeight) size = 100;
  document.querySelectorAll('._parallax').style.left = `${size}px`;
});
