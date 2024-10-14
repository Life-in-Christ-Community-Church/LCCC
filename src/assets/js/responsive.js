'use strict'

// NavBar Hidden Mobile Menu
const menuListButton = document.querySelector("#menuListButton").classList;
const divMenuList = document.querySelector("#divMenuList").classList

document.querySelector("#menuListButton").addEventListener('click', () => {
    console.log("CLICK");
    divMenuList.toggle("active");
    menuListButton.toggle("open");
})