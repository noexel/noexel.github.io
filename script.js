let tg = window.Telegram.WebApp;

tg.secondary_bg_color = '#000000';
tg.expand();

document.querySelector("#close-app").onclick = () => tg.impactOccurred('soft');
document.querySelector("#close-app").onclick = () => tg.close();

