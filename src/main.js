const cenyZaM2 = {
    "Praha 1": 492,
    "Praha 2": 470,
    "Praha 3": 460,
    "Praha 4": 418,
    "Praha 5": 433,
    "Praha 6": 417,
    "Praha 7": 441,
    "Praha 8": 417,
    "Praha 9": 421,
    "Praha 10": 405
};

function showForm(type) {
    const container = document.getElementById("formContainer");
    container.innerHTML = "";

    if (type === "byt") {
        container.innerHTML = `
            <label class="input-text">Lokalita: </label>
            <select class="input-area" id="lokalita" onchange="updateCena()">
                ${Object.keys(cenyZaM2).map(lokalita => `<option value="${lokalita}">${lokalita}</option>`).join("")}
            </select><br>
            <label class="input-text">Zadej m²: </label>
            <input class="input-area" type="number" id="plochaByt"><br>
            <button class="btn-count" onclick="calculateByt()">Vypočítat cenu</button>
            <p class="result" id="vysledekByt"></p>
            <p class="result" id="najemByt"></p>
        `;
    } else if (type === "dum") {
        container.innerHTML = `
            <label class="input-text">Lokalita: </label>
            <select class="input-area" id="lokalita" onchange="updateCena()">
                ${Object.keys(cenyZaM2).map(lokalita => `<option value="${lokalita}">${lokalita}</option>`).join("")}
            </select><br>
            <label class="input-text">Počet bytových jednotek: </label>
            <input class="input-area" type="number" id="pocetByt"><br>
            <label class="input-text">Počet nebytových jednotek: </label>
            <input class="input-area" type="number" id="pocetNebyt"><br>
            <label class="input-text">Celková plocha (m²): </label>
            <input class="input-area" type="number" id="plochaDum"><br>
            <button class="btn-count" onclick="calculateDum()">Vypočítat cenu</button>
            <p class="result" id="vysledekDum"></p>
            <p class="result" id="najemDum"></p>
        `;
    }
}

function updateCena() {
    const lokalita = document.getElementById("lokalita").value;
    return cenyZaM2[lokalita] || 350;
}

function calculateByt() {
    const m2 = document.getElementById("plochaByt").value;
    const lokalita = document.getElementById("lokalita").value;
    const cenaZaM2 = updateCena();
    const cenaSpravy = m2 * cenaZaM2 * 0.10;
    const najem = m2 * cenaZaM2;
    document.getElementById("vysledekByt").innerText = `Cena správy: ${cenaSpravy} Kč`;
    document.getElementById("najemByt").innerText = `Přibližná cena pronájmu: ${najem} Kč`;
}

function calculateDum() {
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