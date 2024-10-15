'use strict';

import barba from '@barba/core';
import gsap from 'gsap';
import { animationEnter, animationLeave } from './animations';


barba.init({
    schema: {
        prefix: 'data-router',
    },
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                console.log("enter");
                animationEnter(next.container);
                window.scrollTo(0, 0)
            },
        }
    ],
})