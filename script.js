"use strict";


// SLIDER

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const autoSlide = function() {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  const progressLine = document.getElementById("progress-line");
  progressLine.style.transition = 'width 3s';
  progressLine.style.width = '100%';

  // Reset the progress line width after 3 seconds
  setTimeout(() => {
    progressLine.style.transition = 'none';
    progressLine.style.width = '0%';
  }, 10000);}
  
autoSlide()
setInterval(autoSlide, 10000);

// NAVBAR

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


// PRICING

const pricingSelector = document.querySelector('.pricing-selector')
const selector1Month = document.querySelector('.month-1')
const selector6Month = document.querySelector('.month-6')
const selector12Month = document.querySelector('.month-12')

const StandardPrice = document.querySelector('.price-standard')
const PremiumPrice = document.querySelector('.price-premium')

selector1Month.addEventListener('click', () => {
    if (selector1Month.classList.contains('pricing-selected')) return;

    if (selector6Month.classList.contains('pricing-selected')) {
        pricingSelector.style.left = '0.6rem'
        selector6Month.classList.remove('pricing-selected')
        selector1Month.classList.add('pricing-selected')
    }

    if (selector12Month.classList.contains('pricing-selected')) {
        pricingSelector.style.left = '0.6rem'
        selector12Month.classList.remove('pricing-selected')
        selector1Month.classList.add('pricing-selected')
    }

    pricingSelector.style.width = '9.1rem'
    pricingSelector.style.backgroundColor = '#e4b1b3';
        
    StandardPrice.innerHTML = '24.99$'
    PremiumPrice.innerHTML = '39.99$'

})

selector6Month.addEventListener('click', () => {
    if (selector6Month.classList.contains('pricing-selected')) return;

    pricingSelector.style.width

    if (selector1Month.classList.contains('pricing-selected')) {
        pricingSelector.style.left = '10.6rem'
        selector1Month.classList.remove('pricing-selected')
        selector6Month.classList.add('pricing-selected')
    }

    if (selector12Month.classList.contains('pricing-selected')) {
        pricingSelector.style.left = '10.6rem'
        selector12Month.classList.remove('pricing-selected')
        selector6Month.classList.add('pricing-selected')
    }

    pricingSelector.style.width = '9.8rem'
    pricingSelector.style.backgroundColor = '#df7376';

    StandardPrice.innerHTML = '22.99$'
    PremiumPrice.innerHTML = '37.99$'



})

selector12Month.addEventListener('click', () => {
    if (selector12Month.classList.contains('pricing-selected')) return;

    if (selector1Month.classList.contains('pricing-selected')) {
        pricingSelector.style.left = '21.6rem'
        selector1Month.classList.remove('pricing-selected')
        selector12Month.classList.add('pricing-selected')
    }

    if (selector6Month.classList.contains('pricing-selected')) {
        pricingSelector.style.left = '21.6rem'
        selector6Month.classList.remove('pricing-selected')
        selector12Month.classList.add('pricing-selected')
    }

    pricingSelector.style.width = '10.8rem'
    pricingSelector.style.backgroundColor = '#611068'

    StandardPrice.innerHTML = '19.99$'
    PremiumPrice.innerHTML = '34.99$'


})