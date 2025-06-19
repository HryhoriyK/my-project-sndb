import { showForm } from "./js/form.js";
import { calculateByt, calculateDum } from "./js/calculations.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnByt").addEventListener("click", () => showForm('byt'));
    document.getElementById("btnDum").addEventListener("click", () => calculateDum());
});

document.querySelector(".header-logo").addEventListener("click", (event) => {
    event.preventDefault(); // Zabraň přesměrování, pokud je to odkaz
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Plynulý efekt posouvání
    });
});

window.showForm = showForm;
window.calculateByt = calculateByt;
window.calculateDum = calculateDum;

    const burgerBtn = document.querySelector('[data-menu-open]');
    const menu = document.querySelector('[data-menu]');
    const closeBtn = document.querySelector('[data-menu-close]');
    const navLinks = document.querySelectorAll('.mobile-menu-nav .link');

    burgerBtn.addEventListener('click', () => {
        menu.classList.add('is-open');
        document.body.classList.add('menu-open');
    });
    
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
        const menu = document.querySelector('[data-menu]');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        });
    });






