const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');
fontSizes.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document
      .querySelector('.font-size_active')
      .classList.remove('font-size_active');
    link.classList.add('font-size_active');
    book.classList.remove('book_fs-big', 'book_fs-small');
    const size = link.dataset.size;
    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
    });
});