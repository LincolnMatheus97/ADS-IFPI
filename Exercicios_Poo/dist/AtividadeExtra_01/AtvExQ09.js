"use strict";
class SituacaoFinanceira {
    constructor() {
        this.valorCredito = 0;
        this.valorDebito = 0;
    }
    calcular_Saldo() {
        return this.valorCredito - this.valorDebito;
    }
}
let situacaofinanceira;
situacaofinanceira = new SituacaoFinanceira();
situacaofinanceira.valorCredito = 1790;
situacaofinanceira.valorDebito = 755.55;
console.log(`O valor do saldo da conta é: R$ ${situacaofinanceira.calcular_Saldo()}`);
//# sourceMappingURL=AtvExQ09.js.map