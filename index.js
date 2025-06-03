(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s={"Praha 1":492,"Praha 2":470,"Praha 3":460,"Praha 4":418,"Praha 5":433,"Praha 6":417,"Praha 7":441,"Praha 8":417,"Praha 9":421,"Praha 10":405};function i(){const l=document.getElementById("lokalita").value;return s[l]||350}function d(){const l=document.getElementById("calculateBtn"),n=document.getElementById("loader");l.style.display="none",n.style.display="inline-block",setTimeout(()=>{n.style.display="none",l.style.display="inline-block";const a=document.getElementById("plochaByt").value;document.getElementById("lokalita").value;const o=i(),e=a*o*.1,t=a*o;document.getElementById("vysledekByt").innerText=`Orientačni cena správy: ${e} Kč`,document.getElementById("najemByt").innerText=`Přibližná cena pronájmu: ${t} Kč`},850)}function u(){const l=document.getElementById("calculateDumBtn"),n=document.getElementById("loader");l.style.display="none",n.style.display="inline-block",setTimeout(()=>{n.style.display="none",l.style.display="inline-block";const a=document.getElementById("pocetByt").value;document.getElementById("pocetNebyt").value;const o=document.getElementById("plochaDum").value;document.getElementById("lokalita").value;const e=i(),t=a*250+o*e*.05,c=o*e;document.getElementById("vysledekDum").innerText=`Orientačni cena správy: ${t} Kč`,document.getElementById("najemDum").innerText=`Přibližná cena pronájmu: ${c} Kč`},950)}function r(l){const n=document.getElementById("formContainer");n.innerHTML="",l==="byt"?n.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(s).map(a=>`<option value="${a}">${a}</option>`).join("")}
             </select><br>
             <label class="input-text">Zadej m²: </label>
             <input class="input-area" type="number" id="plochaByt"><br>
             <button class="btn-count" id="calculateBtn" onclick="calculateByt()">Vypočítat cenu</button>
             <span class="loader" id="loader" style="display: none;"></span>
             <p class="result" id="vysledekByt"></p>
             <p class="result" id="najemByt"></p>
         `:l==="dum"&&(n.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(s).map(a=>`<option value="${a}">${a}</option>`).join("")}
             </select><br>
             <label class="input-text">Počet bytových jednotek: </label>
             <input class="input-area" type="number" id="pocetByt"><br>
             <label class="input-text">Počet nebytových jednotek: </label>
             <input class="input-area" type="number" id="pocetNebyt"><br>
             <label class="input-text">Celková plocha (m²): </label>
             <input class="input-area" type="number" id="plochaDum"><br>
             <button class="btn-count" id="calculateDumBtn" onclick="calculateDum()">Vypočítat cenu</button>
             <span class="loader" id="loader" style="display: none;"></span>
             <p class="result" id="vysledekDum"></p>
             <p class="result" id="najemDum"></p>
         `)}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btnByt").addEventListener("click",()=>r("byt")),document.getElementById("btnDum").addEventListener("click",()=>u())});window.showForm=r;window.calculateByt=d;window.calculateDum=u;
//# sourceMappingURL=index.js.map
