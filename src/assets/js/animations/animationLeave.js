import gsap from "gsap";

const animationLeave = (container) => {
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    const sectionBanner = container.querySelector("#sectionBanner");
    const span = container.querySelectorAll("span.is-active span");

    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

    const animate = (target, props, position) => {
        if (target && target.length !== 0) { 
            timeline.to(target, { ...props }, position);
        }
    };

    // Añadir animaciones
    animate(main, { autoAlpha: 0, clearProps: 'all' });
    animate(footer, { autoAlpha: 0, clearProps: 'all' }, "<");
    animate(span, { opacity: 0, scaleX: 0 }, "<");

    return timeline;
};

export default animationLeave;
