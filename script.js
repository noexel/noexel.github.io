let tg = window.Telegram.WebApp;

tg.expand();
document.querySelector("#close-app").onclick = () => tg.close();

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 200);
});
