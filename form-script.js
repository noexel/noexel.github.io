let tg1 = window.Telegram.WebApp;


let form_mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    form_mask.classList.add('hide');
    setTimeout(() => {
        form_mask.remove();
    }, 200);
});

tg1.onEvent('backButtonClicked', location.herf = 'index.html')