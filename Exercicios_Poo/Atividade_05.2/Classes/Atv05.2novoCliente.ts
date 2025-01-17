import { Cont } from "./Atv05.2novaConta";

export class Client {
    idCliente: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Cont[] = [];

    constructor(iD: number, nomeCliente: string, cpfCliente: string, dataNasci: Date) {
        this.idCliente = iD;
        this.nome = nomeCliente;
        this.cpf = cpfCliente;
        this.dataNascimento = dataNasci;
    }

    toString(): string {
        let contasInfo = this.contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this.nome} (${this.cpf})\nContas:\n${contasInfo}`;
    }
}