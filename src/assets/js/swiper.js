// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const initSwipers = () => {
    const swiper = new Swiper('.firstSwiper', {
        // Optional parameters
        parallax: true,
        speed: 2000,
        direction: 'horizontal',
        loop: true,
        reverse: true,
        keyboard: true,
    
        effect: "fade",
    
        mousewheel: {
            forceToAxis: true,
            enabled: true,
        },
    
        autoplay: {
            delay: 10000,
        },
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: "bullets",
        },
    
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
    
    const secondSwiper = new Swiper('.carousel-3D-swiper', {
        loop: false,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
    
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: false
        },
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    
        breakpoints: {
            1040: {
                loop: false,
                effect: "coverflow",
                grabCursor: false,
                centeredSlides: false,
                slidesPerView: 3,
    
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 350,
                    modifier: 0,
                    slideShadows: false
                },
            }
        }
    });
}

// initSwipers();