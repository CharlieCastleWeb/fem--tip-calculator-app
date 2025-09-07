(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();let d={bill:0,tipPercent:0,people:0};const b=new Set,g=()=>{b.forEach(e=>e(d)),console.log("[Calculator Store] state",d)},u={getState:()=>d,subscribe(e){return b.add(e),e(d),()=>b.delete(e)},setBill(e){d={...d,bill:Math.max(0,e)},g()},setTipPercent(e){d={...d,tipPercent:Math.max(0,e)},g()},setPeople(e){d={...d,people:Math.max(0,Math.floor(e))},g()},reset(){d={bill:0,tipPercent:0,people:0},g()}};function v(e){const{name:t,bind:r,labelText:a,placeholder:n="0",iconSrc:l,iconAlt:s,errorText:c,textCenter:y=!1}=e,m=document.createElement("div");if(m.className="flex flex-col gap-2",a||c){const p=document.createElement("div");if(p.className="flex justify-between items-center",a){const i=document.createElement("label");i.textContent=a,i.className="text-preset-5 text-fem-grey-500",i.setAttribute("for",t),p.appendChild(i)}if(c){const i=document.createElement("span");i.className="text-preset-5 text-fem-orange-400",i.id=`${t}-error`,i.textContent=c,p.appendChild(i)}m.appendChild(p)}const f=document.createElement("div");f.className="relative";const o=document.createElement("input");o.type="number",o.id=t,o.name=t,o.setAttribute("aria-describedby",`${t}-error`),o.placeholder=n??"",o.className=`w-full bg-fem-grey-50 text-right px-4 py-2 rounded text-preset-3 text-fem-green-900 h-12
                    focus:outline-2 focus:outline-fem-green-400`,y&&o.classList.add("text-center","placeholder:text-center"),c&&o.setAttribute("aria-describedby",`${t}-error`),o.addEventListener("focus",()=>{o.value==="0"&&(o.value="")}),o.addEventListener("blur",()=>{o.value===""&&(o.value="0",h())});const h=()=>{const p=o.valueAsNumber,i={name:t,value:Number.isFinite(p)?p:0};m.dispatchEvent(new CustomEvent("valuechange",{detail:i,bubbles:!0}))};if(o.addEventListener("input",h),f.appendChild(o),m.appendChild(f),l){const p=document.createElement("span");p.className="absolute inset-y-0 left-4 flex items-center",p.setAttribute("aria-hidden","true");const i=document.createElement("img");i.src=l,i.alt=s??"",p.appendChild(i),f.appendChild(p)}return r&&u.subscribe(p=>{const i=p[r];if(i===0){o.value="";return}const E=String(i??0);o.value!==E&&(o.value=E)}),m}function C(e){return e.bill*(e.tipPercent/100)}function P(e){return e.people>0?C(e)/e.people:0}function T(e){return e.people>0?(e.bill+C(e))/e.people:0}function N(){const e=document.createElement("div");e.className="bg-fem-green-900 p-6 rounded-2xl sm:p-12 lg:w-[413px] lg:px-10",e.innerHTML=`
    <div class="py-1 flex justify-between items-center">
      <div>
        <p class="text-preset-5 text-fem-white">Tip Amount</p>
        <p class="text-preset-6 text-fem-grey-400">/ person</p>
      </div>
      <div>
        <p id="tipAmount" class="text-preset-2 text-fem-green-400 sm:text-preset-1">$0</p>
      </div>
    </div>
    <div class="flex justify-between items-center mt-5 sm:mt-8 lg:mt-10">
      <div>
        <p class="text-preset-5 text-fem-white">Total</p>
        <p class="text-preset-6 text-fem-grey-400">/ person</p>
      </div>
      <div>
        <p id="totalAmount" class="text-preset-2 text-fem-green-400 sm:text-preset-1">$0</p>
      </div>
    </div>
    </div>
    <button
      id="resetBtn"
      class="
          mt-8 w-full bg-fem-green-400 text-preset-4 text-fem-green-900 rounded
          px-4 pt-2 pb-4 disabled:bg-fem-green-750 disabled:text-fem-green-800
          active:bg-fem-green-200 sm:mt-6 lg:mt-32
        "
    >
      RESET
    </button>
  `;const t=e.querySelector("#tipAmount"),r=e.querySelector("#totalAmount"),a=e.querySelector("#resetBtn");return u.subscribe(n=>{const l=P(n).toFixed(2),s=T(n).toFixed(2);t.textContent=`$${l}`,r.textContent=`$${s}`;const c=n.bill>0||n.tipPercent>0||n.people>0;a.disabled=!c}),a.addEventListener("click",()=>{u.reset()}),e}function S(e){const t=document.createElement("button");t.className=`
    h-12 bg-fem-green-900 text-fem-grey-50 text-preset-3 rounded cursor-pointer transition-all duration-300 ease-in-out
    px-4 py-2
    hover:bg-fem-green-400 hover:text-fem-green-900
    focus:bg-fem-green-400 focus:text-fem-green-900 focus:outline-0
    active:bg-fem-green-200 active:text-fem-green-900
  `;const r=()=>{const a={name:"tipPercent",value:e};t.dispatchEvent(new CustomEvent("valuechange",{detail:a,bubbles:!0}))};return t.addEventListener("click",r),t.textContent=`${e}%`,t.dataset.value=`${e}%`,t}function L(e){const t=document.createElement("div");t.innerHTML=`
    <p class="mb-2 text-preset-5 text-fem-grey-500">Select Tip %</p>
  `,t.className="";const r=v({name:"customTipPercent",placeholder:"Custom",textCenter:!0}),a=r.querySelector("input");r.addEventListener("valuechange",l=>{l.detail.name==="customTipPercent"&&u.setTipPercent(l.detail.value)});const n=document.createElement("div");return n.className="grid grid-cols-2 gap-4 sm:grid-cols-3",e.forEach(l=>{const s=S(l);s.addEventListener("valuechange",c=>{u.setTipPercent(c.detail.value),a&&(a.value="")}),n.appendChild(s)}),n.appendChild(r),t.appendChild(n),t}function w(){const e=document.createElement("div");e.className=`
    rounded-3xl flex flex-col gap-8 bg-fem-white mx-auto px-6 py-8 
    max-w-[608px] 
    sm:px-19 sm:py-13 sm:gap-10 
    lg:max-w-[920px] lg:flex-row 
    lg:px-10 lg:py-8 lg:gap-12
  `;const t=document.createElement("section");t.className="pt-0.5 mx-2 flex flex-col gap-8 sm:mx-0 sm:gap-6 lg:pt-4 lg:gap-10";const r=document.createElement("div"),a=v({name:"bill",labelText:"Bill",iconSrc:"assets/images/icon-dollar.svg",iconAlt:"Dollar Icon",bind:"bill"});a.addEventListener("valuechange",c=>{c.detail.name==="bill"&&u.setBill(c.detail.value)}),r.appendChild(a),t.appendChild(r),t.appendChild(L([5,10,15,25,50]));const n=document.createElement("div"),l=v({name:"people",labelText:"Number of People",iconSrc:"assets/images/icon-person.svg",iconAlt:"Person Icon",bind:"people"});l.addEventListener("valuechange",c=>{c.detail.name==="people"&&u.setPeople(c.detail.value)}),n.appendChild(l),t.appendChild(n),e.appendChild(t);const s=document.createElement("div");return s.className="",s.appendChild(N()),e.appendChild(s),e}function A(){const e=document.createElement("main"),t=document.createElement("header"),r=document.createElement("img");return r.src="/assets/images/logo.svg",r.alt="Tip Calculator logo",r.width=87,r.height=54,r.className="mx-auto mt-[50px] mb-10 lg:mt-0 lg:mb-22",t.appendChild(r),e.appendChild(t),e.appendChild(w()),e}const x=document.querySelector("#app");if(x){const e=["flex","flex-col","items-center","justify-center","h-dvh"];x.classList.add(...e),x.appendChild(A())}
