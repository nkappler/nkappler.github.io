/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sidebar/sidebar.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sidebarjs/dist/sidebarjs.js":
/*!**************************************************!*\
  !*** ./node_modules/sidebarjs/dist/sidebarjs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * SidebarJS
 * Version 5.4.0
 * https://github.com/SidebarJS/sidebarjs#readme
 */

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
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
/*!*****************************************!*\
  !*** ./node_modules/sidebarjs/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/sidebarjs.js */ "./node_modules/sidebarjs/dist/sidebarjs.js");


/***/ }),

/***/ "./src/sidebar/sidebar.ts":
/*!********************************!*\
  !*** ./src/sidebar/sidebar.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sidebarjs_1 = __webpack_require__(/*! sidebarjs */ "./node_modules/sidebarjs/index.js");
var attachMenu = function () {
    if (document.readyState !== "complete") {
        return;
    }
    var container = document.createElement("div");
    container.setAttribute("sidebarjs", undefined);
    var styles = "[sidebarjs-backdrop],[sidebarjs]{height:100%;left:0;top:0;width:100%}.sidebarjs--left[sidebarjs],[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-transform:translate(-100%);transform:translate(-100%)}.sidebarjs--right[sidebarjs],[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-transform:translate(100%);transform:translate(100%)}[sidebarjs].sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:2px 0 4px rgba(0,0,0,.2);box-shadow:2px 0 4px rgba(0,0,0,.2)}[sidebarjs].sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-2px 0 4px rgba(0,0,0,.2);box-shadow:-2px 0 4px rgba(0,0,0,.2);margin-left:auto}[sidebarjs-backdrop]{-webkit-transition:opacity .3s ease;background:#000;opacity:0;position:absolute;transition:opacity .3s ease;will-change:opacity}[sidebarjs-container]{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-transition:-webkit-transform .3s ease;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;max-width:300px;position:relative;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;width:90%;will-change:transform;z-index:1}[sidebarjs]{-webkit-transition:-webkit-transform 0s ease .3s;position:fixed;transition:-webkit-transform 0s ease .3s;transition:transform 0s ease .3s;transition:transform 0s ease .3s,-webkit-transform 0s ease .3s;z-index:9999}[sidebarjs].sidebarjs--is-visible{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-visible,[sidebarjs].sidebarjs--is-visible [sidebarjs-container]{-webkit-transform:translate(0);transform:translate(0)}[sidebarjs].sidebarjs--is-moving,[sidebarjs].sidebarjs--is-moving [sidebarjs-backdrop],[sidebarjs].sidebarjs--is-moving [sidebarjs-container]{-webkit-transition:none;transition:none}[sidebarjs-content]{-webkit-transition:width .3s ease;min-height:100%;position:relative;transition:width .3s ease;width:100%}[sidebarjs-content].sidebarjs-content--left{margin-left:auto;margin-right:0}[sidebarjs-content].sidebarjs-content--right{margin-left:0;margin-right:auto}@media (min-width:1025px){[sidebarjs].sidebarjs--responsive{-webkit-transition:-webkit-transform 0s ease 0s;transition:-webkit-transform 0s ease 0s;transition:transform 0s ease 0s;transition:transform 0s ease 0s,-webkit-transform 0s ease 0s;width:300px}[sidebarjs].sidebarjs--responsive,[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-transform:translate(0)!important;transform:translate(0)!important}[sidebarjs].sidebarjs--responsive.sidebarjs--left{left:0;right:auto}[sidebarjs].sidebarjs--responsive.sidebarjs--left [sidebarjs-container]{-webkit-box-shadow:1px 0 0 rgba(0,0,0,.1);box-shadow:1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive.sidebarjs--right{left:auto;right:0}[sidebarjs].sidebarjs--responsive.sidebarjs--right [sidebarjs-container]{-webkit-box-shadow:-1px 0 0 rgba(0,0,0,.1);box-shadow:-1px 0 0 rgba(0,0,0,.1)}[sidebarjs].sidebarjs--responsive [sidebarjs-container]{-webkit-box-shadow:none;box-shadow:none;max-width:none;width:100%}[sidebarjs-content]{width:-webkit-calc(100% - 300px);width:calc(100% - 300px)}[sidebarjs-content].sidebarjs-content--left.sidebarjs-content--right{margin:0 auto;width:-webkit-calc(100% - 600px);width:calc(100% - 600px)}}";
    var style = document.createElement("style");
    style.innerText = styles;
    document.head.appendChild(style);
    var styles2 = "\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-overflow-scrolling: touch;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -moz-tap-highlight-color: rgba(0, 0, 0, 0);\n        tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      body {\n        position: relative;\n        min-height: 100vh;\n      }\n\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n\n      [sidebarjs] .img {\n        display: block;\n        width: 32px;\n        min-width: 32px;\n        height: 32px;\n        min-height: 32px;\n        margin-right: 16px;\n        opacity: .8;\n        background-position: center;\n        background-size: cover;\n        background-repeat: no-repeat;\n      }\n\n      .img.img-ctxmenu {\n        background-image: url('https://nkappler.github.io/ctxmenu/favicon_nc.png');\n      }\n\n      .img.home {\n        background-image: url('https://nkappler.github.io/dist/sidebar/home.svg');\n      }\n\n      .img.slimemap {\n        background-image: url('https://nkappler.github.io/slimemap/favicon.png');\n      }\n\n      /* \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\n                      Basic Demo\n      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n      header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        position: relative;\n        padding: 12px;\n        height: 56px;\n        background: #666;\n      }\n\n      .icon {\n        position: relative;\n        z-index: 1;\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        transition: background .1s;\n      }\n\n      .icon:active {\n        background: rgba(255, 255, 255, .2);\n      }\n\n      .hamburger-icon:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: auto;\n        width: 70%;\n        height: 2px;\n        border-radius: 2px;\n        background: #FFF;\n        box-shadow: 0 -6px 0 #FFF, 0 6px 0 #FFF;\n      }\n\n      /* \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\n                    Advanced Demo\n      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013 */\n      div[sidebarjs] > * {\n        font: 300 16px/100% 'Arial', sans-serif;\n      }\n\n      [sidebarjs] h3 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n        min-height: 180px;\n        padding: 16px;\n        background: #666;\n        color: #FFF;\n        font-size: 40px;\n      }\n\n      [sidebarjs] nav {\n        overflow-x: hidden;\n        overflow-y: auto;\n      }\n\n      [sidebarjs] nav > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        flex-direction: column;\n        border-top: 1px solid rgba(0, 0, 0, .1);\n      }\n\n      [sidebarjs] nav > div:first-child {\n        border-top: none;\n      }\n\n      [sidebarjs] nav a {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -moz-align-items: center;\n        -ms-align-items: center;\n        -webkit-align-items: center;\n        align-items: center;\n        color: rgba(0, 0, 0, .64);\n        padding: 16px;\n        transition: background 0.3s ease;\n      }\n\n      [sidebarjs] nav a:active {\n        color: inherit;\n        background: rgba(0, 0, 0, .1);\n      }\n\n      @media (min-width: 1025px) {\n        [sidebarjs-toggle=\"rightSidebarName\"] {\n          margin-left: auto;\n        }\n\n        [sidebarjs-toggle=\"leftSidebarName\"], [sidebarjs-toggle=\"\"] {\n          display: none;\n        }\n      }\n    ";
    var style2 = document.createElement("style");
    style2.innerText = styles2;
    document.head.appendChild(style2);
    var header = document.createElement("header");
    var toggle = document.createElement("div");
    toggle.setAttribute("sidebarjs-toggle", undefined);
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
    var slimemap = document.createElement("a");
    slimemap.innerHTML = '<div class="img slimemap"></div>slimeMap - a Slime Chunk Finder for Minecraft';
    slimemap.href = "https://nkappler.github.io/slimemap";
    [home, ctxmenu, slimemap].forEach(function (elem) { return nav.appendChild(elem); });
    [menuheader, nav].forEach(function (elem) { return container.appendChild(elem); });
    [header, container].forEach(function (elem) { return document.body.prepend(elem); });
    window.sidebar = new sidebarjs_1.SidebarElement();
};
document.readyState === "complete" ? attachMenu() : document.addEventListener("readystatechange", attachMenu);


/***/ })

/******/ });
//# sourceMappingURL=sidebar.js.map