const POLL_URL = 'https://students.netoservices.ru/nestjs-backend/poll';
const titleEl = document.getElementById('poll__title');
const answersEl = document.getElementById('poll__answers');
async function loadPoll() {
    try {
        const response = await fetch(POLL_URL);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const poll = await response.json();
        renderPoll(poll);
    } catch (error) {
        console.error('Не удалось загрузить опрос:', error);
        titleEl.textContent = 'Не удалось загрузить опрос. Попробуйте позже.';
    }
}
function renderPoll(poll) {
    const { title, answers } = poll.data;
    titleEl.textContent = title;
    answersEl.innerHTML = '';
    answers.forEach((answerText) => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answerText;
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });
        answersEl.appendChild(button);
    });
}
loadPoll();