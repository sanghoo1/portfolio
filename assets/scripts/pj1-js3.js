//헤더 로고 3d 효과

const logo = document.querySelector('.overview-logo img');
const maxRotation = 15; // Maximum rotation angle

document.addEventListener('mousemove', (e) => {
  // Calculate the rotation based on mouse position
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = (e.clientX - centerX) / centerX;
  const deltaY = (e.clientY - centerY) / centerY;

  const rotateY = deltaX * maxRotation;
  const rotateX = -deltaY * maxRotation;

  // Apply 3D rotation
  logo.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset the logo's transform on mouse leave
document.addEventListener('mouseleave', () => {
  logo.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
});