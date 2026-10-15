const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const file = fileInput.files[0];
    if (!file) {
        alert('Выберите файл');
        return;
    }
    const formData = new FormData();
    formData.append('file', file);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            // e.loaded / e.total даёт значение от 0 до 1
            progress.value = e.loaded / e.total;
        }
    });
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Успешно:', xhr.responseText);
        } else {
            console.error('Ошибка сервера:', xhr.status, xhr.responseText);
        }
    });
    xhr.addEventListener('error', () => {
        console.error('Ошибка сети');
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});