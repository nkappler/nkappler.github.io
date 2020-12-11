/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./styles/index.less */ "./src/styles/index.less");
__webpack_require__(/*! ./sidebar/sidebar */ "./src/sidebar/sidebar.ts");
window.onload = function () {
    if (document.location.href.indexOf("?sent") > 0) {
        var elem = document.getElementById("sent");
        elem && (elem.style.display = "block");
    }
};
ReactDOM.render(React.createElement("div", { className: "splitter" },
    React.createElement("div", { className: "item" },
        React.createElement("h1", null, "Hi there!"),
        React.createElement("p", null,
            "This website is still under construction.",
            React.createElement("br", null),
            "However, there's already a bunch to discover =)",
            React.createElement("br", null),
            "Until the rest of the website is finished, why don't you have a look at my ",
            React.createElement("span", { onClick: function () { return window.sidebar.open(); }, style: {
                    fontWeight: "bold",
                    cursor: "pointer"
                } }, "Projects?"))),
    React.createElement("div", { className: "item" },
        React.createElement("h2", null, "Contact me"),
        React.createElement("form", { action: "https://formspree.io/nikolaj-kappler@web.de", method: "POST" },
            React.createElement("input", { type: "text", name: "name", placeholder: "Your name", required: true }),
            React.createElement("input", { type: "email", name: "_replyto", placeholder: "Your email", required: true }),
            React.createElement("textarea", { name: "message", rows: 7, placeholder: "Your message", required: true }),
            React.createElement("input", { type: "hidden", name: "_subject", value: "New message from website!" }),
            React.createElement("input", { type: "hidden", name: "_next", value: "nkappler.github.io?sent" }),
            React.createElement("input", { type: "text", name: "_gotcha", style: { display: "none" } }),
            React.createElement("input", { type: "submit", value: "Send" })),
        React.createElement("p", { id: "sent", style: { display: "none" } }, "Thank you. Your message has been sent."))), document.body);


/***/ }),

/***/ "./src/sidebar/sidebar.ts":
/*!********************************!*
  !*** ./src/sidebar/sidebar.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var sidebarjs_1 = __webpack_require__(/*! sidebarjs */ "./node_modules/sidebarjs/index.js");
