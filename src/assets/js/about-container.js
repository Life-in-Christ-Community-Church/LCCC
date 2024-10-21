export const initAboutContainer = () => {
    document.querySelectorAll("[id^='liAbout-']").forEach(li => {
        li.addEventListener('click', function (e) {
            document.querySelectorAll("[id^='liAbout-']").forEach(li => {
                li.classList.replace("bg-gray-100", "bg-gray-200")
            });

            this.classList.replace("bg-gray-200", "bg-gray-100");


            const targetId = this.getAttribute('id').substring(8);
            console.log(targetId);

            document.querySelectorAll("[id^='divAbout-']").forEach(div => {
                if (div.getAttribute("id").endsWith(targetId)) {
                    div.classList.replace("invisible", "visible");
                    div.style.opacity = 1;
                } else {
                    div.style.opacity = 0;
                    div.classList.replace("visible", "invisible");
                }

            })

            if (this.getAttribute("id") === "liAbout-3") {
                document.querySelector(".scrollableDivJs").scrollTo(0,0);
            }
        });
    });
}

export const initAboutScrollAnchor = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            console.log("Scroll Anchor click")
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            document.querySelector('.scrollableDivJs').scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
};

export const initAboutUrlCheck = () => {
    const hash = window.location.hash;
    console.log(hash)
    if (hash === "") {
        document.querySelectorAll("[id^='liAbout-']").forEach(li => {
            li.classList.replace("bg-gray-100", "bg-gray-200");
            document.querySelector("#liAbout-1").classList.replace("bg-gray-200", "bg-gray-100");
        })
        document.querySelectorAll("[id^='divAbout-']").forEach(div => {
            div.style.opacity = 0;
            document.querySelector("#divAbout-1").classList.replace("invisible", "visible");
            document.querySelector("#divAbout-1").style.opacity = 1;
        })
    }
    if (hash === "#church") {
        document.querySelectorAll("[id^='liAbout-']").forEach(li => {
            li.classList.replace("bg-gray-100", "bg-gray-200");
            document.querySelector("#liAbout-1").classList.replace("bg-gray-200", "bg-gray-100");
        })
        document.querySelectorAll("[id^='divAbout-']").forEach(div => {
            div.style.opacity = 0;
            document.querySelector("#divAbout-1").classList.replace("invisible", "visible");
            document.querySelector("#divAbout-1").style.opacity = 1;
        })
    }
    if (hash === "#mision") {
        document.querySelectorAll("[id^='liAbout-']").forEach(li => {
            li.classList.replace("bg-gray-100", "bg-gray-200");
            document.querySelector("#liAbout-2").classList.replace("bg-gray-200", "bg-gray-100");
        })
        document.querySelectorAll("[id^='divAbout-']").forEach(div => {
            div.style.opacity = 0;
            document.querySelector("#divAbout-2").classList.replace("invisible", "visible");
            document.querySelector("#divAbout-2").style.opacity = 1;
        })
    }
    if (hash === "#beliefs") {
        document.querySelectorAll("[id^='liAbout-']").forEach(li => {
            li.classList.replace("bg-gray-100", "bg-gray-200");
            document.querySelector("#liAbout-3").classList.replace("bg-gray-200", "bg-gray-100");
        })
        document.querySelectorAll("[id^='divAbout-']").forEach(div => {
            div.style.opacity = 0;
            document.querySelector("#divAbout-3").classList.replace("invisible", "visible");
            document.querySelector("#divAbout-3").style.opacity = 1;
        })
        document.querySelector(".scrollableDivJs").scrollTo(0,0);
    }
    if (hash === "#confession") {
        document.querySelectorAll("[id^='liAbout-']").forEach(li => {
            li.classList.replace("bg-gray-100", "bg-gray-200");
            document.querySelector("#liAbout-4").classList.replace("bg-gray-200", "bg-gray-100");
        })
        document.querySelectorAll("[id^='divAbout-']").forEach(div => {
            div.style.opacity = 0;
            document.querySelector("#divAbout-4").classList.replace("invisible", "visible");
            document.querySelector("#divAbout-4").style.opacity = 1;
        })
    }
    if (hash === "#schedule") {
        document.querySelectorAll("[id^='liAbout-']").forEach(li => {
            li.classList.replace("bg-gray-100", "bg-gray-200");
            document.querySelector("#liAbout-5").classList.replace("bg-gray-200", "bg-gray-100");
        })
        document.querySelectorAll("[id^='divAbout-']").forEach(div => {
            div.style.opacity = 0;
            document.querySelector("#divAbout-5").classList.replace("invisible", "visible");
            document.querySelector("#divAbout-5").style.opacity = 1;
        })
    }
} 
