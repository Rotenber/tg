document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Расширяем на весь экран

    // Получаем данные пользователя
    const userInfo = document.getElementById("user-info");
    userInfo.innerHTML = `Привет, ${tg.initDataUnsafe.user?.first_name || "гость"}!`;

    // Закрываем Web App
    document.getElementById("close").addEventListener("click", () => {
        tg.close();
    });
});
