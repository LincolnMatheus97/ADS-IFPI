"use strict";
class ControleDeAudio {
    constructor() {
        this.volumeInicial = 2;
    }
    aumentarVolume() {
        if (this.volumeInicial >= 10) {
            this.volumeInicial = 10;
        }
        else {
            this.volumeInicial += 1;
        }
        return this.volumeInicial;
    }
    diminuirVolume() {
        if (this.volumeInicial <= 0) {
            this.volumeInicial = 0;
        }
        else {
            this.volumeInicial -= 1;
        }
        return this.volumeInicial;
    }
    lerVolume() {
        return this.volumeInicial;
    }
}
//# sourceMappingURL=AtvExQ05.js.map