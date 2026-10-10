const revealElements = document.querySelectorAll('.reveal');
function checkReveal() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            element.classList.add('reveal_active');
        }
    });
}
checkReveal();
window.addEventListener('scroll', checkReveal);
window.addEventListener('resize', checkReveal);