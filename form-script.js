let tg1 = window.Telegram.WebApp;

let username = document.querySelector('.nickname');
username.setAttribute('value', `${tg1.initDataUnsafe.user.first_name}`);

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


document.addEventListener("keydown", function(e) {
if (e.keyCode == 13) {
username.blur();}
});
