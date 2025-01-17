import { Bank } from "./Atv05.2novoBanco";
import { Client } from "./Atv05.2novoCliente";
import { Cont } from "./Atv05.2novaConta";
import { get_date, get_number, get_text, print } from "../Atv05.2utils";

export class App {
    banco: Bank;

    constructor(banquinho: Bank) {
        this.banco = banquinho;
    }

    inserirConta(): any {
        let idConta = get_number(`\n\rDigite o numero de identificacao(ID) da conta: `);
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
    
        let conta: Cont = new Cont(idConta, numeroConta, 0, null);
        if (conta) {
            this.banco.inserirConta(conta);
        }
    }

    consultarConta(): any {
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
        let contaProcurada = this.banco.consultarConta(numeroConta);
        if (contaProcurada) {
            print(`\n\rConta encontrada, dados: ${contaProcurada.toString()}`);
        } else {
            print(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }

    sacarConta(): any {
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
        let valorSacar = get_number(`\n\rDigite o valor que deseja sacar: `);
        let contaProcurada = this.banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if(contaProcurada.consultarSaldo() >= valorSacar && valorSacar > 0) {
                contaProcurada.sacar(valorSacar);
                print(`\n\rValor sacado com sucesso...`);
            } else {
                print(`\n\rSaldo insuficiente para sacar...`);
            }
        } else {
            print(`Conta de número ${numeroConta}, não encontrada...`);
        }
    }

    depositarConta(): any {
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
        let valorDeposito = get_number(`\n\rDigite o valor que deseja depositar: `);
        let contaProcurada = this.banco.consultarConta(numeroConta);
        if(contaProcurada) {
            contaProcurada.depositar(valorDeposito);
            print(`\n\rValor depositado com sucesso...`);
        } else {
            print(`Conta de número ${numeroConta}, não encontrada...`);
        }
    }

    excluirConta(): any {
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
        let contaProcurada = this.banco.consultarConta(numeroConta);
        if(contaProcurada) {
            if(contaProcurada.cliente) {
                let listaContas = this.banco.listarContasCliente(contaProcurada.cliente.cpf);
                if (listaContas.length == 1) {
                    this.banco.excluirCliente(contaProcurada.cliente.cpf);
                    print(`\n\rCliente excluido, pois só tinha a conta ${contaProcurada.numero} associada.`);
                }
            }
            this.banco.excluirConta(contaProcurada.numero);
            print(`\n\rConta excluida com sucesso...`);
    
        } else {
            print(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }

    transferirEntreContas(): any {
        let contasDestino: string[] = [];
        let numContaRemetente = get_text(`\n\rDigite o numero da conta, de onde enviara o dinheiro: `);
        let remetenteProcurada = this.banco.consultarConta(numContaRemetente);
        if(remetenteProcurada) {
            let quantidadeContas = get_number(`\n\rDigite para quantas contas desejar transferir: `);
            for (let i = 0; i < quantidadeContas; i++) {
                let numContaDestino = get_text(`\n\rDigite o numero da conta, que recebera o dinheiro: `);
                let destinoProcurada = this.banco.consultarConta(numContaDestino);
                if(destinoProcurada) {
                    contasDestino.push(destinoProcurada.numero);
                } else {
                    print(`\n\rConta de número ${numContaDestino}, não encontrada...`);
                }
            }
            let valorDesejado = get_number(`\n\rDigite o valor que deseja depositar: `);
            if (remetenteProcurada.saldo >= valorDesejado * quantidadeContas) {
                this.banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
                print(`\n\rTransferência realizada com sucesso...`);
            } else {
                print(`\n\rSaldo insuficiente para transferir...`);
            }
        } else {
            print(`\n\rConta de número ${numContaRemetente}, não encontrada...`);
        }
    }
    
    totalizarSaldos(): void {
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
        let clienteProcurado = this.banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            let saldoTotal = this.banco.totalizarSaldoCliente(clienteProcurado.cpf);
            print(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
        } else {
            print(`\n\rO cliente de CPF: ${numeroCpf} não foi encontrado...`);
        }
    }

    mudarTitularidade(): void {
        let numeroConta = get_text(`\n\rDigite o numero da conta: `);
        let contaProcurada = this.banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                print(`${contaProcurada.toString()}`);
                let escolha = get_number(`\n\rDeseja alterar o titular da Conta? (1) - SIM, (2) - NAO: `);
                if(escolha ===  1) {
                    let numeroCpf = get_text(`\n\rDigite o numero de CPF do novo Cliente Titular: `);
                    let clienteProcurado = this.banco.consultarCliente(numeroCpf);
                       
                    if (clienteProcurado) {
                        contaProcurada.cliente.contas = this.listaContas(contaProcurada);
                        contaProcurada.cliente = clienteProcurado;
                        clienteProcurado.contas.push(contaProcurada);
                        print(`\n\rMudança realizada com sucesso...`);
                        print(`${contaProcurada.toString()}`);
                    } else {
                        print(`\n\rCliente não encontrado...`);
                        contaProcurada.cliente.contas = this.listaContas(contaProcurada);
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
                    this.associarContaCliente();
                } else {
                    return;
                }
            }
        } else {
            print(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }

    inserirCliente(): Client {
        let idCliente = get_number(`\n\rDigite o numero de identificacao(ID) do cliente: `);
        let nomeCliente = get_text(`\n\rDigite o nome do cliente: `);
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do cliente: `);
        let dataNasci = get_date(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
    
        let cliente: Client = new Client(idCliente, nomeCliente, numeroCpf, dataNasci);
        if(cliente) {
            this.banco.inserirCliente(cliente);
        }

        return cliente;
    }

    consultarCliente(): any {
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
        let clienteProcurado = this.banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            print(`\n\rCliente encontrado, dados: ${clienteProcurado.toString()}`);
        } else {
            print(`\n\rCliente não encontrado...`);
        }
    }

    excluirCliente(): any {
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
        let clienteProcurado = this.banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            if(clienteProcurado.contas) {
                let contasAssociadas: Cont[] = [];
                for(let i = 0; i < clienteProcurado.contas.length; i++) {
                    contasAssociadas.push(clienteProcurado.contas[i]);
                }
    
                for (let i = 0; i < contasAssociadas.length; i++) {
                    this.banco.excluirConta(contasAssociadas[i].numero);
                }
                print(`\n\rConta(s) associadas excluida com sucesso...`);
            }
            this.banco.excluirCliente(clienteProcurado.cpf);
            print(`\n\rCliente excluido com sucesso...`);
    
        } else {
            print(`\n\rCliente não encontrado...`);
        }
    }

    associarContaCliente(): any {
        let numeroConta = get_text(`\n\rDigite o numero da conta que deseja associar: `);
        let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
        this.banco.associarContaCliente(numeroConta, numeroCpf);
    }

    listaContas(contaProcurada: any): any {
        let listaContas: Cont[] = this.banco.listarContasCliente(contaProcurada.cliente?.cpf);
            for (let i = 0; i < listaContas.length; i++) {
                if (listaContas[i].numero === contaProcurada.numero && listaContas.length > 1) {
                    listaContas[i] = listaContas[i + 1];
                } else {
                    listaContas.pop();
            }
        }
        return listaContas;
    }
}