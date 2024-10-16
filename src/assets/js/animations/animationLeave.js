import gsap from "gsap";

const animationLeave = (container) => {
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    console.log(footer);
    const sectionBanner = container.querySelector("#sectionBanner")
    const span = container.querySelectorAll("a.is-active span")
    
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

    
    timeline
        .to(main, { autoAlpha: 0, clearProps: 'all' })
        .to(footer, { autoAlpha: 0, clearProps: 'all' }, "<") 
        .to(span, {opacity: 0, scaleX: 0}, "<")

    return timeline;
}

export default animationLeave;
