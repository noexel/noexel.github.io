let tg = window.Telegram.WebApp;
secondary_bg_color = '#000000';
tg.expand();

document.querySelector("#close-app").onclick = () => tg.close();
