"use strict";
class Hora {
    constructor(novaHora, novoMinuto, novoSegundo) {
        this._hora = novaHora;
        this._minuto = novoMinuto;
        this._segundo = novoSegundo;
    }
    set hora(horinha) {
        this._hora = horinha;
    }
    set minuto(minutinho) {
        this._minuto = minutinho;
    }
    set segundo(segundinho) {
        this._segundo = segundinho;
    }
    get horaMarcada() {
        return `${this._hora}:${this._minuto}:${this._segundo}`;
    }
}
let hora = new Hora(23, 15, 59);
console.log(hora.horaMarcada);
//# sourceMappingURL=classHora.js.map