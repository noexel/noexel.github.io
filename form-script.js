let tg1 = window.Telegram.WebApp;

tg1.BackButton.show();

let form_mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    form_mask.classList.add('hide');
    setTimeout(() => {
        form_mask.remove();
    }, 200);
});


document.querySelector(".go-beta").onclick = () => location.href = 'form.html';
tg1.onEvent('backButtonClicked') = () => history.back();
