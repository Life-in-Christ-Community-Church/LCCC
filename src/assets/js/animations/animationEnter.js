import gsap from "gsap";

const animationEnter = (container) => {
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    const firstDivBanner = container.querySelector("#firstDivBanner")
    const span = container.querySelector("a.is-active span")

    const timeline = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });

    timeline
        .from(main, { autoAlpha: 0, clearProps: 'all' })
        .from(footer, { autoAlpha: 0, clearProps: 'all' }, "<")
        .from(firstDivBanner, { x: 100, y: -50, duration: 1, opacity: 0}, "<")
        .from(span, {opacity: 0, scaleX: 0}, "<")

    return timeline;
}

export default animationEnter;
