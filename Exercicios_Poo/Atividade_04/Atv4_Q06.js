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
//# sourceMappingURL=Atv4_Q06.js.map