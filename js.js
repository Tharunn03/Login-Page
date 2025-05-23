const circle = document.getElementById('circle');

window.addEventListener('mousemove', e => {
  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';
});

window.addEventListener('mousedown', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

window.addEventListener('mouseup', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(1)';
});
