import { Client } from "../Questao04/Atv06Q04classNewClient";
import { Cont } from "../Questao04/Atv06Q04classNewCont";

export class Bank {
    private _contas: Cont[];
    private _clientes: Client[];

    constructor() {
        this._contas = [];
        this._clientes = [];
    }

    public inserirConta(conta: Cont): void {
        conta.id = this._contas.length + 1;
        this._contas.push(conta);
    }

    public inserirCliente(cliente: Client): void {
        cliente.id = this._clientes.length + 1;
        this._clientes.push(cliente);
    }

    public consultarCliente(cpfCliente: string): Client {
        let clienteProcurado!: Client;

        for(let cliente of this._clientes) {
            if(cliente.cpf == cpfCliente) {
                clienteProcurado = cliente;
                break;
            }
        }

        return clienteProcurado;
    }

    public consultarConta(numeroConta: string): Cont {
        let contaProcurada!: Cont;

        for(let conta of this._contas) {
            if(conta.numero === numeroConta) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada= this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);

        contaProcurada.cliente = clienteProcurado;
        clienteProcurado.adicionarConta(contaProcurada);
    }

    public listarContasCliente(cpfCliente: string): Cont[] {
        let clienteProcurado: Client = this.consultarCliente(cpfCliente);
        let lista_Contas: Cont[] = [];
        
        if (clienteProcurado) {
            lista_Contas = clienteProcurado.listarContas();
        }

        return lista_Contas;
    }

    public totalizarSaldoCliente(cpfCliente: string): number {
        let valorTotal_Contas = 0;
        let lista_Contas = this.listarContasCliente(cpfCliente);

        lista_Contas.forEach(conta => {
            valorTotal_Contas += conta.saldo;
        });

        return valorTotal_Contas;
    }

    private consultarPorIndiceConta(numero: string): number {
        let indiceProcurado: number = -1;

        for(let i = 0; i < this._contas.length; i++) {
            if(this._contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    private consultarPorIndiceCliente(_cpf: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this._clientes.length; i++) {
            if(this._clientes[i].cpf === _cpf) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    public excluirCliente(_cpf: string): void {
        let indiceProcurado: number = this.consultarPorIndiceCliente(_cpf);

        if(indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._clientes.length - 1; i++) {
                this._clientes[i] = this._clientes[i + 1];
            }
            this._clientes.pop();
        }
    }

    public excluirConta(numero: string): void {
        let indiceProcurado: number = this.consultarPorIndiceConta(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    public depositar(numero: string, valor: number): void {
        let contaProcurada: Cont = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    public alterar(conta: Cont): void {
        let contaProcurada: Cont = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    public transferir(valor: number, contaRemetente: Cont, ..._contasDestino: string[]): void {
        for(let i = 0; i < _contasDestino.length; i++) {
            let contaProcurada = this.consultarConta(_contasDestino[i]);
            contaProcurada.transferir(contaProcurada, contaRemetente, valor);
        }
    }

    public quantidade_Contas(): number {
        let quantidade: number = 0;

        for(let i = 0; i < this._contas.length; i++) {
            quantidade++;
        }

        return quantidade;
    }

    public totalDinheiro(): number {
        let total: number = 0;

        for (let i = 0; i < this._contas.length; i++) {
            total += this._contas[i].saldo;
        }

        return total;
    }

    public mediaSaldo_Contas(): string {
        let quantidade_Contas: number = this.quantidade_Contas();
        let totalDinheiro: number = this.totalDinheiro();

        let mediaSaldo: number = totalDinheiro / quantidade_Contas;

        return mediaSaldo.toFixed(2);
    }
}