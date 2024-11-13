"use strict";
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        return this.texto + ", " + this.destinatario;
    }
}
let cumprimento = new Saudacao("Boa Tarde", "Brenda");
console.log(cumprimento.obterSaudacao());
//# sourceMappingURL=Atv04_Q06.js.map