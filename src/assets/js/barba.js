'use strict';

import barba from '@barba/core';
import gsap from 'gsap';
import { animationEnter, animationLeave } from './animations';

import { initSwipers } from './swiper';
import { initResponsiveMenu, initSetViewportHeight } from './responsive';
import { initAboutContainer, initAboutScrollAnchor, initAboutUrlCheck } from './about-container';
import { emailContactAnimation } from './emailContactAnimation';
import { animationScroll } from './animations/animationsScroll';
import { initCookies } from './cookies';

barba.hooks.once(() => {
    initCookies();
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
    initCookies();
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
})