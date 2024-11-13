"use strict";
class Equipamento {
    constructor(valor) {
        this.ligado = valor;
    }
    liga() {
        if (!this.ligado) {
            this.ligado = true;
        }
        else {
            console.log("O equipamento já está Ligado!");
        }
    }
    desliga() {
        if (this.ligado) {
            this.ligado = false;
        }
        else {
            console.log("O equipamento já está Desligado!");
        }
    }
    inverter() {
        if (this.ligado) {
            this.desliga();
        }
        else {
            this.liga();
        }
    }
    estaLigado() {
        console.log(this.ligado);
    }
}
let equip = new Equipamento(false);
equip.liga();
equip.estaLigado();
equip.inverter();
equip.estaLigado();
equip.desliga();
//# sourceMappingURL=Atv4_Q08.js.map