class ControleDeAudio {
    volumeInicial: number = 2;

    aumentarVolume(): number {
        if (this.volumeInicial >= 10) {
            this.volumeInicial = 10;
        } else {
            this.volumeInicial += 1;
        }

        return this.volumeInicial;
    }

    diminuirVolume(): number {
        if(this.volumeInicial <= 0) {
            this.volumeInicial = 0;
        } else {
            this.volumeInicial -= 1;
        }

        return this.volumeInicial;
    }

    lerVolume(): number {
        return this.volumeInicial;
    }
}