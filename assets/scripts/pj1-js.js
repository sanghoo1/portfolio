//프로젝트 마우스 오버 이벤트 스크립트
const cursorElement = document.querySelector('.cursor');
const backgroundElements = document.querySelectorAll('.front');
let cursorTimeout;

// Start with the cursor hidden off-screen
cursorElement.style.display = 'none';
cursorElement.style.left = '-1000px'; // Position off-screen

backgroundElements.forEach(background => {
  background.addEventListener('mouseenter', () => {
    // Delay the cursor visibility by 0.3 seconds
    cursorTimeout = setTimeout(() => {
      cursorElement.style.display = 'flex'; // Show the cursor after delay
      cursorElement.style.width = '60px'; // Start very small
      cursorElement.style.height = '60px';
      cursorElement.style.fontSize = '0'; // No text initially

      // Delay briefly to start with a small circle
      setTimeout(() => {
        cursorElement.style.width = '150px'; // Grow to full size
        cursorElement.style.height = '150px';
        cursorElement.style.fontSize = '20px'; // Show text at full size

        // Shrink slightly for the spring effect, with a slower transition
        setTimeout(() => {
          cursorElement.style.transition = 'width 0.2s ease, height 0.2s ease'; // Slow down transition
          cursorElement.style.width = '140px';
          cursorElement.style.height = '140px';
        }, 300); // Delay for slower shrink after full growth

      }, 50); // Initial delay for small circle effect
    }, 300); // 0.3s delay before cursor becomes visible
  });

  background.addEventListener('mousemove', (e) => {
    cursorElement.style.left = `${e.pageX}px`;
    cursorElement.style.top = `${e.pageY}px`;
    cursorElement.style.transform = 'translate(-50%, -50%)'; // Center the cursor
  });

  background.addEventListener('mouseleave', () => {
    clearTimeout(cursorTimeout); // Cancel visibility delay if mouse leaves early
    cursorElement.style.display = 'none'; // Hide cursor when leaving card
    cursorElement.style.width = '60px'; // Reset size
    cursorElement.style.height = '60px';
    cursorElement.style.fontSize = '0'; // Hide text
    cursorElement.style.transition = 'width 0.3s ease, height 0.3s ease'; // Reset transition speed
  });
});