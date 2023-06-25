"use strict";

const navmenu_opener = document.querySelector(".hamburger-menu-opener");
const navmenu_content = document.querySelector(".hamburger-menu-content");
const navmenu_open_icon = document.querySelector('.hamburger-icon')
const login_register = document.querySelector('.login-register')

const nav_items = document.querySelector('.nav-items')

let menuOpen = false;
let buttonDisabled = false;

navmenu_opener.addEventListener('click', () => {
    if (buttonDisabled) return

    if (!menuOpen) {
        Object.assign(navmenu_content.style, {
            width: '90rem',
            animation: 'none',
        });
        navmenu_open_icon.style.transform = `rotate(-135deg)`;

        setTimeout(() => {
            nav_items.style.opacity = '1'
            nav_items.style.visibility = 'visible'
            login_register.style.opacity = '1'
            login_register.style.visibility = 'visible'
        }, 250);

        menuOpen = true;
    } else {
        menuOpen = false;
        Object.assign(navmenu_open_icon.style, {
            opacity: '1'
        })
        nav_items.style.opacity = '0'
        nav_items.style.visibility = 'hidden'
        login_register.style.opacity = '0'
        login_register.style.visibility = 'hidden'

        setTimeout(() => {
            Object.assign(navmenu_content.style, {
                width: '',
            });             
        }, 250);

        navmenu_open_icon.style.transform = `rotate(0deg)`;

    } 

    buttonDisabled = true;
    setTimeout(() => {
      buttonDisabled = false;
    }, 250);

});
