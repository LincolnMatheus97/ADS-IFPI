package Exercicios_Poo.AtividadeExtra_02;

public class ControleDeAudio {
    private int volumeInicial = 2;

    public int aumentarVolume() {
        if (volumeInicial >= 10) {
            this.volumeInicial = 10;
        } else {
            this.volumeInicial += 1;
        }
        return volumeInicial;
    }

    public int diminuirVolume() {
        if (volumeInicial <= 0) {
            this.volumeInicial = 0;
        } else {
            this.volumeInicial -= 1;
        }
        return volumeInicial;
    }

    public int lerVolume() {
        return this.volumeInicial;
    }
}

class Main {
    public static void main(String[] args) {
        ControleDeAudio controle = new ControleDeAudio();

        controle.aumentarVolume();
        controle.aumentarVolume();

        System.out.println("Volume atual: " + controle.lerVolume());
    }
}