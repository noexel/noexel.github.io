let tg = window.Telegram.WebApp;
tg.bg_color = '#000000';
tg.expand();

document.querySelector("#close-app").onclick = () => tg.close();
