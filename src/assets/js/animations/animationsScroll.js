import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const animationScroll = () => {
    const sectionNews = document.querySelector("#sectionNews");
    const divSectionNews = document.querySelector("#divSectionNews");
    const div1 = document.querySelector("#section2Slide1");
    const div2 = document.querySelector("#section2Slide2");
    const div3 = document.querySelector("#section2Slide3");

    gsap.registerPlugin(ScrollTrigger)

    if (!/Android|iPhone/i.test(navigator.userAgent)) {
        if (div1) {
            gsap.from(div1, {
                scrollTrigger: {
                    trigger: sectionNews,
                    scrub: true,
                    end: "top 200px",
                },
                y: 50,
                duration: 1,
            })
        }
        if (div2) {
            gsap.from(div2, {
                scrollTrigger: {
                    trigger: sectionNews,
                    scrub: true,
                    end: "top 200px",
                },
                y: 100,  // Puedes cambiar esto a cualquier dirección u opción que desees
                duration: 1,
            });
        }
        if (div3) {
            gsap.from(div3, {
                scrollTrigger: {
                    trigger: sectionNews,
                    scrub: true,
                    end: "top 200px",
                },
                y: 150,  // Puedes cambiar esto a cualquier dirección u opción que desees
                duration: 1,
            });
        }
    }

}