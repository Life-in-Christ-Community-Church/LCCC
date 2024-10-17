export const initAboutContainer = () => {
    document.querySelectorAll("[id^='liAbout-']").forEach(li => {
        li.addEventListener('click', function(e) {
            document.querySelectorAll("[id^='liAbout-']").forEach(li => {
                li.classList.replace("bg-gray-100", "bg-gray-200")
            });

            this.classList.replace("bg-gray-200", "bg-gray-100");


            const targetId = this.getAttribute('id').substring(8);
            console.log(targetId);

            document.querySelectorAll("[id^='divAbout-']").forEach(div => {
                if (div.getAttribute("id").endsWith(targetId)) {
                    div.style.opacity = 1;
                } else {
                    div.style.opacity = 0;
                }
                
            })
        });
    });
}



export const initScrollAnchor = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            console.log("Scroll Anchor click")
            e.preventDefault();

            // Obtener el ID de la sección objetivo
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Desplazar el div que tiene overflow-y-scroll hacia el objetivo
            document.getElementsByClassName('scrollableDiv').scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
};


