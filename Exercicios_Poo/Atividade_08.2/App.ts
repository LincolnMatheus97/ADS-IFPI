import { Bank } from "./Banco";
import { Client } from "./Cliente";
import { Cont, ContaImposto, Corrente, Poupanca } from "./Conta";
import { get_date, get_number, get_text, print } from "./Utils";
import { NumeroInvalidoError, ValorInvalidoError, ValorVazioError } from "./Validacoes";

export class App {
    private _banco: Bank;

    constructor(banquinho: Bank) {
        this._banco = banquinho;
    }

    get banco(): Bank {
        return this._banco;
    }

    set banco(banco: Bank) {
        this._banco = banco;
    }

    public inserirContaCorrente(numeroCont: string): void {
        let conta: Corrente = new Corrente(numeroCont, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }

    public inserirContaPoupanca(numeroCont: string): void {
        let conta: Poupanca = new Poupanca(numeroCont, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }

    public inserirContaImposto(numeroCont: string): void {
        let conta: ContaImposto = new ContaImposto(numeroCont, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }

    public consultarConta(numeroConta: string): { sucesso: boolean, mensagem: string } {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            return { sucesso: true, mensagem: `Conta encontrada, dados: ${contaProcurada.toString()}` };
        } else {
            return { sucesso: false, mensagem: `Conta de número ${numeroConta}, não encontrada...` };
        }
    }

    public sacarConta(numeroConta: string, valorSacar: number): string {
        try {
            this.validarValor(valorSacar);
            let contaProcurada = this._banco.consultarConta(numeroConta);
            if (contaProcurada) {
                if (contaProcurada.consultarSaldo() >= valorSacar && valorSacar > 0) {
                    contaProcurada.sacar(valorSacar);
                    return `Valor sacado com sucesso...`;
                } else {
                    return `Saldo insuficiente para sacar...`;
                }
            } else {
                return `Conta de número ${numeroConta}, não encontrada...`;
            }
        } catch (error) {
            if (error instanceof ValorInvalidoError || error instanceof ValorVazioError || error instanceof NumeroInvalidoError) {
                return error.message;
            }
            throw error;
        }
    }

    public depositarConta(numeroConta: string, valorDeposito: number): string {
        try {
            this.validarValor(valorDeposito);
            let contaProcurada = this._banco.consultarConta(numeroConta);
            if (contaProcurada) {
                contaProcurada.depositar(valorDeposito);
                return `Valor depositado com sucesso...`;
            } else {
                return `Conta de número ${numeroConta}, não encontrada...`;
            }
        } catch (error) {
            if (error instanceof ValorInvalidoError || error instanceof ValorVazioError || error instanceof NumeroInvalidoError) {
                return error.message;
            }
            throw error;
        }
    }

    public excluirConta(numeroConta: string): string {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                let listaContas = this._banco.listarContasCliente(contaProcurada.cliente.cpf);
                if (listaContas.length == 1) {
                    this._banco.excluirCliente(contaProcurada.cliente.cpf);
                    return `Cliente excluido, pois só tinha a conta ${contaProcurada.numero} associada.`;
                }
            }
            this._banco.excluirConta(contaProcurada.numero);
            return `Conta excluida com sucesso...`;
        } else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }

    public transferirEntreContas(numContaRemetente: string, contasDestino: string[], valorDesejado: number): string {
        try {
            this.validarValor(valorDesejado);
            let remetenteProcurada = this._banco.consultarConta(numContaRemetente);
            if (remetenteProcurada) {
                this._banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
                return `Transferência realizada com sucesso...`;
            } else {
                return `Conta de número ${numContaRemetente}, não encontrada...`;
            }
        } catch (error) {
            if (error instanceof ValorInvalidoError || error instanceof ValorVazioError || error instanceof NumeroInvalidoError) {
                return error.message;
            }
            throw error;
        }
    }

    public totalizarSaldos(cpf: string): void {
        let clienteProcurado = this._banco.consultarCliente(cpf);
        if (clienteProcurado) {
            let saldoTotal: number = this._banco.totalizarSaldoCliente(clienteProcurado.cpf);
            print (`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
        } else {
            print (`\n\rO cliente de CPF: ${cpf} não foi encontrado...`);
        }
    }

    public mudarTitularidade(numeroConta: string, novoCpf: string): string {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                let clienteAnterior = contaProcurada.cliente;
                let clienteProcurado = this._banco.consultarCliente(novoCpf);
                if (clienteProcurado) {
                    clienteAnterior.removerConta(contaProcurada.numero);
                    contaProcurada.cliente = clienteProcurado;
                    clienteProcurado.adicionarConta(contaProcurada);
                    return `Mudança realizada com sucesso.`;
                } else {
                    return `Cliente não encontrado. Necessário criar novo cliente.`;
                }
            } else {
                return `Conta não possui cliente associado. Necessário associar um cliente.`;
            }
        } else {
            return `Conta de número ${numeroConta}, não encontrada.`;
        }
    }

    public inserirCliente(nomeCliente: string, numeroCpf: string, dataNasci: Date): Client {
        let cliente: Client = new Client(nomeCliente, numeroCpf, dataNasci);
        if (cliente) {
            this._banco.inserirCliente(cliente);
        }

        return cliente;
    }

    public consultarCliente(numeroCpf: string): void {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            print(`Cliente encontrado, dados: ${clienteProcurado.toString()}`);
        } else {
            print(`Cliente não encontrado...`);
        }
    }

    public excluirCliente(numeroCpf: string): string {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            if (clienteProcurado.contas) {
                let contasAssociadas: Cont[] = [];
                for (let i = 0; i < clienteProcurado.contas.length; i++) {
                    contasAssociadas.push(clienteProcurado.contas[i]);
                }

                for (let i = 0; i < contasAssociadas.length; i++) {
                    this._banco.excluirConta(contasAssociadas[i].numero);
                }
            }
            this._banco.excluirCliente(clienteProcurado.cpf);
            return `Cliente excluido com sucesso...`;
        } else {
            return `Cliente não encontrado...`;
        }
    }

    public associarContaCliente(numeroConta: string, numeroCpf: string): void {
        this._banco.associarContaCliente(numeroConta, numeroCpf);
    }

    public listaContas(cpfCliente: string): Cont[] {
        return this._banco.listarContasCliente(cpfCliente);
    }

    public renderJuros(numeroConta: string): boolean {
        let confirmacao: boolean = false;
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada instanceof Poupanca) {
                contaProcurada.renderJuros();
                confirmacao = true;
                return confirmacao;
            }
            return confirmacao;
        }
        return confirmacao;
    }

    public lerArquivoDeContas(nomeArquivo: string): void {
        this._banco.lerArquivo(nomeArquivo);
    }

    public salvarArquivoDeContas(nomeArquivo: string): void {
        this._banco.salvarArquivo(nomeArquivo);
    }

    private validarValor(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError();
        }
        if (isNaN(valor)) {
            throw new NumeroInvalidoError();
        }
    }
}