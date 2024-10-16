'use strict';

import barba from '@barba/core';
import gsap from 'gsap';
import { animationEnter, animationLeave } from './animations';

import { initSwipers } from './swiper';
import { initResponsiveMenu } from './responsive';

barba.hooks.once(() => {
    console.log("once");
    initSwipers();
    initResponsiveMenu();
})

barba.hooks.after(() => {
    console.log("after");
    initSwipers();
    initResponsiveMenu();
})

barba.init({
    schema: {
        prefix: 'data-router',
    },
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
                initSwipers();
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