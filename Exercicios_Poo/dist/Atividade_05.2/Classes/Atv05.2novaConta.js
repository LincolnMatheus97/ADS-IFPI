"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cont = void 0;
class Cont {
    constructor(idConta, numeroConta, valorSaldo, nossoCliente) {
        this.idConta = idConta;
        this.numero = numeroConta;
        this.saldo = valorSaldo;
        this.cliente = nossoCliente;
        if (nossoCliente) {
            nossoCliente.contas.push(this);
        }
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, contaRemetente, valor) {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }
    toString() {
        return `Conta: ${this.numero}, Saldo: ${this.saldo}, Cliente: ${this.cliente ? this.cliente.nome : 'Nenhum'}`;
    }
}
exports.Cont = Cont;
//# sourceMappingURL=Atv05.2novaConta.js.map