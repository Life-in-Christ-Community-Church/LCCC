import gsap from "gsap";

const animationEnter = (container) => {
    // Global Menu animations
    const span = container.querySelectorAll("a.is-active span")
    const aSpan = container.querySelectorAll("a.is-active")

    // Global page transition
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    const firstDivBanner = container.querySelector("#firstDivBanner")

    // About animations
    const aboutContainer = container.querySelector("#containerAbout")

    // Leaders animations
    const divLeaders = container.querySelector("#divLeaders")
    const leaderPicture = container.querySelector("#leaderPicture")
    const leaderName = container.querySelector("#leaderName")
    const leaderMinistry = container.querySelector("#leaderMinistry")

    // Under construction animations
    const construction = container.querySelector(".underConstruction")



    const timeline = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });

    const animate = (target, props, position) => {
        try {
            if (target) {
                timeline.from(target, { ...props }, position);
            }
        } catch (error) {
            console.warn("No se pudo realizar la animación para el elemento:", target, error);
        }
    };

    // Añadir animaciones
    animate(main, { autoAlpha: 0, clearProps: 'all' }, "<");
    animate(footer, { autoAlpha: 0, clearProps: 'all' }, "<");
    animate(firstDivBanner, { duration: 1, opacity: 0 }, "<");
    animate(span, { opacity: 0, scaleX: 0 }, "<");
    animate(aSpan, { color: 'blue' }, "<");
    animate(aboutContainer, { opacity: 0, y: -10, duration: 1 }, "<");
    animate(construction, { opacity: 0, y: -10, duration: 1 }, "<");
    animate(divLeaders, { opacity: 0, y: -10, duration: 1 }, "<");
    animate(leaderPicture, { opacity: 0, duration: 1 }, "<");
    animate(leaderName, { opacity: 0, x: 30, duration: 1 }, "<");
    animate(leaderMinistry, { opacity: 0, x: 30, duration: 1.5 }, "<");
        

    return timeline;
}

export default animationEnter;
