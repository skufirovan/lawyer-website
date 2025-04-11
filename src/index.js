// import { splashScreen } from "./scripts/SplashScreen";
import { animateNumbers } from "./scripts/AnimateNumbers";
import { isElementInViewport } from "./scripts/utilis";

const body = document.querySelector('.page');
const header = document.querySelector('.header');
const splash = document.querySelector('.splash');
const dropdown = document.querySelector('.header__dropdown');
const headerNavigation = document.querySelector('.header__menu');
const headerNavigationItems = document.querySelectorAll('.header__menu-item');

// Splash Screen
header.style.display = 'none';
setTimeout(() => {
    splash.classList.add('splash_animated');
    header.style.display = 'block';
}, 2000);


// Работа дропдауна
dropdown.addEventListener('click', () => {
    if (!headerNavigation.classList.contains('header__menu_active')) {
        headerNavigation.classList.add('header__menu_active');
        dropdown.classList.add('header__dropdown_active');
        body.style.position = 'fixed'
    } else {
        headerNavigation.classList.remove('header__menu_active');
        dropdown.classList.remove('header__dropdown_active');
        body.style.position = 'static'
    }
});

headerNavigationItems.forEach((link) => {
    link.addEventListener('click', () => {
        if (headerNavigation.classList.contains('header__menu_active')) {
            headerNavigation.classList.remove('header__menu_active');
            dropdown.classList.remove('header__dropdown_active');
            body.style.position = 'static'
        }
    })
});


// Анимация чисел в разделе услуг
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stats__item-number');
    const statsSection = document.querySelector('.stats');
    let animationStarted = false;

    const scrollHandler = () => {
        if (isElementInViewport(statsSection) && !animationStarted) {
            animateNumbers(statNumbers);
            animationStarted = true;
        }
    };

    window.addEventListener('scroll', scrollHandler);

    scrollHandler(statsSection);
});
