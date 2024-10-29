export const buttonPrivacy = () => {
console.log("Hola");

    const button = document.querySelector(".checkboxPrivacy");
    const cookieBackground = document.querySelectorAll(".cookieBackground");
    const mapsFooter = document.querySelector("#divMap");

    function createMapsIframe(src, title) {
        const iframe = document.createElement('iframe');

        iframe.src = src;
        iframe.title = title;
        iframe.frameBorder = "0";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.allowFullscreen = true;
        iframe.classList.add("w-full", "z-10", "shadow-xl", "rounded-3xl");
        iframe.style.border = "1px solid gray";
        iframe.style.width = "100%";
        iframe.style.height = "100%";

        return iframe;
    }

    if (document.cookie.includes("viewed_cookie_policy")) {
        button.checked = true;
    }

    button.addEventListener("click", () => {
        if (button.checked === true) {
            button.checked = true;

            document.cookie = "viewed_cookie_policy=ACCEPTED; path=/; max-age=" + 60 * 60 * 24 * 365 * 10;
            sessionStorage.removeItem("COOKIES")

            cookieBackground.forEach(element => {
                element.classList.add("hidden");
            });

            mapsFooter.appendChild(createMapsIframe("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.29915019311886!2d4.542581021718042!3d52.03976054622692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ce8b51db2aab%3A0x68f7bce1aeb98992!2sKruisweg%2014%2C%202665%20HC%20Bleiswijk%2C%20Pa%C3%ADses%20Bajos!5e0!3m2!1ses!2ses!4v1728495288642!5m2!1ses!2ses",
                "Google Maps"));
            
        } else {
            button.checked = false;

            document.cookie = "viewed_cookie_policy=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            sessionStorage.setItem("COOKIES", "REJECTED");

            window.location.reload();
        }
    })
};