var attachMenu = function () {
    if (document.readyState !== "complete") {
        return;
    }
    var container = document.createElement("div");
    container.setAttribute("sidebarjs", "");
    var styles = "[sidebarjs-backdrop],[sidebarjs]{height:100%;left:0;top:0;width:100%}.sidebarjs--left[sidebarjs],[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-transform:translate(-100%);transform:translate(-100%)}.sidebarjs--right[sidebarjs],[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-transform:translate(100%);transform:translate(100%)}[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:2px 0 4px rgba(0,0,0,.2);box-shadow:2px 0 4px rgba(0,0,0,.2)}[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-2px 0 4px rgba(0,0,0,.2);box-shadow:-2px 0 4px rgba(0,0,0,.2);margin-left:auto}[sidebarjs-backdrop]{-webkit-transition:opacity .3s ease;background:#000;opacity:0;position:absolute;transition:opacity .3s ease;will-change:opacity}[sidebarjs-container]{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-transition:-webkit-transform .3s ease;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;max-width:300px;position:relative;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;width:90%;will-change:transform;z-index:1}[sidebarjs]{-webkit-transition:-webkit-transform 0s ease .3s;position:fixed;transition:-webkit-transform 0s ease .3s;transition:transform 0s ease .3s;transition:transform 0s ease .3s,-webkit-transform 0s ease .3s;z-index:9999}[sidebarjs].sidebarjs--is-visible{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-visible,[sidebarjs].sidebarjs--is-visible [sidebarjs-container]{-webkit-transform:translate(0);transform:translate(0)}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-moving [sidebarjs-backdrop],[sidebarjs].sidebarjs--is-moving [sidebarjs-container]{-webkit-transition:none;transition:none}[sidebarjs-content]{-webkit-transition:width .3s ease;min-height:100%;position:relative;transition:width .3s ease;width:100%}[sidebarjs-content].sidebarjs-content--left{margin-left:auto;margin-right:0}[sidebarjs-content].sidebarjs-content--right{margin-left:0;margin-right:auto}@media (min-width:1025px){[sidebarjs].sidebarjs--responsive{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s;width:300px}[sidebarjs].sidebarjs--responsive,[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-transform:translate(0)!important;transform:translate(0)!important}[sidebarjs].sidebarjs--responsive.sidebarjs--left{left:0;right:auto}[sidebarjs].sidebarjs--responsive.sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:1px 0 0 rgba(0,0,0,.1);box-shadow:1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive.sidebarjs--right{left:auto;right:0}[sidebarjs].sidebarjs--responsive.sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-1px 0 0 rgba(0,0,0,.1);box-shadow:-1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-box-shadow:none;box-shadow:none;max-width:none;width:100%}[sidebarjs-content]{width:-webkit-calc(100% - 300px);width:calc(100% - 300px)}[sidebarjs-content].sidebarjs-content--left.sidebarjs-content--right{margin:0 auto;width:-webkit-calc(100% - 600px);width:calc(100% - 600px)}}";
    var style = document.createElement("style");
    style.innerText = styles;
    document.head.appendChild(style);
    var styles2 = "\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-overflow-scrolling: touch;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -moz-tap-highlight-color: rgba(0, 0, 0, 0);\n        tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      body {\n        position: relative;\n        min-height: 100vh;\n        padding-top: 56px;\n      }\n\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n\n      [sidebarjs] p {\n        font-size: 16px;\n        text-align: left;\n        font-family: Arial, sans-serif;\n        color: rgba(0, 0, 0, .64);\n      }\n\n      [sidebarjs] .img {\n        display: block;\n        width: 32px;\n        min-width: 32px;\n        height: 32px;\n        min-height: 32px;\n        margin-right: 16px;\n        opacity: .8;\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n      }\n\n      .img.img-ctxmenu {\n        background-image: url('https://nkappler.github.io/ctxmenu/favicon_nc.png');\n      }\n\n      .img.home {\n        background-image: url('https://nkappler.github.io/sidebar/home.svg');\n      }\n\n      .img.slimemap {\n        background-image: url('https://nkappler.github.io/slimemap/favicon.png');\n      }\n\n      .img.centipede {\n        background-image: url('https://nkappler.github.io/Centipede/favicon.png');\n      }\n\n      .img.customWidgets {\n        background-image: url('https://widgets.nkappler.de/docs/Widgets.png');\n      }\n\n      /* \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\n                      Basic Demo\n      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n      navigation {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        position: relative;\n        padding: 12px;\n        height: 56px;\n        background: #666;\n        position: fixed;\n        width: 100%;\n        top: 0;\n        z-index: 999;\n      }\n\n      .icon {\n        position: relative;\n        z-index: 1;\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        transition: background .1s;\n      }\n\n      .icon:active {\n        background: rgba(255, 255, 255, .2);\n      }\n\n      .hamburger-icon:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: auto;\n        width: 70%;\n        height: 2px;\n        border-radius: 2px;\n        background: #FFF;\n        box-shadow: 0 -6px 0 #FFF, 0 6px 0 #FFF;\n      }\n\n      /* \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\n                    Advanced Demo\n      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n      div[sidebarjs] > * {\n        font: 300 16px/100% 'Arial', sans-serif;\n      }\n\n      [sidebarjs] h3 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n        min-height: 180px;\n        padding: 16px;\n        background: #666;\n        color: #FFF;\n        font-size: 40px;\n      }\n\n      [sidebarjs] nav {\n        overflow-x: hidden;\n        overflow-y: auto;\n      }\n\n      [sidebarjs] nav > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        flex-direction: column;\n        border-top: 1px solid rgba(0, 0, 0, .1);\n      }\n\n      [sidebarjs] nav > div:first-child {\n        border-top: none;\n      }\n\n      [sidebarjs] nav a {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -moz-align-items: center;\n        -ms-align-items: center;\n        -webkit-align-items: center;\n        align-items: center;\n        color: rgba(0, 0, 0, .64);\n        padding: 16px;\n        transition: background 0.3s ease;\n      }\n\n      [sidebarjs] nav a:active {\n        color: inherit;\n        background: rgba(0, 0, 0, .1);\n      }\n    ";
    var style2 = document.createElement("style");
    style2.innerText = styles2;
    document.head.appendChild(style2);
    var header = document.createElement("navigation");
    var toggle = document.createElement("div");
    toggle.setAttribute("sidebarjs-toggle", "");
    toggle.className = "icon hamburger-icon";
    header.appendChild(toggle);
    var menuheader = document.createElement("h3");
    menuheader.innerText = "Menu";
    var nav = document.createElement("nav");
    var home = document.createElement("a");
    home.innerHTML = '<div class="img home"></div>Home';
    home.href = "https://nkappler.github.io";
    // home.className = "img github";
    var ctxmenu = document.createElement("a");
    ctxmenu.innerHTML = '<div class="img img-ctxmenu"></div>ctxmenu.js - a context menu generator';
    ctxmenu.href = "https://nkappler.github.io/ctxmenu";
    // const slimemap = document.createElement("a");
    // slimemap.innerHTML = '<div class="img slimemap"></div>slimeMap - a Slime Chunk Finder for Minecraft';
    // slimemap.href = "https://nkappler.github.io/slimemap";
    var customWidgets = document.createElement("a");
    customWidgets.innerHTML = '<div class="img customWidgets"></div><p>Custom Widgets<br /><span style="font-size:12px">for SAP Analytics Cloud</span></p>';
    customWidgets.href = "https://widgets.nkappler.de";
    var centipede = document.createElement("a");
    centipede.innerHTML = '<div class="img centipede"></div>Centipede - an Arcade Game';
    centipede.href = "https://nkappler.github.io/Centipede";
    [home, ctxmenu, centipede, customWidgets].forEach(function (elem) { return nav.appendChild(elem); });
    [menuheader, nav].forEach(function (elem) { return container.appendChild(elem); });
    [header, container].forEach(function (elem) { return document.body.prepend(elem); });
    window.sidebar = new sidebarjs_1.SidebarElement({});
};
document.readyState === "complete" ? attachMenu() : document.addEventListener("readystatechange", attachMenu);


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less":
/*!*******************************************************************************************************************!*
  !*** ./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less ***!
  \*******************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.id, "* {\n  box-sizing: border-box;\n  color: #444;\n}\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\nbody {\n  /* Background pattern from Toptal Subtle Patterns */\n  background-image: url('./img/shattered.png');\n}\n#root {\n  height: calc(100% - 60px);\n}\n.splitter {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1500px;\n  margin: auto;\n  min-height: 100%;\n  align-items: center;\n  justify-content: space-around;\n}\n.item {\n  padding: 20px;\n  width: 100%;\n  max-width: 500px;\n}\nh1,\np {\n  text-align: center;\n  font-family: sans-serif;\n}\np {\n  font-size: 24px;\n  font-family: 'Raleway';\n}\nh1,\nh2 {\n  font-family: 'Lobster', cursive;\n  font-size: 80px;\n  margin: 10px;\n}\nh2 {\n  font-size: 40px;\n}\nimg {\n  margin: auto;\n  display: block;\n  max-width: 450px;\n  width: 100%;\n  padding-right: 20px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n}\ninput,\ntextarea {\n  border: 1px solid #666;\n  box-shadow: 0 0 10px 1px rgba(80, 80, 80, 0.5);\n  background: rgba(80, 80, 80, 0.15);\n  line-height: 30px;\n  margin: 10px;\n  padding: 0 10px;\n  resize: none;\n  height: 30px;\n  font-family: 'Raleway';\n  color: #151515;\n}\ntextarea {\n  height: auto;\n}\ninput:hover,\ninput:active,\ntextarea:hover,\ntextarea:active {\n  background: rgba(250, 250, 250, 0.1);\n}\ninput[type=submit]:hover {\n  cursor: pointer;\n}\n@media only screen and (min-width: 1000px) {\n  body:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    box-shadow: 0 0 300px 150px inset rgba(0, 0, 0, 0.3);\n    pointer-events: none;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/***/ ((module) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/sidebarjs/dist/sidebarjs.js":
