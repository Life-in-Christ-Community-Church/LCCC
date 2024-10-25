'use strict';

import barba from '@barba/core';
import gsap from 'gsap';
import { animationEnter, animationLeave } from './animations';

import { initSwipers } from './swiper';
import { initResponsiveMenu, initSetViewportHeight } from './responsive';
import { initAboutContainer, initAboutScrollAnchor, initAboutUrlCheck } from './about-container';
import { emailContactAnimation } from './emailContactAnimation';
import { animationScroll } from './animations/animationsScroll';

barba.hooks.once(() => {
    initSwipers();
    initResponsiveMenu();
    initAboutScrollAnchor();
    initAboutContainer();
    initAboutUrlCheck();
    initSetViewportHeight();
    emailContactAnimation();
    animationScroll();
})

barba.hooks.after(() => {
    initSwipers();
    initResponsiveMenu();
    initAboutScrollAnchor();
    initAboutContainer();
    initAboutUrlCheck();
    initSetViewportHeight();
    emailContactAnimation();
    animationScroll();
})

barba.init({
    preventRunning: true,
    schema: {
        prefix: 'data-router',
    },
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
                // initSwipers();
                initResponsiveMenu();
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                animationEnter(next.container);
                window.scrollTo(0, 0)
            },
        }
    ],
    views: [

    ]
})