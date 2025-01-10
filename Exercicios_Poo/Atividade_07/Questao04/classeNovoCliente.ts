import { Cont } from "./classeNovaConta";

export class Client {
    private _idCliente: number;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Cont[] = [];

    constructor(nomeCliente: string, cpfCliente: string, dataNasci: Date) {
        this._idCliente = 0;
        this._nome = nomeCliente;
        this._cpf = cpfCliente;
        this._dataNascimento = dataNasci;
    }

    public set id(iD: number) {
        this._idCliente = iD;
    }

    public get nome(): string {
        return this._nome;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set contas(contas: Cont[]) {
        this._contas = contas;
    }

    public adicionarConta(contaProcurada: Cont): void {
        this._contas.push(contaProcurada);
    }

    public listarContas(): Cont[] {
        let copiaContas: Cont[] = [];
        for (let conta of this._contas) {
            let contaCopiada = new Cont(conta.numero, conta.saldo);
            contaCopiada.id = conta.id;
            contaCopiada.cliente = conta.cliente;
            copiaContas.push(contaCopiada);
        }

        return copiaContas;
    }

    toString(): string {
        let contasInfo = this._contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this._nome} (${this._cpf})\nContas:\n${contasInfo}`;
    }
}