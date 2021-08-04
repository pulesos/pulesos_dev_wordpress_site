window.addEventListener('click', () => {
    let btns = document.querySelectorAll('.promo_btn'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.modal_close');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});