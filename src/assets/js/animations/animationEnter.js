import gsap from "gsap";

const animationEnter = (container) => {
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");


    const timeline = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });

    timeline
        .from(main, { autoAlpha: 0, clearProps: 'all' })
        .from(footer, { autoAlpha: 0, clearProps: 'all' }, "<")  

    return timeline;
}

export default animationEnter;
