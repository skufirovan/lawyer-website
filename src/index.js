import { animateNumbers } from "./scripts/AnimateNumbers";
import { submitForm } from "./scripts/Form";
import { isElementInViewport } from "./scripts/utilis";

// Splash Screen
const header = document.querySelector('.header');
const splash = document.querySelector('.splash');

header.style.display = 'none';
setTimeout(() => {
    splash.classList.add('splash_animated');
    header.style.display = 'block';
}, 2000);


// Работа дропдауна
const body = document.querySelector('.page');
const dropdown = document.querySelector('.header__dropdown');
const headerNavigation = document.querySelector('.header__menu');
const headerNavigationItems = document.querySelectorAll('.header__menu-item');

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

// Отправка формы
const form = document.forms['form-contacts'];
const submitButton = form.querySelector('.form__submit');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    submitButton.disabled = true;
    submitButton.classList.add('form__submit_disabled');

    const userData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    };

    submitForm(userData)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                  throw new Error(err.message);
                });
              }
        })
        .catch(error => {
            alert(error.message);
        })
        .finally(() => {
            form.reset();
            submitButton.removeAttribute('disabled');
            submitButton.classList.remove('form__submit_disabled');
        });
})
