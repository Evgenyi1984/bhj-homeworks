const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const valute = data.response.Valute;
        for (const key in valute) {
            
            const currency = valute[key];

            const item = document.createElement('div');
            item.className = 'item';

            const code = document.createElement('div');
            code.className = 'item__code';
            code.textContent = currency.CharCode;

            const value = document.createElement('div');
            value.className = 'item__value';
            value.textContent = currency.Value;

            const curr = document.createElement('div');
            curr.className = 'item__currency';
            curr.textContent = 'руб.';

            item.append(code, value, curr);
            items.append(item);
        }
        
        loader.classList.remove('loader_active');
    }
});

xhr.send();