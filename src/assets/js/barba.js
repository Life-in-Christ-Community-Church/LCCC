// 'use strict';

// import barba from '@barba/core';
// import gsap from 'gsap';
// import { animationEnter, animationLeave } from './animations';

// import { initSwipers } from './swiper';
// import { initResponsiveMenu } from './responsive';
// import { initAboutContainer, initAboutScrollAnchor, initAboutUrlCheck } from './about-container';

// barba.hooks.once(() => {
//     console.log("once");
//     initSwipers();
//     initResponsiveMenu();
//     initAboutScrollAnchor();
//     initAboutContainer();
//     initAboutUrlCheck();
// })

// barba.hooks.after(() => {
//     console.log("after");
//     initSwipers();
//     initResponsiveMenu();
//     initAboutScrollAnchor();
//     initAboutContainer();
//     initAboutUrlCheck();
// })

// barba.init({
//     preventRunning: true,
//     schema: {
//         prefix: 'data-router',
//     },
//     transitions: [
//         {
//             once({next}){
//                 animationEnter(next.container);
//                 console.log("ONCE TRANSITION")
//                 // initSwipers();
//                 initResponsiveMenu();
//             },
//             leave: ({current}) => animationLeave(current.container),
//             enter({next}){
//                 console.log("ENTER TRANSITION")
//                 animationEnter(next.container);
//                 window.scrollTo(0, 0)
//             },
//         }
//     ],
//     views: [

//     ]
// })