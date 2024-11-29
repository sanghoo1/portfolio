//하단 gnb 바운싱 효과

const gnb = document.querySelector('.gnb');
const mainAbout = document.querySelector('.main-about');
const footer = document.querySelector('footer');

function updateGnbVisibility() {
  const mainAboutRect = mainAbout.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();

  // `main-about` 영역에 들어오면 `.gnb`를 보이게 함
  const isAboveMainAbout = mainAboutRect.top < window.innerHeight && mainAboutRect.bottom > 0;

  // `footer` 영역에 들어가면 `.gnb`를 숨김
  const isAboveFooter = footerRect.top > window.innerHeight;

  if (isAboveMainAbout && isAboveFooter) {
    gnb.classList.remove('hidden');
    gnb.classList.add('visible');
  } else {
    gnb.classList.remove('visible');
    gnb.classList.add('hidden');
  }
}

// 초기 상태 확인
updateGnbVisibility();

// 스크롤 이벤트에 따라 상태 업데이트
window.addEventListener('scroll', updateGnbVisibility);