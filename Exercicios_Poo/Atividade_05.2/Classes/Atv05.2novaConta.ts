import { Client } from "./Atv05.2novoCliente";

export class Cont { 
    idConta: number;
    numero: string;
    saldo: number;
    cliente: Client | null;

    constructor(idConta: number, numeroConta: string, valorSaldo: number, nossoCliente: Client | null) {
        this.idConta = idConta;
        this.numero = numeroConta;
        this.saldo = valorSaldo;
        this.cliente = nossoCliente;

        if(nossoCliente) {
            nossoCliente.contas.push(this);
        }
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Cont, contaRemetente: Cont, valor: number): void {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }

    toString(): string {
        return `Conta: ${this.numero}, Saldo: ${this.saldo}, Cliente: ${this.cliente ? this.cliente.nome : 'Nenhum'}`;
    }
}