const rotators = document.querySelectorAll('.rotator');
function startRotator(rotator, delay = 1000) {
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentIndex = 0;
  cases.forEach((item, index) => {
    if (item.classList.contains('rotator__case_active')) {
      currentIndex = index;
    }
  });
  setInterval(() => {
    cases[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % cases.length;
    cases[currentIndex].classList.add('rotator__case_active');
  }, delay);
}
rotators.forEach((rotator) => startRotator(rotator, 1000));