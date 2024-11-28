"use strict";
class ContaModificada {
    constructor(num, saldo) {
        this.num_Conta = num;
        this.saldo_Conta = saldo;
    }
    sacarValor(valor) {
        if (valor >= this.saldo_Conta) {
            this.saldo_Conta = this.saldo_Conta - valor;
            return true;
        }
        return false;
    }
    depositarValor(valor) {
        if (valor > 0) {
            this.saldo_Conta = this.saldo_Conta + valor;
            return true;
        }
        return false;
    }
    consultarValor() {
        return this.saldo_Conta;
    }
    transferirValor(contaDestino, valor) {
        if (this.sacarValor(valor)) {
            contaDestino.depositarValor(valor);
            return true;
        }
        return false;
    }
}
let conta11 = new ContaModificada("1", 50);
let conta22 = new ContaModificada("2", 150);
conta11.sacarValor(50);
if (conta11.transferirValor(conta22, 10)) {
    console.log(`A transferencia falhou, Saldo Insuficiente!`);
}
else {
    console.log(`A transferencia concluida!`);
}
//# sourceMappingURL=Atv04_Q09.js.map