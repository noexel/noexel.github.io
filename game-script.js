let tg2 = window.Telegram.WebApp;
tg2.setHeaderColor('#fff');
tg2.BackButton.hide();


let game_mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    game_mask.classList.add('hide')
});
