"use strict";
class Conta {
    constructor(num, saldo) {
        this.num_Conta = num;
        this.saldo_Conta = saldo;
    }
    sacar(valor) {
        this.saldo_Conta = this.saldo_Conta - valor;
    }
    depositar(valor) {
        this.saldo_Conta = this.saldo_Conta + valor;
    }
    consultar() {
        return this.saldo_Conta;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultar());
console.log(c2.consultar());
console.log(c3.consultar());
//# sourceMappingURL=Atv04_Q05.js.map