/*!**************************************************!*
  !*** ./node_modules/sidebarjs/dist/sidebarjs.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*
 * SidebarJS
 * Version 5.4.0
 * https://github.com/SidebarJS/sidebarjs#readme
 */

(function (global, factory) {
	 true ? factory(exports) :
	0;
}(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var sidebarElement = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var SIDEBARJS = 'sidebarjs';
	var SIDEBARJS_CONTENT = 'sidebarjs-content';
	var IS_VISIBLE = SIDEBARJS + "--is-visible";
	var IS_MOVING = SIDEBARJS + "--is-moving";
	var LEFT_POSITION = 'left';
	var RIGHT_POSITION = 'right';
	var POSITIONS = [LEFT_POSITION, RIGHT_POSITION];
	var SidebarElement = /** @class */ (function () {
	    function SidebarElement(config) {
	        if (config === void 0) { config = {}; }
	        var _this = this;
	        this.toggle = function () {
	            _this.isVisible() ? _this.close() : _this.open();
	        };
	        this.open = function () {
	            _this.component.classList.add(IS_VISIBLE);
	            _this.setBackdropOpacity(_this.backdropOpacity);
	        };
	        this.close = function () {
	            _this.component.classList.remove(IS_VISIBLE);
	            _this.clearStyle(_this.backdrop);
	        };
	        this.__onTouchStart = function (e) {
	            _this.initialTouch = e.touches[0].pageX;
	        };
	        this.__onTouchMove = function (e) {
	            var swipeDirection = -(_this.initialTouch - e.touches[0].clientX);
	            var sidebarMovement = _this.container.clientWidth + (_this.hasLeftPosition() ? swipeDirection : -swipeDirection);
	            if (sidebarMovement <= _this.container.clientWidth) {
	                _this.touchMoveSidebar = Math.abs(swipeDirection);
	                _this.moveSidebar(swipeDirection);
	            }
	        };
	        this.__onTouchEnd = function () {
	            _this.component.classList.remove(IS_MOVING);
	            _this.clearStyle(_this.container);
	            _this.clearStyle(_this.backdrop);
	            _this.touchMoveSidebar > (_this.container.clientWidth / 3.5) ? _this.close() : _this.open();
	            _this.initialTouch = null;
	            _this.touchMoveSidebar = null;
	        };
	        this.__onSwipeOpenStart = function (e) {
	            if (_this.targetElementIsBackdrop(e)) {
	                return;
	            }
	            var touchPositionX = e.touches[0].clientX;
	            var documentTouch = _this.hasLeftPosition() ? touchPositionX : document.body.clientWidth - touchPositionX;
	            if (documentTouch < _this.documentSwipeRange) {
	                _this.__onTouchStart(e);
	            }
	        };
	        this.__onSwipeOpenMove = function (e) {
	            if (!_this.targetElementIsBackdrop(e) && _this.initialTouch && !_this.isVisible()) {
	                var documentSwiped = e.touches[0].clientX - _this.initialTouch;
	                var hasLeftPosition = _this.hasLeftPosition();
	                var swipeX = hasLeftPosition ? documentSwiped : -documentSwiped;
	                var sidebarMovement = _this.container.clientWidth - swipeX;
	                if (sidebarMovement > 0 && swipeX >= _this.documentMinSwipeX) {
	                    _this.openMovement = hasLeftPosition ? -sidebarMovement : sidebarMovement;
	                    _this.moveSidebar(_this.openMovement);
	                }
	            }
	        };
	        this.__onSwipeOpenEnd = function () {
	            if (_this.openMovement) {
	                _this.openMovement = null;
	                _this.__onTouchEnd();
	            }
	        };
	        this.__onTransitionEnd = function () {
	            var isVisible = _this.isVisible();
	            if (isVisible && !_this.__wasVisible) {
	                _this.__wasVisible = true;
	                if (_this.__emitOnOpen) {
	                    _this.__emitOnOpen();
	                }
	            }
	            else if (!isVisible && _this.__wasVisible) {
	                _this.__wasVisible = false;
	                if (_this.__emitOnClose) {
	                    _this.__emitOnClose();
	                }
	            }
	            if (_this.__emitOnChangeVisibility) {
	                _this.__emitOnChangeVisibility({ isVisible: isVisible });
	            }
	        };
	        var component = config.component, container = config.container, backdrop = config.backdrop, _a = config.documentMinSwipeX, documentMinSwipeX = _a === void 0 ? 10 : _a, _b = config.documentSwipeRange, documentSwipeRange = _b === void 0 ? 40 : _b, nativeSwipe = config.nativeSwipe, nativeSwipeOpen = config.nativeSwipeOpen, _c = config.responsive, responsive = _c === void 0 ? false : _c, mainContent = config.mainContent, _d = config.position, position = _d === void 0 ? 'left' : _d, _e = config.backdropOpacity, backdropOpacity = _e === void 0 ? 0.3 : _e, onOpen = config.onOpen, onClose = config.onClose, onChangeVisibility = config.onChangeVisibility;
	        var hasCustomTransclude = container && backdrop;
	        this.component = component || document.querySelector("[" + SIDEBARJS + "]");
	        this.container = hasCustomTransclude ? container : SidebarElement.create(SIDEBARJS + "-container");
	        this.backdrop = hasCustomTransclude ? backdrop : SidebarElement.create(SIDEBARJS + "-backdrop");
	        this.documentMinSwipeX = documentMinSwipeX;
	        this.documentSwipeRange = documentSwipeRange;
	        this.nativeSwipe = nativeSwipe !== false;
	        this.nativeSwipeOpen = nativeSwipeOpen !== false;
	        this.isStyleMapSupported = SidebarElement.isStyleMapSupported();
	        this.responsive = Boolean(responsive);
	        this.mainContent = this.shouldDefineMainContent(mainContent);
	        this.backdropOpacity = backdropOpacity;
	        this.backdropOpacityRatio = 1 / backdropOpacity;
	        this.__emitOnOpen = onOpen;
	        this.__emitOnClose = onClose;
	        this.__emitOnChangeVisibility = onChangeVisibility;
	        if (!hasCustomTransclude) {
	            try {
	                this.transcludeContent();
	            }
	            catch (e) {
	                throw new Error('You must define an element with [sidebarjs] attribute');
	            }
	        }
	        this.setSwipeGestures(true);
	        if (this.responsive || this.mainContent) {
	            this.setResponsive();
	        }
	        this.setPosition(position);
	        this.addAttrsEventsListeners(this.component.getAttribute(SIDEBARJS));
	        this.addTransitionListener();
	        this.backdrop.addEventListener('click', this.close, { passive: true });
	    }
	    SidebarElement.prototype.isVisible = function () {
	        return this.component.classList.contains(IS_VISIBLE);
	    };
	    SidebarElement.prototype.destroy = function () {
	        var _this = this;
	        this.removeNativeGestures();
	        this.container.removeEventListener('transitionend', this.__onTransitionEnd, { passive: true });
	        this.backdrop.removeEventListener('click', this.close, { passive: true });
	        this.removeNativeOpenGestures();
	        this.removeAttrsEventsListeners(this.component.getAttribute(SIDEBARJS));
	        this.removeComponentClassPosition();
	        while (this.container.firstElementChild) {
	            this.component.appendChild(this.container.firstElementChild);
	        }
	        this.component.removeChild(this.container);
	        this.component.removeChild(this.backdrop);
	        Object.keys(this).forEach(function (key) { return _this[key] = null; });
	    };
	    SidebarElement.prototype.setPosition = function (position) {
	        var _this = this;
	        this.component.classList.add(IS_MOVING);
	        this.position = POSITIONS.indexOf(position) >= 0 ? position : LEFT_POSITION;
	        var resetMainContent = (document.querySelectorAll("[" + SIDEBARJS + "]") || []).length === 1;
	        this.removeComponentClassPosition(resetMainContent);
	        this.component.classList.add(SIDEBARJS + "--" + this.position);
	        if (this.responsive && this.mainContent) {
	            this.mainContent.classList.add(SIDEBARJS_CONTENT + "--" + this.position);
	        }
	        setTimeout(function () { return _this.component && _this.component.classList.remove(IS_MOVING); }, 200);
	    };
	    SidebarElement.prototype.addAttrsEventsListeners = function (sidebarName) {
	        var _this = this;
	        this.forEachActionElement(sidebarName, function (element, action) {
	            if (!SidebarElement.elemHasListener(element)) {
	                element.addEventListener('click', _this[action], { passive: true });
	                SidebarElement.elemHasListener(element, true);
	            }
	        });
	    };
	    SidebarElement.prototype.removeAttrsEventsListeners = function (sidebarName) {
	        var _this = this;
	        this.forEachActionElement(sidebarName, function (element, action) {
	            if (SidebarElement.elemHasListener(element)) {
	                element.removeEventListener('click', _this[action]);
	                SidebarElement.elemHasListener(element, false);
	            }
	        });
	    };
	    SidebarElement.prototype.setSwipeGestures = function (value) {
	        if (typeof value !== 'boolean') {
	            throw new Error("You provided a " + typeof value + " value but setSwipeGestures needs a boolean value.");
	        }
	        if (this.nativeSwipe) {
	            value ? this.addNativeGestures() : this.removeNativeGestures();
	            if (this.nativeSwipeOpen) {
	                value ? this.addNativeOpenGestures() : this.removeNativeOpenGestures();
	            }
	        }
	    };
	    SidebarElement.prototype.addTransitionListener = function () {
	        this.__wasVisible = this.isVisible();
	        this.container.addEventListener('transitionend', this.__onTransitionEnd, { passive: true });
	    };
	    SidebarElement.prototype.forEachActionElement = function (sidebarName, func) {
	        var actions = ['toggle', 'open', 'close'];
	        for (var i = 0; i < actions.length; i++) {
	            var elements = document.querySelectorAll("[" + SIDEBARJS + "-" + actions[i] + "=\"" + sidebarName + "\"]");
	            for (var j = 0; j < elements.length; j++) {
	                func(elements[j], actions[i]);
	            }
	        }
	    };
	    SidebarElement.prototype.removeComponentClassPosition = function (resetMainContent) {
	        for (var i = 0; i < POSITIONS.length; i++) {
	            this.component.classList.remove(SIDEBARJS + "--" + POSITIONS[i]);
	            if (resetMainContent && this.mainContent) {
	                this.mainContent.classList.remove(SIDEBARJS_CONTENT + "--" + POSITIONS[i]);
	            }
	        }
	    };
	    SidebarElement.prototype.hasLeftPosition = function () {
	        return this.position === LEFT_POSITION;
	    };
	    SidebarElement.prototype.hasRightPosition = function () {
	        return this.position === RIGHT_POSITION;
	    };
	    SidebarElement.prototype.transcludeContent = function () {
	        while (this.component.firstChild) {
	            this.container.appendChild(this.component.firstChild);
	        }
	        while (this.component.firstChild) {
	            this.component.removeChild(this.component.firstChild);
	        }
	        this.component.appendChild(this.container);
	        this.component.appendChild(this.backdrop);
	    };
	    SidebarElement.prototype.addNativeGestures = function () {
	        this.component.addEventListener('touchstart', this.__onTouchStart, { passive: true });
	        this.component.addEventListener('touchmove', this.__onTouchMove, { passive: true });
	        this.component.addEventListener('touchend', this.__onTouchEnd, { passive: true });
	    };
	    SidebarElement.prototype.removeNativeGestures = function () {
	        this.component.removeEventListener('touchstart', this.__onTouchStart, { passive: true });
	        this.component.removeEventListener('touchmove', this.__onTouchMove, { passive: true });
	        this.component.removeEventListener('touchend', this.__onTouchEnd, { passive: true });
	    };
	    SidebarElement.prototype.addNativeOpenGestures = function () {
	        document.addEventListener('touchstart', this.__onSwipeOpenStart, { passive: true });
	        document.addEventListener('touchmove', this.__onSwipeOpenMove, { passive: true });
	        document.addEventListener('touchend', this.__onSwipeOpenEnd, { passive: true });
	    };
	    SidebarElement.prototype.removeNativeOpenGestures = function () {
	        document.removeEventListener('touchstart', this.__onSwipeOpenStart, { passive: true });
	        document.removeEventListener('touchmove', this.__onSwipeOpenMove, { passive: true });
	        document.removeEventListener('touchend', this.__onSwipeOpenEnd, { passive: true });
	    };
	    SidebarElement.prototype.moveSidebar = function (movement) {
	        this.component.classList.add(IS_MOVING);
	        this.applyStyle(this.container, 'transform', "translate(" + movement + "px, 0)", true);
	        this.updateBackdropOpacity(movement);
	    };
	    SidebarElement.prototype.updateBackdropOpacity = function (movement) {
	        var swipeProgress = 1 - (Math.abs(movement) / this.container.clientWidth);
	        var opacity = swipeProgress / this.backdropOpacityRatio;
	        this.setBackdropOpacity(opacity);
	    };
	    SidebarElement.prototype.setBackdropOpacity = function (opacity) {
	        this.applyStyle(this.backdrop, 'opacity', opacity.toString());
	    };
	    SidebarElement.prototype.targetElementIsBackdrop = function (e) {
	        return e.target.hasAttribute(SIDEBARJS + "-backdrop");
	    };
	    SidebarElement.prototype.setResponsive = function () {
	        if (!this.responsive && this.mainContent) {
	            throw new Error("You provide a [" + SIDEBARJS_CONTENT + "] element without set {responsive: true}");
	        }
	        if (this.responsive && !this.mainContent) {
	            throw new Error("You have set {responsive: true} without provide a [" + SIDEBARJS_CONTENT + "] element");
	        }
	        this.component.classList.add('sidebarjs--responsive');
	    };
	    SidebarElement.prototype.shouldDefineMainContent = function (mainContent) {
	        if (mainContent) {
	            mainContent.setAttribute(SIDEBARJS_CONTENT, '');
	            return mainContent;
	        }
	        else {
	            return document.querySelector("[" + SIDEBARJS_CONTENT + "]");
	        }
	    };
	    SidebarElement.prototype.applyStyle = function (el, prop, val, vendorify) {
	        if (this.isStyleMapSupported) {
	            el.attributeStyleMap.set(prop, val);
	        }
	        else {
	            el.style[prop] = val;
	            if (vendorify) {
	                el.style['Webkit' + prop.charAt(0).toUpperCase() + prop.slice(1)] = val;
	            }
	        }
	    };
	    SidebarElement.prototype.clearStyle = function (el) {
	        if (this.isStyleMapSupported) {
	            el.attributeStyleMap.clear();
	        }
	        else {
	            el.removeAttribute('style');
	        }
	    };
	    SidebarElement.isStyleMapSupported = function () {
	        return Boolean(window.CSS && CSS.number);
	    };
	    SidebarElement.create = function (element) {
	        var el = document.createElement('div');
	        el.setAttribute(element, '');
	        return el;
	    };
	    SidebarElement.elemHasListener = function (elem, value) {
	        return elem && typeof value === 'boolean' ? elem.sidebarjsListener = value : !!elem.sidebarjsListener;
	    };
	    return SidebarElement;
	}());
	exports.SidebarElement = SidebarElement;

	});

	unwrapExports(sidebarElement);
	var sidebarElement_1 = sidebarElement.SidebarElement;

	var sidebarService = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var SidebarService = /** @class */ (function () {
	    function SidebarService() {
	        this.instances = {};
	    }
	    SidebarService.prototype.create = function (options) {
	        if (options === void 0) { options = {}; }
	        var name = options.component && options.component.getAttribute('sidebarjs') || '';
	        this.instances[name] = new sidebarElement.SidebarElement(options);
	        return this.instances[name];
	    };
	    SidebarService.prototype.open = function (sidebarName) {
	        if (sidebarName === void 0) { sidebarName = ''; }
	        if (this.instances[sidebarName]) {
	            this.instances[sidebarName].open();
	        }
	    };
	    SidebarService.prototype.close = function (sidebarName) {
	        if (sidebarName === void 0) { sidebarName = ''; }
	        if (this.instances[sidebarName]) {
	            this.instances[sidebarName].close();
	        }
	    };
	    SidebarService.prototype.toggle = function (sidebarName) {
	        if (sidebarName === void 0) { sidebarName = ''; }
	        if (this.instances[sidebarName]) {
	            this.instances[sidebarName].toggle();
	        }
	    };
	    SidebarService.prototype.isVisible = function (sidebarName) {
	        if (sidebarName === void 0) { sidebarName = ''; }
	        return !!this.instances[sidebarName] && this.instances[sidebarName].isVisible();
	    };
	    SidebarService.prototype.setPosition = function (position, sidebarName) {
	        if (sidebarName === void 0) { sidebarName = ''; }
	        if (this.instances[sidebarName]) {
	            this.instances[sidebarName].setPosition(position);
	        }
	    };
	    SidebarService.prototype.elemHasListener = function (elem, value) {
	        return sidebarElement.SidebarElement.elemHasListener(elem, value);
	    };
	    SidebarService.prototype.destroy = function (sidebarName) {
	        if (sidebarName === void 0) { sidebarName = ''; }
	        if (this.instances[sidebarName]) {
	            this.instances[sidebarName].destroy();
	            this.instances[sidebarName] = null;
	            delete this.instances[sidebarName];
	        }
	    };
	    return SidebarService;
	}());
	exports.SidebarService = SidebarService;

	});

	unwrapExports(sidebarService);
	var sidebarService_1 = sidebarService.SidebarService;

	var src = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.SidebarElement = sidebarElement.SidebarElement;

	exports.SidebarService = sidebarService.SidebarService;

	});

	var index = unwrapExports(src);
	var src_1 = src.SidebarElement;
	var src_2 = src.SidebarService;

	exports.default = index;
	exports.SidebarElement = src_1;
	exports.SidebarService = src_2;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/sidebarjs/index.js":
/*!*****************************************!*
  !*** ./node_modules/sidebarjs/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/sidebarjs.js */ "./node_modules/sidebarjs/dist/sidebarjs.js");


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/***/ ((module) => {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles/index.less":
/*!*******************************!*
  !*** ./src/styles/index.less ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../node_modules/css-loader/index.js?url=false!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./src/styles/index.less");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "react":
/*!************************!*
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.tsx");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map