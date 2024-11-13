class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor (valorForca: number, valorNivel: number, pontosAtuais: number) {
        this.forca = valorForca;
        this.nivel = valorNivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number{
        return this.forca * this.nivel;
    }

    atacar(Jogador: Jogador): void{
        if (Jogador.estaVivo()) {
            Jogador.pontosAtuais = Jogador.pontosAtuais - this.calcularAtaque();
        }
    }

    estaVivo(): boolean {
        if (this.pontosAtuais > 0) {
            return true;
        }
        return false;
    }

    toString(): string {
        return `>>>>> Forca: ${this.forca}, Nivel: ${this.nivel} e Pontos: ${this.pontosAtuais}.`;
    }
}

let jogador1 = new Jogador(55, 50, 5500);
let jogador2 = new Jogador(40, 45, 4000);

jogador1.atacar(jogador2);
jogador2.atacar(jogador1);

if (jogador1.pontosAtuais > jogador2.pontosAtuais) {
    console.log(`Pontos do Jogador 1 é maior! Valor:${jogador1.pontosAtuais}`);
} else if (jogador2.pontosAtuais > jogador1.pontosAtuais) {
    console.log(`Pontos do Jogador 2 é maior! Valor:${jogador2.pontosAtuais}`);
} else {
    console.log(`Pontos dos Jogadores estão empatados"`);
}

console.log(`Status Jogador1: ${jogador1.toString()}`);
console.log(`Status Jogador2: ${jogador2.toString()}`);