import { showForm } from "./js/form.js";
import { calculateByt, calculateDum } from "./js/calculations.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnByt").addEventListener("click", () => showForm('byt'));
    document.getElementById("btnDum").addEventListener("click", () => calculateDum());
});

window.showForm = showForm;
window.calculateByt = calculateByt;
window.calculateDum = calculateDum;





