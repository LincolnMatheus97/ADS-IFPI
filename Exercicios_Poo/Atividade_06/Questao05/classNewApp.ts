import { Bank } from "../Questao03/classNewBank";
import { Client } from "../Questao04/classNewClient";
import { Cont } from "../Questao04/classNewCont";
import { get_date, get_number, get_text, print } from "./newUtils";

export class App {
    private _banco: Bank;

    constructor(banquinho: Bank) {
        this._banco = banquinho;
    }

    public inserirConta(numeroConta: string): void {
        let conta: Cont = new Cont(numeroConta, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }

    public consultarConta(numeroConta: string): string {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            return `Conta encontrada, dados: ${contaProcurada.toString()}`;
        } else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }

    public sacarConta(numeroConta: string, valorSacar: number): string {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if(contaProcurada.consultarSaldo() >= valorSacar && valorSacar > 0) {
                contaProcurada.sacar(valorSacar);
                return `Valor sacado com sucesso...`;
            } else {
                return `Saldo insuficiente para sacar...`;
            }
        } else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }

    public depositarConta(numeroConta: string, valorDeposito: number): string {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            contaProcurada.depositar(valorDeposito);
            return `Valor depositado com sucesso...`;
        } else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }

    public excluirConta(numeroConta: string): string {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if(contaProcurada) {
            if(contaProcurada.cliente) {
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
        let remetenteProcurada = this._banco.consultarConta(numContaRemetente);
        if(remetenteProcurada) {
            if (remetenteProcurada.saldo >= valorDesejado * contasDestino.length) {
                this._banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
                return `Transferência realizada com sucesso...`;
            } else {
                return `Saldo insuficiente para transferir...`;
            }
        } else {
            return `Conta de número ${numContaRemetente}, não encontrada...`;
        }
    }
    
    public totalizarSaldos(): void {
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            let saldoTotal = this._banco.totalizarSaldoCliente(clienteProcurado.cpf);
            print(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
        } else {
            print(`\n\rO cliente de CPF: ${numeroCpf} não foi encontrado...`);
        }
    }

    public mudarTitularidade(): void {
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                print(`${contaProcurada.toString()}`);
                let escolha = get_number(`\n\rDeseja alterar o titular da Conta? (1) - SIM, (2) - NAO: `);
                if(escolha ===  1) {
                    let numeroCpf = get_text(`\n\rDigite o numero de CPF do novo Cliente Titular: `);
                    let clienteProcurado = this._banco.consultarCliente(numeroCpf);
                       
                    if (clienteProcurado) {
                        contaProcurada.cliente.contas = this.listaContas(numeroCpf);
                        contaProcurada.cliente = clienteProcurado;
                        clienteProcurado.contas.push(contaProcurada);
                        print(`\n\rMudança realizada com sucesso...`);
                        print(`${contaProcurada.toString()}`);
                    } else {
                        print(`\n\rCliente não encontrado...`);
                        contaProcurada.cliente.contas = this.listaContas(numeroCpf);
                        let novoCliente = this.inserirCliente();
                        novoCliente.contas.push(contaProcurada);
                        contaProcurada.cliente = novoCliente;
                        print(`\n\rMudança realizada com sucesso...`);
                        print(`${contaProcurada.toString()}`);
                    }
                } else {
                    return; 
                }
            } else {
                print(`${contaProcurada.toString()}`);
                let escolha = get_number(`\n\rA conta nao possui cliente associado. Deseja associar um cliente? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    this.associarContaCliente(numeroConta, get_text(`\n\rDigite o numero de CPF do Cliente: `));
                } else {
                    return;
                }
            }
        } else {
            print(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }

    public inserirCliente(): Client {
        let idCliente = get_number(`\n\rDigite o numero de identificacao(ID) do cliente: `);
        let nomeCliente = get_text(`\n\rDigite o nome do cliente: `);
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do cliente: `);
        let dataNasci = get_date(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
    
        let cliente: Client = new Client(nomeCliente, numeroCpf, dataNasci);
        if(cliente) {
            this._banco.inserirCliente(cliente);
        }

        return cliente;
    }

    public consultarCliente(numeroCpf: string): string {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            return `Cliente encontrado, dados: ${clienteProcurado.toString()}`;
        } else {
            return `Cliente não encontrado...`;
        }
    }

    public excluirCliente(numeroCpf: string): string {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            if(clienteProcurado.contas) {
                let contasAssociadas: Cont[] = [];
                for(let i = 0; i < clienteProcurado.contas.length; i++) {
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
}