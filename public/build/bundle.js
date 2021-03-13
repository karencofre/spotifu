(()=>{"use strict";function s(){}function e(s){return s()}function t(){return Object.create(null)}function n(s){s.forEach(e)}function a(s){return"function"==typeof s}function c(s,e){return s!=s?e==e:s!==e||s&&"object"==typeof s||"function"==typeof s}function l(s){return 0===Object.keys(s).length}function r(s,e){s.appendChild(e)}function i(s,e,t){s.insertBefore(e,t||null)}function o(s){s.parentNode.removeChild(s)}function v(s){return document.createElement(s)}function d(){return s=" ",document.createTextNode(s);var s}function f(s,e,t){null==t?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}let u;function g(s){u=s}new Set,new Set;const m=[],h=[],p=[],w=[],b=Promise.resolve();let x=!1;function $(s){p.push(s)}let j=!1;const y=new Set;function S(){if(!j){j=!0;do{for(let s=0;s<m.length;s+=1){const e=m[s];g(e),E(e.$$)}for(g(null),m.length=0;h.length;)h.pop()();for(let s=0;s<p.length;s+=1){const e=p[s];y.has(e)||(y.add(e),e())}p.length=0}while(m.length);for(;w.length;)w.pop()();x=!1,j=!1,y.clear()}}function E(s){if(null!==s.fragment){s.update(),n(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach($)}}const k=new Set;let _;function D(s,e){s&&s.i&&(k.delete(s),s.i(e))}function I(s,e,t,n){if(s&&s.o){if(k.has(s))return;k.add(s),undefined.c.push((()=>{k.delete(s),n&&(t&&s.d(1),n())})),s.o(e)}}function A(s){s&&s.c()}function O(s,t,c,l){const{fragment:r,on_mount:i,on_destroy:o,after_update:v}=s.$$;r&&r.m(t,c),l||$((()=>{const t=i.map(e).filter(a);o?o.push(...t):n(t),s.$$.on_mount=[]})),v.forEach($)}function R(s,e){const t=s.$$;null!==t.fragment&&(n(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function B(e,a,c,l,r,i,v=[-1]){const d=u;g(e);const f=e.$$={fragment:null,ctx:null,props:i,update:s,not_equal:r,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:t(),dirty:v,skip_bound:!1};let h=!1;if(f.ctx=c?c(e,a.props||{},((s,t,...n)=>{const a=n.length?n[0]:t;return f.ctx&&r(f.ctx[s],f.ctx[s]=a)&&(!f.skip_bound&&f.bound[s]&&f.bound[s](a),h&&function(s,e){-1===s.$$.dirty[0]&&(m.push(s),x||(x=!0,b.then(S)),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}(e,s)),t})):[],f.update(),h=!0,n(f.before_update),f.fragment=!!l&&l(f.ctx),a.target){if(a.hydrate){const s=(p=a.target,Array.from(p.childNodes));f.fragment&&f.fragment.l(s),s.forEach(o)}else f.fragment&&f.fragment.c();a.intro&&D(e.$$.fragment),O(e,a.target,a.anchor,a.customElement),S()}var p;g(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(_=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:s}=this.$$;this.$$.on_disconnect=s.map(e).filter(a);for(const s in this.$$.slotted)this.appendChild(this.$$.slotted[s])}attributeChangedCallback(s,e,t){this[s]=t}disconnectedCallback(){n(this.$$.on_disconnect)}$destroy(){R(this,1),this.$destroy=s}$on(s,e){const t=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return t.push(e),()=>{const s=t.indexOf(e);-1!==s&&t.splice(s,1)}}$set(s){this.$$set&&!l(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}});class C{$destroy(){R(this,1),this.$destroy=s}$on(s,e){const t=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return t.push(e),()=>{const s=t.indexOf(e);-1!==s&&t.splice(s,1)}}$set(s){this.$$set&&!l(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=v("div"),t.innerHTML='<div class="frame svelte-vjcu2b"><img src="../assets/Chevron-left.svg" alt="flecha izquierda"/>  <img src="../assets/Chevron-right.svg" alt="flecha derecha"/> \n    <a href="https://www.karencofre.github.io" class="search svelte-vjcu2b"><img src="../assets/Search-small-black.svg" alt="lupa" id="lupa" class="svelte-vjcu2b"/>Buscar</a></div>',f(t,"class","Header svelte-vjcu2b")},m(s,e){i(s,t,e)},p:s,i:s,o:s,d(s){s&&o(t)}}}const G=class extends C{constructor(s){super(),B(this,s,null,U,c,{})}};function q(e){let t;return{c(){t=v("aside"),t.innerHTML='<img src="../assets/logo-spotifu.svg" alt="Spotifu logo" class="frame svelte-1wwafym"/> \n  \n  \n  <div class="sections frame svelte-1wwafym"><section class="home-section svelte-1wwafym"><img src="../assets/Home.svg" alt="Home icon" class="icons svelte-1wwafym" id="home-icon"/>\n      Inicio</section> \n      <section class="search-section svelte-1wwafym"><img src="../assets/Search-small.svg" alt="search sidebar icon" class="icons svelte-1wwafym" id="search-icon"/>Buscar</section> \n      <section class="premium-section svelte-1wwafym"><img src="../assets/Credit-card.svg" alt="premium icon" class="icons svelte-1wwafym"/>Premium</section></div> \n  \n    \n    <ul class="frame lista svelte-1wwafym"><li class="svelte-1wwafym">Tu Biiblioteca</li> \n      <li class="svelte-1wwafym">Creada para ti</li> \n      <li class="svelte-1wwafym">Escuchado recientemente</li> \n      <li class="svelte-1wwafym">Tus Me Gusta</li> \n      <li class="svelte-1wwafym">Artistas</li> \n      <li class="svelte-1wwafym">Podcasts</li></ul>',f(t,"class","Sidebar svelte-1wwafym")},m(s,e){i(s,t,e)},p:s,i:s,o:s,d(s){s&&o(t)}}}const L=class extends C{constructor(s){super(),B(this,s,null,q,c,{})}};function H(e){let t;return{c(){t=v("div"),t.innerHTML='<h2 class="svelte-1jcfnwx">Inicio</h2> \n  <nav class="heading svelte-1jcfnwx"><h4>Top playlists</h4> \n    <div class="control-arrow svelte-1jcfnwx"><a href="#page-1"><img src="../assets/Chevron-left.svg" alt="flecha left" class="svelte-1jcfnwx"/></a> \n    <a href="#page-2"><img src="../assets/Chevron-right.svg" alt="flecha right" class="svelte-1jcfnwx"/></a></div></nav> \n  <hr class="svelte-1jcfnwx"/> \n  <scroll-container class="svelte-1jcfnwx"><scroll-page id="page-1" class="svelte-1jcfnwx"><div class="card svelte-1jcfnwx"><img src="../assets/cover.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Mansion reggaetón</b></h4>  \n          <p class="svelte-1jcfnwx">Los exitos del reggaeton<br/> del momento.<br/>\n            2,611,830 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-2.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Éxitos</b></h4>  \n          <p class="svelte-1jcfnwx">aqui estan los hits mas grandes<br/> del momento.<br/>\n            23,720,224 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-3.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Hits Urbanos</b></h4>  \n          <p class="svelte-1jcfnwx">Éxitos urbanos de<br/> Latinoamerica.<br/>\n            1,131,650 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-4.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Dame Salsa</b></h4>  \n          <p class="svelte-1jcfnwx">Quiero Salsa Dame Salsa<br/> Josimar y Su Yambu<br/>\n            175,315 SEGUIDORES</p></div></div></scroll-page> \n    <scroll-page id="page-2" class="svelte-1jcfnwx"><div class="card svelte-1jcfnwx"><img src="../assets/cover-5.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Dame Flow</b></h4>  \n          <p class="svelte-1jcfnwx">Lo mejor del reggaeton y<br/> flow actual<br/>\n            257,277 SEGUIDORES</p></div></div>       \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-6.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>FuNketon</b></h4>  \n          <p class="svelte-1jcfnwx">Funk + reggaetón<br/> Cover Bad Bunny<br/>\n            36,593 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-7.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Bachateame!</b></h4>  \n          <p class="svelte-1jcfnwx">Esto si es bachata!<br/> Natti Natasha y Romeo<br/>\n            120,721 SEGUIDORES</p></div></div></scroll-page></scroll-container> \n\n <nav class="heading svelte-1jcfnwx"><h4>Escuchado Recientemente</h4> \n    <div class="control-arrow"></div></nav> \n  <hr class="svelte-1jcfnwx"/> \n  <scroll-container class="svelte-1jcfnwx"><scroll-page id="page-1" class="svelte-1jcfnwx"><div class="card svelte-1jcfnwx"><img src="../assets/cover.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Mansion reggaetón</b></h4>  \n          <p class="svelte-1jcfnwx">Los exitos del reggaeton<br/> del momento.<br/>\n            2,611,830 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-2.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Éxitos</b></h4>  \n          <p class="svelte-1jcfnwx">aqui estan los hits mas grandes<br/> del momento.<br/>\n            23,720,224 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-3.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Hits Urbanos</b></h4>  \n          <p class="svelte-1jcfnwx">Éxitos urbanos de<br/> Latinoamerica.<br/>\n            1,131,650 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-4.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Dame Salsa</b></h4>  \n          <p class="svelte-1jcfnwx">Quiero Salsa Dame Salsa<br/> Josimar y Su Yambu<br/>\n            175,315 SEGUIDORES</p></div></div></scroll-page> \n    <scroll-page id="page-2" class="svelte-1jcfnwx"><div class="card svelte-1jcfnwx"><img src="../assets/cover-5.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Dame Flow</b></h4>  \n          <p class="svelte-1jcfnwx">Lo mejor del reggaeton y<br/> flow actual<br/>\n            257,277 SEGUIDORES</p></div></div>       \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-6.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>FuNketon</b></h4>  \n          <p class="svelte-1jcfnwx">Funk + reggaetón<br/> Cover Bad Bunny<br/>\n            36,593 SEGUIDORES</p></div></div> \n      \n      <div class="card svelte-1jcfnwx"><img src="../assets/cover-7.png" alt="Avatar" class="avatar svelte-1jcfnwx"/> \n         <div class="container svelte-1jcfnwx"><h4><b>Bachateame!</b></h4>  \n          <p class="svelte-1jcfnwx">Esto si es bachata!<br/> Natti Natasha y Romeo<br/>\n            120,721 SEGUIDORES</p></div></div></scroll-page></scroll-container>',f(t,"class","Inicio svelte-1jcfnwx")},m(s,e){i(s,t,e)},p:s,i:s,o:s,d(s){s&&o(t)}}}const T=class extends C{constructor(s){super(),B(this,s,null,H,c,{})}};function M(e){let t,n,a,c,l,u,g,m,h,p,w,b,x,$,j,y,S,E,k;return{c(){t=v("div"),n=v("div"),n.innerHTML='<p>Dákiti \n      <img src="../assets/Heart.svg" alt="heart icon" id="heart-icon" class="svelte-iqng18"/></p> \n    <p>Bad Bunny,Jhay Cortez</p>',a=d(),c=v("div"),l=v("div"),u=v("img"),m=d(),h=v("img"),w=d(),b=v("img"),$=d(),j=v("div"),y=d(),S=v("div"),f(n,"class","info-song svelte-iqng18"),u.src!==(g="../assets/Skip-left.svg")&&f(u,"src","../assets/Skip-left.svg"),f(u,"class","control svelte-iqng18"),f(u,"alt","skip left"),f(u,"id","skip-left"),h.src!==(p="../assets/Play.svg")&&f(h,"src","../assets/Play.svg"),f(h,"class","play-control svelte-iqng18"),f(h,"alt","play"),b.src!==(x="../assets/Skip-rigth.svg")&&f(b,"src","../assets/Skip-rigth.svg"),f(b,"class","control svelte-iqng18"),f(b,"alt","skip rigth"),f(l,"class","controls-container svelte-iqng18"),f(j,"id","myBar"),j.style.setProperty("width","35%",""),f(j,"class","svelte-iqng18"),f(c,"class","progress-bar"),f(t,"class","BottomPlayer svelte-iqng18")},m(s,e){var o,v,d,f;i(s,t,e),r(t,n),r(t,a),r(t,c),r(c,l),r(l,u),r(l,m),r(l,h),r(l,w),r(l,b),r(c,$),r(c,j),r(t,y),r(t,S),E||(v="click",d=N,(o=h).addEventListener(v,d,f),k=()=>o.removeEventListener(v,d,f),E=!0)},p:s,i:s,o:s,d(s){s&&o(t),E=!1,k()}}}function N(){var s=document.getElementById("myBar"),e=1,t=setInterval((function(){e>=100?clearInterval(t):(e++,s.style.width=e+"%")}),10)}const P=class extends C{constructor(s){super(),B(this,s,null,M,c,{})}};function F(e){let t,n,a,c,l,u,g,m,h,p,w;return a=new L({}),u=new G({}),m=new T({}),p=new P({}),{c(){t=v("body"),n=v("div"),A(a.$$.fragment),c=d(),l=v("div"),A(u.$$.fragment),g=d(),A(m.$$.fragment),h=d(),A(p.$$.fragment),f(l,"class","box svelte-9dkrh3"),f(n,"class","flexbox svelte-9dkrh3"),f(t,"class","svelte-9dkrh3")},m(s,e){i(s,t,e),r(t,n),O(a,n,null),r(n,c),r(n,l),O(u,l,null),r(l,g),O(m,l,null),r(t,h),O(p,t,null),w=!0},p:s,i(s){w||(D(a.$$.fragment,s),D(u.$$.fragment,s),D(m.$$.fragment,s),D(p.$$.fragment,s),w=!0)},o(s){I(a.$$.fragment,s),I(u.$$.fragment,s),I(m.$$.fragment,s),I(p.$$.fragment,s),w=!1},d(s){s&&o(t),R(a),R(u),R(m),R(p)}}}new class extends C{constructor(s){super(),B(this,s,null,F,c,{})}}({target:document.body})})();