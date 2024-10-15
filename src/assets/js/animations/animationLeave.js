import gsap from "gsap";

const animationLeave = (container) => {
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    const sectionBanner = container.querySelector("#sectionBanner")
    
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

    
    timeline
        .to(main, { autoAlpha: 0, clearProps: 'all' })
        .to(footer, { autoAlpha: 0, clearProps: 'all' }, "<") 
        .to(sectionBanner, {y: -500, clearProps: 'all', autoAlpha: 1}, "<");

    return timeline;
}

export default animationLeave;
