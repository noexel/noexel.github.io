let tg = window.Telegram.WebApp;

tg.expand()

const close_app = document.querySelector("#close-app");
close_app.addEventListener('click', function(){tg.close();});

