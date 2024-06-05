let tg1 = window.Telegram.WebApp;

tg1.BackButton.show();

let form_mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    form_mask.classList.add('hide');
    setTimeout(() => {
        form_mask.remove();
    }, 200);
});


tg1.onEvent('backButtonClicked', () => {
    history.back();
    tg1.BackButton.hide();
});

let username = document.querySelector('.nickname');

username.setAttribute('placeholder', `${tg1.initDataUnsafe.first_name}`);
