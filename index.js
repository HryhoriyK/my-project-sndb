(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();const s={"Praha 1":492,"Praha 2":470,"Praha 3":460,"Praha 4":418,"Praha 5":433,"Praha 6":417,"Praha 7":441,"Praha 8":417,"Praha 9":421,"Praha 10":405};function i(){const t=document.getElementById("lokalita").value;return s[t]||350}function m(){const t=document.getElementById("calculateBtn"),a=document.getElementById("loader");t.style.display="none",a.style.display="inline-block",setTimeout(()=>{a.style.display="none",t.style.display="inline-block";const l=document.getElementById("plochaByt").value;document.getElementById("lokalita").value;const o=i(),e=l*o*.1,n=l*o;document.getElementById("vysledekByt").innerText=`Orientačni cena správy: ${e} Kč`,document.getElementById("najemByt").innerText=`Přibližná cena pronájmu: ${n} Kč`},850)}function u(){const t=document.getElementById("calculateDumBtn"),a=document.getElementById("loader");t.style.display="none",a.style.display="inline-block",setTimeout(()=>{a.style.display="none",t.style.display="inline-block";const l=document.getElementById("pocetByt").value;document.getElementById("pocetNebyt").value;const o=document.getElementById("plochaDum").value;document.getElementById("lokalita").value;const e=i(),n=l*250+o*e*.05,c=o*e;document.getElementById("vysledekDum").innerText=`Orientačni cena správy: ${n} Kč`,document.getElementById("najemDum").innerText=`Přibližná cena pronájmu: ${c} Kč`},950)}function r(t){const a=document.getElementById("formContainer");a.innerHTML="",t==="byt"?a.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(s).map(l=>`<option value="${l}">${l}</option>`).join("")}
             </select><br>
             <label class="input-text">Zadej m²: </label>
             <input class="input-area" type="number" id="plochaByt"><br>
             <button class="btn-count" id="calculateBtn" onclick="calculateByt()">Vypočítat cenu</button>
             <span class="loader" id="loader" style="display: none;"></span>
             <p class="result" id="vysledekByt"></p>
             <p class="result" id="najemByt"></p>
         `:t==="dum"&&(a.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(s).map(l=>`<option value="${l}">${l}</option>`).join("")}
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
         `)}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btnByt").addEventListener("click",()=>r("byt")),document.getElementById("btnDum").addEventListener("click",()=>u())});document.querySelector(".header-logo").addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});window.showForm=r;window.calculateByt=m;window.calculateDum=u;const p=document.querySelector("[data-menu-open]"),d=document.querySelector("[data-menu]"),y=document.querySelector("[data-menu-close]"),b=document.querySelectorAll(".mobile-menu-nav .link");p.addEventListener("click",()=>{d.classList.add("is-open"),document.body.classList.add("menu-open")});y.addEventListener("click",()=>{d.classList.remove("is-open"),document.body.classList.remove("menu-open")});b.forEach(t=>{t.addEventListener("click",()=>{document.querySelector("[data-menu]").classList.remove("is-open"),document.body.classList.remove("menu-open")})});
//# sourceMappingURL=index.js.map
