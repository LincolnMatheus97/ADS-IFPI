"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Atv06Q04classNewClient_1 = require("../Questao04/Atv06Q04classNewClient");
const Atv06Q04classNewCont_1 = require("../Questao04/Atv06Q04classNewCont");
const Atv06Q05newUtils_1 = require("./Atv06Q05newUtils");
class App {
    constructor(banquinho) {
        this._banco = banquinho;
    }
    inserirConta(numeroConta) {
        let conta = new Atv06Q04classNewCont_1.Cont(numeroConta, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }
    consultarConta(numeroConta) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            return `Conta encontrada, dados: ${contaProcurada.toString()}`;
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    sacarConta(numeroConta, valorSacar) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.consultarSaldo() >= valorSacar && valorSacar > 0) {
                contaProcurada.sacar(valorSacar);
                return `Valor sacado com sucesso...`;
            }
            else {
                return `Saldo insuficiente para sacar...`;
            }
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    depositarConta(numeroConta, valorDeposito) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            contaProcurada.depositar(valorDeposito);
            return `Valor depositado com sucesso...`;
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    excluirConta(numeroConta) {
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
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    transferirEntreContas(numContaRemetente, contasDestino, valorDesejado) {
        let remetenteProcurada = this._banco.consultarConta(numContaRemetente);
        if (remetenteProcurada) {
            if (remetenteProcurada.saldo >= valorDesejado * contasDestino.length) {
                this._banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
                return `Transferência realizada com sucesso...`;
            }
            else {
                return `Saldo insuficiente para transferir...`;
            }
        }
        else {
            return `Conta de número ${numContaRemetente}, não encontrada...`;
        }
    }
    totalizarSaldos(cpf) {
        let clienteProcurado = this._banco.consultarCliente(cpf);
        if (clienteProcurado) {
            let saldoTotal = this._banco.totalizarSaldoCliente(clienteProcurado.cpf);
            return `\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`;
        }
        else {
            return `\n\rO cliente de CPF: ${cpf} não foi encontrado...`;
        }
    }
    mudarTitularidade() {
        let numeroConta = (0, Atv06Q05newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                (0, Atv06Q05newUtils_1.print)(`${contaProcurada.toString()}`);
                let escolha = (0, Atv06Q05newUtils_1.get_number)(`\n\rDeseja alterar o titular da Conta? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    let numeroCpf = (0, Atv06Q05newUtils_1.get_text)(`\n\rDigite o numero de CPF do novo Cliente Titular: `);
                    let clienteProcurado = this._banco.consultarCliente(numeroCpf);
                    if (clienteProcurado) {
                        contaProcurada.cliente.contas = this.listaContas(numeroCpf);
                        contaProcurada.cliente = clienteProcurado;
                        clienteProcurado.contas.push(contaProcurada);
                        (0, Atv06Q05newUtils_1.print)(`\n\rMudança realizada com sucesso...`);
                        (0, Atv06Q05newUtils_1.print)(`${contaProcurada.toString()}`);
                    }
                    else {
                        (0, Atv06Q05newUtils_1.print)(`\n\rCliente não encontrado...`);
                        contaProcurada.cliente.contas = this.listaContas(numeroCpf);
                        let nomeCliente = (0, Atv06Q05newUtils_1.get_text)(`\n\rDigite o nome do cliente: `);
                        let dataNasci = (0, Atv06Q05newUtils_1.get_date)(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
                        let novoCliente = this.inserirCliente(nomeCliente, numeroCpf, dataNasci);
                        novoCliente.contas.push(contaProcurada);
                        contaProcurada.cliente = novoCliente;
                        (0, Atv06Q05newUtils_1.print)(`\n\rMudança realizada com sucesso...`);
                        (0, Atv06Q05newUtils_1.print)(`${contaProcurada.toString()}`);
                    }
                }
                else {
                    return;
                }
            }
            else {
                (0, Atv06Q05newUtils_1.print)(`${contaProcurada.toString()}`);
                let escolha = (0, Atv06Q05newUtils_1.get_number)(`\n\rA conta nao possui cliente associado. Deseja associar um cliente? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    this.associarContaCliente(numeroConta, (0, Atv06Q05newUtils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `));
                }
                else {
                    return;
                }
            }
        }
        else {
            (0, Atv06Q05newUtils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }
    inserirCliente(nomeCliente, numeroCpf, dataNasci) {
        let cliente = new Atv06Q04classNewClient_1.Client(nomeCliente, numeroCpf, dataNasci);
        if (cliente) {
            this._banco.inserirCliente(cliente);
        }
        return cliente;
    }
    consultarCliente(numeroCpf) {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            return `Cliente encontrado, dados: ${clienteProcurado.toString()}`;
        }
        else {
            return `Cliente não encontrado...`;
        }
    }
    excluirCliente(numeroCpf) {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            if (clienteProcurado.contas) {
                let contasAssociadas = [];
                for (let i = 0; i < clienteProcurado.contas.length; i++) {
                    contasAssociadas.push(clienteProcurado.contas[i]);
                }
                for (let i = 0; i < contasAssociadas.length; i++) {
                    this._banco.excluirConta(contasAssociadas[i].numero);
                }
            }
            this._banco.excluirCliente(clienteProcurado.cpf);
            return `Cliente excluido com sucesso...`;
        }
        else {
            return `Cliente não encontrado...`;
        }
    }
    associarContaCliente(numeroConta, numeroCpf) {
        this._banco.associarContaCliente(numeroConta, numeroCpf);
    }
    listaContas(cpfCliente) {
        return this._banco.listarContasCliente(cpfCliente);
    }
}
exports.App = App;
//# sourceMappingURL=Atv06Q05classNewApp.js.map