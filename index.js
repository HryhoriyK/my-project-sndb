(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const r={"Praha 1":492,"Praha 2":470,"Praha 3":460,"Praha 4":418,"Praha 5":433,"Praha 6":417,"Praha 7":441,"Praha 8":417,"Praha 9":421,"Praha 10":405};function u(){const l=document.getElementById("lokalita").value;return r[l]||350}function d(){const l=document.getElementById("plochaByt").value;document.getElementById("lokalita").value;const t=u(),n=l*t*.1,o=l*t;document.getElementById("vysledekByt").innerText=`Cena správy: ${n} Kč`,document.getElementById("najemByt").innerText=`Přibližná cena pronájmu: ${o} Kč`}function s(){const l=document.getElementById("pocetByt").value;document.getElementById("pocetNebyt").value;const t=document.getElementById("plochaDum").value;document.getElementById("lokalita").value;const n=u(),o=l*250+t*n*.05,e=t*n;document.getElementById("vysledekDum").innerText=`Cena správy: ${o} Kč`,document.getElementById("najemDum").innerText=`Přibližná cena pronájmu: ${e} Kč`}function i(l){const t=document.getElementById("formContainer");t.innerHTML="",l==="byt"?t.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(r).map(n=>`<option value="${n}">${n}</option>`).join("")}
             </select><br>
             <label class="input-text">Zadej m²: </label>
             <input class="input-area" type="number" id="plochaByt"><br>
             <button class="btn-count" onclick="calculateByt()">Vypočítat cenu</button>
             <p class="result" id="vysledekByt"></p>
             <p class="result" id="najemByt"></p>
         `:l==="dum"&&(t.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(r).map(n=>`<option value="${n}">${n}</option>`).join("")}
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
         `)}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btnByt").addEventListener("click",()=>i("byt")),document.getElementById("btnDum").addEventListener("click",()=>s())});window.showForm=i;window.calculateByt=d;window.calculateDum=s;
//# sourceMappingURL=index.js.map
