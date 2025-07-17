(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=o(e);fetch(e.href,l)}})();const s={"Praha 1":492,"Praha 2":470,"Praha 3":460,"Praha 4":418,"Praha 5":433,"Praha 6":417,"Praha 7":441,"Praha 8":417,"Praha 9":421,"Praha 10":405};function i(t){const n=document.getElementById("formContainer");n.innerHTML="",t==="byt"?n.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(s).map(o=>`<option value="${o}">${o}</option>`).join("")}
             </select><br>
             <label class="input-text">Zadej m²: </label>
             <input class="input-area" type="number" id="plochaByt"><br>
             <button class="btn-count" id="calculateBtn" onclick="calculateByt()">Vypočítat cenu</button>
             <span class="loader" id="loader" style="display: none;"></span>
             <p class="result" id="vysledekByt"></p>
             <p class="result" id="najemByt"></p>
         `:t==="dum"&&(n.innerHTML=`
             <label class="input-text">Lokalita: </label>
             <select class="input-area" id="lokalita" onchange="updateCena()">
                 ${Object.keys(s).map(o=>`<option value="${o}">${o}</option>`).join("")}
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
         `)}function u(){const t=document.getElementById("lokalita").value;return s[t]||350}function m(){const t=document.getElementById("calculateBtn"),n=document.getElementById("loader");t.style.display="none",n.style.display="inline-block",setTimeout(()=>{n.style.display="none",t.style.display="inline-block";const o=document.getElementById("plochaByt").value;document.getElementById("lokalita").value;const a=u(),e=o*a*.1,l=o*a;document.getElementById("vysledekByt").innerText=`Orientačni cena správy: ${e} Kč`,document.getElementById("najemByt").innerText=`Přibližná cena pronájmu: ${l} Kč`},850)}function r(){const t=document.getElementById("calculateDumBtn"),n=document.getElementById("loader");t.style.display="none",n.style.display="inline-block",setTimeout(()=>{n.style.display="none",t.style.display="inline-block";const o=document.getElementById("pocetByt").value;document.getElementById("pocetNebyt").value;const a=document.getElementById("plochaDum").value;document.getElementById("lokalita").value;const e=u(),l=o*250+a*e*.05,c=a*e;document.getElementById("vysledekDum").innerText=`Orientačni cena správy: ${l} Kč`,document.getElementById("najemDum").innerText=`Přibližná cena pronájmu: ${c} Kč`},950)}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btnByt").addEventListener("click",()=>i("byt")),document.getElementById("btnDum").addEventListener("click",()=>r())});document.querySelector(".header-logo").addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});window.showForm=i;window.calculateByt=m;window.calculateDum=r;const y=document.querySelector("[data-menu-open]"),d=document.querySelector("[data-menu]"),p=document.querySelector("[data-menu-close]"),b=document.querySelectorAll(".mobile-menu-nav .link");y.addEventListener("click",()=>{d.classList.add("is-open"),document.body.classList.add("menu-open")});p.addEventListener("click",()=>{d.classList.remove("is-open"),document.body.classList.remove("menu-open")});b.forEach(t=>{t.addEventListener("click",()=>{document.querySelector("[data-menu]").classList.remove("is-open"),document.body.classList.remove("menu-open")})});const v=document.querySelectorAll(".accordion-toggle");v.forEach(t=>{t.addEventListener("click",()=>{const n=t.nextElementSibling;n.style.display=n.style.display==="block"?"none":"block"})});
//# sourceMappingURL=index.js.map
