let tg = window.Telegram.WebApp;

tg.expand()

document.querySelector("#close-app").onclick = tg.close();

