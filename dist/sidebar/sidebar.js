!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=function(){if("complete"===document.readyState){var e=document.createElement("div");e.setAttribute("sidebarjs",void 0);var t=document.createElement("style");t.innerText="[sidebarjs-backdrop],[sidebarjs]{height:100%;left:0;top:0;width:100%}.sidebarjs--left[sidebarjs],[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-transform:translate(-100%);transform:translate(-100%)}.sidebarjs--right[sidebarjs],[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-transform:translate(100%);transform:translate(100%)}[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:2px 0 4px rgba(0,0,0,.2);box-shadow:2px 0 4px rgba(0,0,0,.2)}[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-2px 0 4px rgba(0,0,0,.2);box-shadow:-2px 0 4px rgba(0,0,0,.2);margin-left:auto}[sidebarjs-backdrop]{-webkit-transition:opacity .3s ease;background:#000;opacity:0;position:absolute;transition:opacity .3s ease;will-change:opacity}[sidebarjs-container]{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-transition:-webkit-transform .3s ease;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;max-width:300px;position:relative;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;width:90%;will-change:transform;z-index:1}[sidebarjs]{-webkit-transition:-webkit-transform 0s ease .3s;position:fixed;transition:-webkit-transform 0s ease .3s;transition:transform 0s ease .3s;transition:transform 0s ease .3s,-webkit-transform 0s ease .3s;z-index:9999}[sidebarjs].sidebarjs--is-visible{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-visible,[sidebarjs].sidebarjs--is-visible [sidebarjs-container]{-webkit-transform:translate(0);transform:translate(0)}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-moving [sidebarjs-backdrop],[sidebarjs].sidebarjs--is-moving [sidebarjs-container]{-webkit-transition:none;transition:none}[sidebarjs-content]{-webkit-transition:width .3s ease;min-height:100%;position:relative;transition:width .3s ease;width:100%}[sidebarjs-content].sidebarjs-content--left{margin-left:auto;margin-right:0}[sidebarjs-content].sidebarjs-content--right{margin-left:0;margin-right:auto}@media (min-width:1025px){[sidebarjs].sidebarjs--responsive{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s;width:300px}[sidebarjs].sidebarjs--responsive,[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-transform:translate(0)!important;transform:translate(0)!important}[sidebarjs].sidebarjs--responsive.sidebarjs--left{left:0;right:auto}[sidebarjs].sidebarjs--responsive.sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:1px 0 0 rgba(0,0,0,.1);box-shadow:1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive.sidebarjs--right{left:auto;right:0}[sidebarjs].sidebarjs--responsive.sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-1px 0 0 rgba(0,0,0,.1);box-shadow:-1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-box-shadow:none;box-shadow:none;max-width:none;width:100%}[sidebarjs-content]{width:-webkit-calc(100% - 300px);width:calc(100% - 300px)}[sidebarjs-content].sidebarjs-content--left.sidebarjs-content--right{margin:0 auto;width:-webkit-calc(100% - 600px);width:calc(100% - 600px)}}",document.head.appendChild(t);var n=document.createElement("style");n.innerText="\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-overflow-scrolling: touch;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -moz-tap-highlight-color: rgba(0, 0, 0, 0);\n        tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      body {\n        position: relative;\n        min-height: 100vh;\n      }\n\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n\n      [sidebarjs] .img {\n        display: block;\n        width: 32px;\n        min-width: 32px;\n        height: 32px;\n        min-height: 32px;\n        margin-right: 16px;\n        opacity: .8;\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n      }\n\n      .img.img-ctxmenu {\n        background-image: url('https://nkappler.github.io/ctxmenu/favicon_nc.png');\n      }\n\n      .img.home {\n        background-image: url('https://nkappler.github.io/dist/sidebar/home.svg');\n      }\n\n      .img.slimemap {\n        background-image: url('https://nkappler.github.io/slimemap/favicon.png');\n      }\n\n      .img.centipede {\n        background-image: url('https://nkappler.github.io/Centipede/favicon.png');\n      }\n\n      /* –––––––––––––––––––––––––––––––––––––––\n                      Basic Demo\n      –––––––––––––––––––––––––––––––––––––––– */\n      header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        position: relative;\n        padding: 12px;\n        height: 56px;\n        background: #666;\n      }\n\n      .icon {\n        position: relative;\n        z-index: 1;\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        transition: background .1s;\n      }\n\n      .icon:active {\n        background: rgba(255, 255, 255, .2);\n      }\n\n      .hamburger-icon:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: auto;\n        width: 70%;\n        height: 2px;\n        border-radius: 2px;\n        background: #FFF;\n        box-shadow: 0 -6px 0 #FFF, 0 6px 0 #FFF;\n      }\n\n      /* –––––––––––––––––––––––––––––––––––––––\n                    Advanced Demo\n      –––––––––––––––––––––––––––––––––––––––– */\n      div[sidebarjs] > * {\n        font: 300 16px/100% 'Arial', sans-serif;\n      }\n\n      [sidebarjs] h3 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n        min-height: 180px;\n        padding: 16px;\n        background: #666;\n        color: #FFF;\n        font-size: 40px;\n      }\n\n      [sidebarjs] nav {\n        overflow-x: hidden;\n        overflow-y: auto;\n      }\n\n      [sidebarjs] nav > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        flex-direction: column;\n        border-top: 1px solid rgba(0, 0, 0, .1);\n      }\n\n      [sidebarjs] nav > div:first-child {\n        border-top: none;\n      }\n\n      [sidebarjs] nav a {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -moz-align-items: center;\n        -ms-align-items: center;\n        -webkit-align-items: center;\n        align-items: center;\n        color: rgba(0, 0, 0, .64);\n        padding: 16px;\n        transition: background 0.3s ease;\n      }\n\n      [sidebarjs] nav a:active {\n        color: inherit;\n        background: rgba(0, 0, 0, .1);\n      }\n\n      @media (min-width: 1025px) {\n        [sidebarjs-toggle=\"rightSidebarName\"] {\n          margin-left: auto;\n        }\n\n        [sidebarjs-toggle=\"leftSidebarName\"], [sidebarjs-toggle=\"\"] {\n          display: none;\n        }\n      }\n    ",document.head.appendChild(n);var s=document.createElement("header"),o=document.createElement("div");o.setAttribute("sidebarjs-toggle",void 0),o.className="icon hamburger-icon",s.appendChild(o);var r=document.createElement("h3");r.innerText="Menu";var a=document.createElement("nav"),d=document.createElement("a");d.innerHTML='<div class="img home"></div>Home',d.href="https://nkappler.github.io";var c=document.createElement("a");c.innerHTML='<div class="img img-ctxmenu"></div>ctxmenu.js - a context menu generator',c.href="https://nkappler.github.io/ctxmenu";var p=document.createElement("a");p.innerHTML='<div class="img slimemap"></div>slimeMap - a Slime Chunk Finder for Minecraft',p.href="https://nkappler.github.io/slimemap";var l=document.createElement("a");l.innerHTML='<div class="img centipede"></div>Centipede - an Arcade Game',l.href="https://nkappler.github.io/Centipede",[d,c,p,l].forEach(function(e){return a.appendChild(e)}),[r,a].forEach(function(t){return e.appendChild(t)}),[s,e].forEach(function(e){return document.body.prepend(e)}),window.sidebar=new i.SidebarElement}};"complete"===document.readyState?s():document.addEventListener("readystatechange",s)},function(e,t,n){e.exports=n(2)},function(e,t,n){!function(e){"use strict";function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t){return e(t={exports:{}},t.exports),t.exports}var i=n(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="sidebarjs",i=n+"--is-visible",s=n+"--is-moving",o=["left","right"],r=function(){function e(t){void 0===t&&(t={});var o=this;this.toggle=function(){o.isVisible()?o.close():o.open()},this.open=function(){o.component.classList.add(i),o.setBackdropOpacity(o.backdropOpacity)},this.close=function(){o.component.classList.remove(i),o.clearStyle(o.backdrop)},this.__onTouchStart=function(e){o.initialTouch=e.touches[0].pageX},this.__onTouchMove=function(e){var t=-(o.initialTouch-e.touches[0].clientX),n=o.container.clientWidth+(o.hasLeftPosition()?t:-t);n<=o.container.clientWidth&&(o.touchMoveSidebar=Math.abs(t),o.moveSidebar(t))},this.__onTouchEnd=function(){o.component.classList.remove(s),o.clearStyle(o.container),o.clearStyle(o.backdrop),o.touchMoveSidebar>o.container.clientWidth/3.5?o.close():o.open(),o.initialTouch=null,o.touchMoveSidebar=null},this.__onSwipeOpenStart=function(e){if(!o.targetElementIsBackdrop(e)){var t=e.touches[0].clientX,n=o.hasLeftPosition()?t:document.body.clientWidth-t;n<o.documentSwipeRange&&o.__onTouchStart(e)}},this.__onSwipeOpenMove=function(e){if(!o.targetElementIsBackdrop(e)&&o.initialTouch&&!o.isVisible()){var t=e.touches[0].clientX-o.initialTouch,n=o.hasLeftPosition(),i=n?t:-t,s=o.container.clientWidth-i;s>0&&i>=o.documentMinSwipeX&&(o.openMovement=n?-s:s,o.moveSidebar(o.openMovement))}},this.__onSwipeOpenEnd=function(){o.openMovement&&(o.openMovement=null,o.__onTouchEnd())},this.__onTransitionEnd=function(){var e=o.isVisible();e&&!o.__wasVisible?(o.__wasVisible=!0,o.__emitOnOpen&&o.__emitOnOpen()):!e&&o.__wasVisible&&(o.__wasVisible=!1,o.__emitOnClose&&o.__emitOnClose()),o.__emitOnChangeVisibility&&o.__emitOnChangeVisibility({isVisible:e})};var r=t.component,a=t.container,d=t.backdrop,c=t.documentMinSwipeX,p=void 0===c?10:c,l=t.documentSwipeRange,h=void 0===l?40:l,b=t.nativeSwipe,u=t.nativeSwipeOpen,m=t.responsive,v=void 0!==m&&m,f=t.mainContent,g=t.position,y=void 0===g?"left":g,w=t.backdropOpacity,j=void 0===w?.3:w,x=t.onOpen,k=t.onClose,S=t.onChangeVisibility,_=a&&d;if(this.component=r||document.querySelector("["+n+"]"),this.container=_?a:e.create(n+"-container"),this.backdrop=_?d:e.create(n+"-backdrop"),this.documentMinSwipeX=p,this.documentSwipeRange=h,this.nativeSwipe=!1!==b,this.nativeSwipeOpen=!1!==u,this.isStyleMapSupported=e.isStyleMapSupported(),this.responsive=Boolean(v),this.mainContent=this.shouldDefineMainContent(f),this.backdropOpacity=j,this.backdropOpacityRatio=1/j,this.__emitOnOpen=x,this.__emitOnClose=k,this.__emitOnChangeVisibility=S,!_)try{this.transcludeContent()}catch(e){throw new Error("You must define an element with [sidebarjs] attribute")}this.setSwipeGestures(!0),(this.responsive||this.mainContent)&&this.setResponsive(),this.setPosition(y),this.addAttrsEventsListeners(this.component.getAttribute(n)),this.addTransitionListener(),this.backdrop.addEventListener("click",this.close,{passive:!0})}return e.prototype.isVisible=function(){return this.component.classList.contains(i)},e.prototype.destroy=function(){var e=this;for(this.removeNativeGestures(),this.container.removeEventListener("transitionend",this.__onTransitionEnd,{passive:!0}),this.backdrop.removeEventListener("click",this.close,{passive:!0}),this.removeNativeOpenGestures(),this.removeAttrsEventsListeners(this.component.getAttribute(n)),this.removeComponentClassPosition();this.container.firstElementChild;)this.component.appendChild(this.container.firstElementChild);this.component.removeChild(this.container),this.component.removeChild(this.backdrop),Object.keys(this).forEach(function(t){return e[t]=null})},e.prototype.setPosition=function(e){var t=this;this.component.classList.add(s),this.position=o.indexOf(e)>=0?e:"left";var i=1===(document.querySelectorAll("["+n+"]")||[]).length;this.removeComponentClassPosition(i),this.component.classList.add(n+"--"+this.position),this.responsive&&this.mainContent&&this.mainContent.classList.add("sidebarjs-content--"+this.position),setTimeout(function(){return t.component&&t.component.classList.remove(s)},200)},e.prototype.addAttrsEventsListeners=function(t){var n=this;this.forEachActionElement(t,function(t,i){e.elemHasListener(t)||(t.addEventListener("click",n[i],{passive:!0}),e.elemHasListener(t,!0))})},e.prototype.removeAttrsEventsListeners=function(t){var n=this;this.forEachActionElement(t,function(t,i){e.elemHasListener(t)&&(t.removeEventListener("click",n[i]),e.elemHasListener(t,!1))})},e.prototype.setSwipeGestures=function(e){if("boolean"!=typeof e)throw new Error("You provided a "+typeof e+" value but setSwipeGestures needs a boolean value.");this.nativeSwipe&&(e?this.addNativeGestures():this.removeNativeGestures(),this.nativeSwipeOpen&&(e?this.addNativeOpenGestures():this.removeNativeOpenGestures()))},e.prototype.addTransitionListener=function(){this.__wasVisible=this.isVisible(),this.container.addEventListener("transitionend",this.__onTransitionEnd,{passive:!0})},e.prototype.forEachActionElement=function(e,t){for(var i=["toggle","open","close"],s=0;s<i.length;s++)for(var o=document.querySelectorAll("["+n+"-"+i[s]+'="'+e+'"]'),r=0;r<o.length;r++)t(o[r],i[s])},e.prototype.removeComponentClassPosition=function(e){for(var t=0;t<o.length;t++)this.component.classList.remove(n+"--"+o[t]),e&&this.mainContent&&this.mainContent.classList.remove("sidebarjs-content--"+o[t])},e.prototype.hasLeftPosition=function(){return"left"===this.position},e.prototype.hasRightPosition=function(){return"right"===this.position},e.prototype.transcludeContent=function(){for(;this.component.firstChild;)this.container.appendChild(this.component.firstChild);for(;this.component.firstChild;)this.component.removeChild(this.component.firstChild);this.component.appendChild(this.container),this.component.appendChild(this.backdrop)},e.prototype.addNativeGestures=function(){this.component.addEventListener("touchstart",this.__onTouchStart,{passive:!0}),this.component.addEventListener("touchmove",this.__onTouchMove,{passive:!0}),this.component.addEventListener("touchend",this.__onTouchEnd,{passive:!0})},e.prototype.removeNativeGestures=function(){this.component.removeEventListener("touchstart",this.__onTouchStart,{passive:!0}),this.component.removeEventListener("touchmove",this.__onTouchMove,{passive:!0}),this.component.removeEventListener("touchend",this.__onTouchEnd,{passive:!0})},e.prototype.addNativeOpenGestures=function(){document.addEventListener("touchstart",this.__onSwipeOpenStart,{passive:!0}),document.addEventListener("touchmove",this.__onSwipeOpenMove,{passive:!0}),document.addEventListener("touchend",this.__onSwipeOpenEnd,{passive:!0})},e.prototype.removeNativeOpenGestures=function(){document.removeEventListener("touchstart",this.__onSwipeOpenStart,{passive:!0}),document.removeEventListener("touchmove",this.__onSwipeOpenMove,{passive:!0}),document.removeEventListener("touchend",this.__onSwipeOpenEnd,{passive:!0})},e.prototype.moveSidebar=function(e){this.component.classList.add(s),this.applyStyle(this.container,"transform","translate("+e+"px, 0)",!0),this.updateBackdropOpacity(e)},e.prototype.updateBackdropOpacity=function(e){var t=1-Math.abs(e)/this.container.clientWidth,n=t/this.backdropOpacityRatio;this.setBackdropOpacity(n)},e.prototype.setBackdropOpacity=function(e){this.applyStyle(this.backdrop,"opacity",e.toString())},e.prototype.targetElementIsBackdrop=function(e){return e.target.hasAttribute(n+"-backdrop")},e.prototype.setResponsive=function(){if(!this.responsive&&this.mainContent)throw new Error("You provide a [sidebarjs-content] element without set {responsive: true}");if(this.responsive&&!this.mainContent)throw new Error("You have set {responsive: true} without provide a [sidebarjs-content] element");this.component.classList.add("sidebarjs--responsive")},e.prototype.shouldDefineMainContent=function(e){return e?(e.setAttribute("sidebarjs-content",""),e):document.querySelector("[sidebarjs-content]")},e.prototype.applyStyle=function(e,t,n,i){this.isStyleMapSupported?e.attributeStyleMap.set(t,n):(e.style[t]=n,i&&(e.style["Webkit"+t.charAt(0).toUpperCase()+t.slice(1)]=n))},e.prototype.clearStyle=function(e){this.isStyleMapSupported?e.attributeStyleMap.clear():e.removeAttribute("style")},e.isStyleMapSupported=function(){return Boolean(window.CSS&&CSS.number)},e.create=function(e){var t=document.createElement("div");return t.setAttribute(e,""),t},e.elemHasListener=function(e,t){return e&&"boolean"==typeof t?e.sidebarjsListener=t:!!e.sidebarjsListener},e}();t.SidebarElement=r});t(i),i.SidebarElement;var s=n(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.instances={}}return e.prototype.create=function(e){void 0===e&&(e={});var t=e.component&&e.component.getAttribute("sidebarjs")||"";return this.instances[t]=new i.SidebarElement(e),this.instances[t]},e.prototype.open=function(e){void 0===e&&(e=""),this.instances[e]&&this.instances[e].open()},e.prototype.close=function(e){void 0===e&&(e=""),this.instances[e]&&this.instances[e].close()},e.prototype.toggle=function(e){void 0===e&&(e=""),this.instances[e]&&this.instances[e].toggle()},e.prototype.isVisible=function(e){return void 0===e&&(e=""),!!this.instances[e]&&this.instances[e].isVisible()},e.prototype.setPosition=function(e,t){void 0===t&&(t=""),this.instances[t]&&this.instances[t].setPosition(e)},e.prototype.elemHasListener=function(e,t){return i.SidebarElement.elemHasListener(e,t)},e.prototype.destroy=function(e){void 0===e&&(e=""),this.instances[e]&&(this.instances[e].destroy(),this.instances[e]=null,delete this.instances[e])},e}();t.SidebarService=n});t(s),s.SidebarService;var o=n(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SidebarElement=i.SidebarElement,t.SidebarService=s.SidebarService}),r=t(o),a=o.SidebarElement,d=o.SidebarService;e.default=r,e.SidebarElement=a,e.SidebarService=d,Object.defineProperty(e,"__esModule",{value:!0})}(t)}]);
//# sourceMappingURL=sidebar.js.map