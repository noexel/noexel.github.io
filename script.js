let tg = window.Telegram.WebApp;

tg.setHeaderColor('#fff');

tg.expand();

tg.BackButton.hide();

document.querySelector("#close-app").onclick = () => tg.close();

document.querySelector(".go-beta").onclick = () => location.href = 'form.html';



let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 200);
});

