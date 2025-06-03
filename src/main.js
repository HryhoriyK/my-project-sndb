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





