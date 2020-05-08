"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// original source from: https://github.com/mrdoob/three.js/issues/10439
var THREE = require("three");
var ProgressTextureLoader = /** @class */ (function (_super) {
    __extends(ProgressTextureLoader, _super);
    function ProgressTextureLoader() {
        var _this = _super.call(this) || this;
        _this.cache = THREE.Cache;
        _this.textureLoader = new THREE.TextureLoader();
        _this.fileLoader = new THREE.FileLoader();
        // Turn on shared caching for FileLoader, ImageLoader and TextureLoader
        _this.cache.enabled = true;
        _this.fileLoader.setResponseType('blob');
        return _this;
    }
    /**
     * Three's texture loader doesn't support onProgress events, because it uses image tags under the hood.
     *
     * A relatively simple workaround is to AJAX the file into the cache with a FileLoader, create an image from the Blob,
     * then extract that into a texture with a separate TextureLoader call.
     *
     * The cache is in memory, so this will work even if the server doesn't return a cache-control header.
     */
    ProgressTextureLoader.prototype.load = function (url, onLoad, onProgress, onError) {
        var _this = this;
        /**
         * The cache is currently storing a Blob, but we need to cast it to an Image
         * or else it won't work as a texture. TextureLoader won't do this automatically.
         */
        var cacheImage = function (blob) {
            // ObjectURLs should be released as soon as is safe, to free memory
            var objUrl = URL.createObjectURL(blob);
            var image = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');
            image.onload = function () {
                _this.cache.add(url, image);
                URL.revokeObjectURL(objUrl);
                document.body.removeChild(image);
                loadImageAsTexture();
            };
            image.src = objUrl;
            image.style.visibility = 'hidden';
            document.body.appendChild(image);
        };
        var loadImageAsTexture = function () {
            _this.textureLoader.load(url, onLoad, function () { return null; }, onError);
        };
        var cached = this.cache.get(url);
        if (cached) {
            return cached;
        }
        else {
            this.fileLoader.load(url, cacheImage, onProgress, onError);
        }
    };
    return ProgressTextureLoader;
}(THREE.TextureLoader));
exports.ProgressTextureLoader = ProgressTextureLoader;
//# sourceMappingURL=ProgressTextureLoader.js.map