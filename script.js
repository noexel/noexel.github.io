let tg = window.Telegram.WebApp;

tg.setHeaderColor('#ffffff');

tg.expand();
document.querySelector("#close-app").onclick = () => tg.close(), tg.HapticFeedback.selectionChanged();
document.querySelector(".go-beta").onclick = () => tg.HapticFeedback.selectionChanged();

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 200);
});
