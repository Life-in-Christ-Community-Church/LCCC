import gsap from "gsap";

const animationEnter = (container) => {
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    const firstDivBanner = container.querySelector("#firstDivBanner")
    const span = container.querySelectorAll("a.is-active span")
    const aSpan = container.querySelectorAll("a.is-active")

    const aboutContainer = container.querySelector("#containerAbout");

    const timeline = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });

    timeline
        .from(main, { autoAlpha: 0, clearProps: 'all' })
        .from(footer, { autoAlpha: 0, clearProps: 'all' }, "<")
        .from(firstDivBanner, { duration: 1.5, opacity: 0}, "<")
        .from(span, {opacity: 0, scaleX: 0,}, "<")
        .from(aSpan, { color: 'blue' }, "<")
        .from(aboutContainer, {opacity: 0, y: -10, duration: 1}, "<")

    return timeline;
}

export default animationEnter;
