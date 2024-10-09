// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    parallax: true,
    // speed: 1000,
    direction: 'horizontal',
    // loop: true,
    reverse: true,
   
    effect: "fade",
    mousewheel: {
        forceToAxis: true,
        enabled: true,
    },
    
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});