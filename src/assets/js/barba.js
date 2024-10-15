'use strict';

import barba from '@barba/core';
import gsap from 'gsap';
import { animationEnter, animationLeave } from './animations';

const resetActiveLink = () => gsap.set('a-is-active span', {
    xPercent: -100,
    transformOrigin: 'left',
})

barba.init({
    schema: {
        prefix: 'data-router',
    },
    transitions: [
        {
            once({next}){
                resetActiveLink(); 
                animationEnter(next.container);
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                console.log("enter");
                animationEnter(next.container);
            },
        }
    ],
})