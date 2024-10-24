// responsive.js

export const initResponsiveMenu = () => {
    const menuListButton = document.querySelector("#menuListButton")?.classList;
    const divMenuList = document.querySelector("#divMenuList")?.classList;

    document.querySelector("#menuListButton").addEventListener('click', () => {
        if (menuListButton.contains("open")) {
            // Si el menú está abierto, revertir el rotate primero
            document.querySelector(".line1").classList.toggle('rotate1');
            document.querySelector(".line2").classList.toggle('rotate2');
            document.querySelector(".line3").classList.toggle('rotate3');
            divMenuList.toggle("active");

            // Luego de un delay, revertir el translate
            setTimeout(() => {
                menuListButton.toggle("open");
            }, 300); // Delay para hacer primero el rotate y luego el translate al cerrar
        } else {
            // Si el menú está cerrado, primero activar el translate y luego el rotate
            divMenuList.toggle("active");
            menuListButton.toggle("open");

            setTimeout(() => {
                document.querySelector(".line1").classList.toggle('rotate1');
                document.querySelector(".line2").classList.toggle('rotate2');
                document.querySelector(".line3").classList.toggle('rotate3');
            }, 300); // Delay para hacer primero el translate y luego el rotate al abrir
        }
    });

    document.querySelector(".hiddenNavBar").addEventListener('click', () => {
        divMenuList.remove("active");
    })

    document.querySelector("#logoChurchBanner").addEventListener('click', () => {
        divMenuList.remove("active");
    })

    const menuItems = document.querySelectorAll(".liHiddenMenu");

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log("li Clicked");
            divMenuList.toggle("active");
            menuListButton.toggle("open");
        });
    });
};

initResponsiveMenu();


export const initSetViewportHeight = () => {
    const sectionBanner = document.querySelector('#sectionBanner');
    const divBanner = document.querySelector('#divBanner');

    if (sectionBanner && divBanner) {
        const heightAfterRendering = sectionBanner.getBoundingClientRect().height;
    
        sectionBanner.style.height = `${heightAfterRendering}px`;
        divBanner.style.height = `${heightAfterRendering}px`;
    }

};

initSetViewportHeight();