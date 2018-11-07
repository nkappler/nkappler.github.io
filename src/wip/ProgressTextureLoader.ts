// original source from: https://github.com/mrdoob/three.js/issues/10439
import * as THREE from "three";

export class ProgressTextureLoader extends THREE.TextureLoader {
    private cache = THREE.Cache;
    private textureLoader = new THREE.TextureLoader();
    private fileLoader = new THREE.FileLoader();

    public constructor() {
        super();
        // Turn on shared caching for FileLoader, ImageLoader and TextureLoader
        this.cache.enabled = true;
        this.fileLoader.setResponseType('blob');
    }

    /**
     * Three's texture loader doesn't support onProgress events, because it uses image tags under the hood.
     *
     * A relatively simple workaround is to AJAX the file into the cache with a FileLoader, create an image from the Blob,
     * then extract that into a texture with a separate TextureLoader call.
     *
     * The cache is in memory, so this will work even if the server doesn't return a cache-control header.
     */
    public load(url: string, onLoad?: (texture: THREE.Texture) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): null | THREE.Texture {
        /**
         * The cache is currently storing a Blob, but we need to cast it to an Image
         * or else it won't work as a texture. TextureLoader won't do this automatically.
         */
        const cacheImage = (blob: string | ArrayBuffer) => {
            // ObjectURLs should be released as soon as is safe, to free memory
            const objUrl = URL.createObjectURL(blob);
            const image = document.createElementNS('http://www.w3.org/1999/xhtml', 'img') as HTMLImageElement;

            image.onload = () => {
                this.cache.add(url, image);
                URL.revokeObjectURL(objUrl);
                document.body.removeChild(image);
                loadImageAsTexture();
            };

            image.src = objUrl;
            image.style.visibility = 'hidden';
            document.body.appendChild(image);
        };

        const loadImageAsTexture = () => {
            this.textureLoader.load(url, onLoad, () => null, onError);
        };

        const cached = this.cache.get(url);
        if (cached) {
            return cached;
        } else {
            this.fileLoader.load(url, cacheImage, onProgress, onError);
        }
    }
}
