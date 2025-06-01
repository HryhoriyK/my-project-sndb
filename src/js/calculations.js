import { cenyZaM2 } from "./ceny.js";

export function updateCena() {
    const lokalita = document.getElementById("lokalita").value;
    return cenyZaM2[lokalita] || 350;
}

export function calculateByt() {
    const m2 = document.getElementById("plochaByt").value;
    const lokalita = document.getElementById("lokalita").value;
    const cenaZaM2 = updateCena();
    
    const cenaSpravy = m2 * cenaZaM2 * 0.10;
    const najem = m2 * cenaZaM2;
    
    document.getElementById("vysledekByt").innerText = `Cena správy: ${cenaSpravy} Kč`;
    document.getElementById("najemByt").innerText = `Přibližná cena pronájmu: ${najem} Kč`;
}

export function calculateDum() {
    const pocetByt = document.getElementById("pocetByt").value;
    const pocetNebyt = document.getElementById("pocetNebyt").value;
    const m2 = document.getElementById("plochaDum").value;
    const lokalita = document.getElementById("lokalita").value;
    const cenaZaM2 = updateCena();
    
    const cenaSpravy = (pocetByt * 250) + (m2 * cenaZaM2 * 0.05);
    const najem = m2 * cenaZaM2;
    
    document.getElementById("vysledekDum").innerText = `Cena správy: ${cenaSpravy} Kč`;
    document.getElementById("najemDum").innerText = `Přibližná cena pronájmu: ${najem} Kč`;
}
