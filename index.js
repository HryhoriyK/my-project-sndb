(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s={"Praha 1":492,"Praha 2":470,"Praha 3":460,"Praha 4":418,"Praha 5":433,"Praha 6":417,"Praha 7":441,"Praha 8":417,"Praha 9":421,"Praha 10":405};function i(){const n=document.getElementById("lokalita").value;return s[n]||350}function d(){const n=document.getElementById("calculateBtn"),l=document.getElementById("loader");n.style.display="none",l.style.display="inline-block",setTimeout(()=>{l.style.display="none",n.style.display="inline-block";const a=document.getElementById("plochaByt").value;document.getElementById("lokalita").value;const o=i(),e=a*o*.1,t=a*o;document.getElementById("vysledekByt").innerText=`Orientačni cena správy: ${e} Kč`,document.getElementById("najemByt").innerText=`Přibližná cena pronájmu: ${t} Kč`},850)}function r(){const n=document.getElementById("calculateDumBtn"),l=document.getElementById("loader");n.style.display="none",l.style.display="inline-block",setTimeout(()=>{l.style.display="none",n.style.display="inline-block";const a=document.getElementById("pocetByt").value;document.getElementById("pocetNebyt").value;const o=document.getElementById("plochaDum").value;document.getElementById("lokalita").value;const e=i(),t=a*250+o*e*.05,c=o*e;document.getElementById("vysledekDum").innerText=`Orientačni cena správy: ${t} Kč`,document.getElementById("najemDum").innerText=`Přibližná cena pronájmu: ${c} Kč`},950)}function u(n){const l=document.getElementById("formContainer");l.innerHTML="",n==="byt"?l.innerHTML=`
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
         `:n==="dum"&&(l.innerHTML=`
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
         `)}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btnByt").addEventListener("click",()=>u("byt")),document.getElementById("btnDum").addEventListener("click",()=>r())});document.querySelector(".header-logo").addEventListener("click",n=>{n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});window.showForm=u;window.calculateByt=d;window.calculateDum=r;
//# sourceMappingURL=index.js.map
