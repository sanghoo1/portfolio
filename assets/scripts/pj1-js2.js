
// 회전 텍스트 오버레이 애니메이션 설정
const hoverItems = document.querySelectorAll('.global-menu li a');

hoverItems.forEach(item => {
  item.addEventListener('mouseenter', (event) => {
    const text = item.getAttribute('data-cursor-text') || "Hover Text";
    const repeatCount = parseInt(item.getAttribute('data-cursor-text-repeat')) || 4; // 기본 반복 횟수를 4로 설정

    // Create the overlay element for the cursor effect
    const overlay = document.createElement('div');
    overlay.classList.add('hover-text-overlay');

    // Create the rotating text element inside the overlay
    const rotatingText = document.createElement('div');
    rotatingText.classList.add('rotating-text');
    rotatingText.style.fontSize = "12px"; // 텍스트 크기를 12px로 설정
    rotatingText.style.letterSpacing = "2px"; // 텍스트 간격 조정으로 균일한 배치
    rotatingText.textContent = (text + " ").repeat(repeatCount); // 텍스트를 반복해서 원형에 채우기

    // Create a centered circle element
    const centerCircle = document.createElement('div');
    centerCircle.classList.add('center-circle');

    // Append rotating text and center circle to the overlay
    overlay.appendChild(centerCircle);
    overlay.appendChild(rotatingText);
    document.body.appendChild(overlay);

    // Apply circular text effect to the inner rotating text with radius 50
    new CircleType(rotatingText).radius(50); // 반지름을 50으로 유지

    // Animate rotation on the rotating text at a slower speed
    gsap.to(rotatingText, {
      rotation: 360,
      duration: 10,
      ease: "linear",
      repeat: -1 // Infinite rotation
    });

    // Position overlay slightly offset from cursor
    const followCursor = (e) => {
      overlay.style.left = `${e.clientX + 20}px`;
      overlay.style.top = `${e.clientY + 20}px`;
    };

    // Attach the `mousemove` event to follow the cursor
    document.addEventListener('mousemove', followCursor);

    // 커서 효과 애니메이션 (크기 및 불투명도)
    gsap.fromTo(
      overlay,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: 'power1.out' }
    );

    // Clean up on mouse leave
    item.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', followCursor);

      // 크기 변경 없이 불투명도만 0으로 서서히 사라지기
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.in',
        onComplete: () => overlay.remove()
      });
    }, { once: true });
  });
});