let tg = window.Telegram.WebApp;

tg.setHeaderColor('#000');

tg.expand();

document.querySelector("#close-app").onclick = () => tg.HapticFeedback.selectionChanged();
document.querySelector("#close-app").onclick = () => tg.close();

document.querySelector(".go-beta").onclick = () => tg.HapticFeedback.selectionChanged();
document.querySelector(".go-beta").onclick = () => location.href = 'form.html';
document.querySelector(".go-beta").onclick = () => tg.BackButton.show();


let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 200);
});

