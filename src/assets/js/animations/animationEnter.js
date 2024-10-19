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

    timeline
        .from(main, { autoAlpha: 0, clearProps: 'all' })
        .from(footer, { autoAlpha: 0, clearProps: 'all' }, "<")
        .from(firstDivBanner, { duration: 1.5, opacity: 0}, "<")
        .from(span, {opacity: 0, scaleX: 0,}, "<")
        .from(aSpan, { color: 'blue' }, "<")
        .from(aboutContainer, {opacity: 0, y: -10, duration: 1}, "<")
        .from(construction, {opacity: 0, y: -10, duration: 1}, "<")
        .from(divLeaders, {opacity: 0, y: -10, duration: 1}, "<")
        .from(leaderPicture, {opacity: 0, duration: 0.5}, "<")
        .from(leaderName, {opacity: 0, x: 30, duration: 1}, "<")
        .from(leaderMinistry, {opacity: 0, x: 30, duration: 1.5}, "<")
        

    return timeline;
}

export default animationEnter;
