let tg = window.Telegram.WebApp;

tg.setHeaderColor('#fff');

tg.expand();
document.querySelector("#close-app").onclick = () => tg.close();
document.querySelector(".go-beta").onclick = () => tg.HapticFeedback.impactOccurred('soft');

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 200);
});
