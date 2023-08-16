var parallax = document.querySelector('._parallax');
window.addEventListener('scroll', () => {
  var {
    top,
    bottom
  } = parallax.getBoundingClientRect();
  var size = 0;
  size = Math.round((top + 1500) / (parallax.scrollHeight - window.innerHeight) * 5);
  document.querySelector('._parallax').style.transform = `translateX(${size + 30}%)`; 
});