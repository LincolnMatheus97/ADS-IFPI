"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const classNewClient_1 = require("../Questao04/classNewClient");
const classNewCont_1 = require("../Questao04/classNewCont");
const newUtils_1 = require("./newUtils");
class App {
    constructor(banquinho) {
        this._banco = banquinho;
    }
    inserirConta() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let conta = new classNewCont_1.Cont(numeroConta, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }
    consultarConta() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            (0, newUtils_1.print)(`\n\rConta encontrada, dados: ${contaProcurada.toString()}`);
        }
        else {
            (0, newUtils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }
    sacarConta() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let valorSacar = (0, newUtils_1.get_number)(`\n\rDigite o valor que deseja sacar: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            "";
            if (contaProcurada.consultarSaldo() >= valorSacar && valorSacar > 0) {
                contaProcurada.sacar(valorSacar);
                (0, newUtils_1.print)(`\n\rValor sacado com sucesso...`);
            }
            else {
                (0, newUtils_1.print)(`\n\rSaldo insuficiente para sacar...`);
            }
        }
        else {
            (0, newUtils_1.print)(`Conta de número ${numeroConta}, não encontrada...`);
        }
    }
    depositarConta() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let valorDeposito = (0, newUtils_1.get_number)(`\n\rDigite o valor que deseja depositar: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            contaProcurada.depositar(valorDeposito);
            (0, newUtils_1.print)(`\n\rValor depositado com sucesso...`);
        }
        else {
            (0, newUtils_1.print)(`Conta de número ${numeroConta}, não encontrada...`);
        }
    }
    excluirConta() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                let listaContas = this._banco.listarContasCliente(contaProcurada.cliente.cpf);
                if (listaContas.length == 1) {
                    this._banco.excluirCliente(contaProcurada.cliente.cpf);
                    (0, newUtils_1.print)(`\n\rCliente excluido, pois só tinha a conta ${contaProcurada.numero} associada.`);
                }
            }
            this._banco.excluirConta(contaProcurada.numero);
            (0, newUtils_1.print)(`\n\rConta excluida com sucesso...`);
        }
        else {
            (0, newUtils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }
    transferirEntreContas() {
        let contasDestino = [];
        let numContaRemetente = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta, de onde enviara o dinheiro: `);
        let remetenteProcurada = this._banco.consultarConta(numContaRemetente);
        if (remetenteProcurada) {
            let quantidadeContas = (0, newUtils_1.get_number)(`\n\rDigite para quantas contas desejar transferir: `);
            for (let i = 0; i < quantidadeContas; i++) {
                let numContaDestino = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta, que recebera o dinheiro: `);
                let destinoProcurada = this._banco.consultarConta(numContaDestino);
                if (destinoProcurada) {
                    contasDestino.push(destinoProcurada.numero);
                }
                else {
                    (0, newUtils_1.print)(`\n\rConta de número ${numContaDestino}, não encontrada...`);
                }
            }
            let valorDesejado = (0, newUtils_1.get_number)(`\n\rDigite o valor que deseja depositar: `);
            if (remetenteProcurada.saldo >= valorDesejado * quantidadeContas) {
                this._banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
                (0, newUtils_1.print)(`\n\rTransferência realizada com sucesso...`);
            }
            else {
                (0, newUtils_1.print)(`\n\rSaldo insuficiente para transferir...`);
            }
        }
        else {
            (0, newUtils_1.print)(`\n\rConta de número ${numContaRemetente}, não encontrada...`);
        }
    }
    totalizarSaldos() {
        let numeroCpf = (0, newUtils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            let saldoTotal = this._banco.totalizarSaldoCliente(clienteProcurado.cpf);
            (0, newUtils_1.print)(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
        }
        else {
            (0, newUtils_1.print)(`\n\rO cliente de CPF: ${numeroCpf} não foi encontrado...`);
        }
    }
    mudarTitularidade() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                (0, newUtils_1.print)(`${contaProcurada.toString()}`);
                let escolha = (0, newUtils_1.get_number)(`\n\rDeseja alterar o titular da Conta? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    let numeroCpf = (0, newUtils_1.get_text)(`\n\rDigite o numero de CPF do novo Cliente Titular: `);
                    let clienteProcurado = this._banco.consultarCliente(numeroCpf);
                    if (clienteProcurado) {
                        contaProcurada.cliente.contas = this.listaContas(contaProcurada);
                        contaProcurada.cliente = clienteProcurado;
                        clienteProcurado.contas.push(contaProcurada);
                        (0, newUtils_1.print)(`\n\rMudança realizada com sucesso...`);
                        (0, newUtils_1.print)(`${contaProcurada.toString()}`);
                    }
                    else {
                        (0, newUtils_1.print)(`\n\rCliente não encontrado...`);
                        contaProcurada.cliente.contas = this.listaContas(contaProcurada);
                        let novoCliente = this.inserirCliente();
                        novoCliente.contas.push(contaProcurada);
                        contaProcurada.cliente = novoCliente;
                        (0, newUtils_1.print)(`\n\rMudança realizada com sucesso...`);
                        (0, newUtils_1.print)(`${contaProcurada.toString()}`);
                    }
                }
                else {
                    return;
                }
            }
            else {
                (0, newUtils_1.print)(`${contaProcurada.toString()}`);
                let escolha = (0, newUtils_1.get_number)(`\n\rA conta nao possui cliente associado. Deseja associar um cliente? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    this.associarContaCliente();
                }
                else {
                    return;
                }
            }
        }
        else {
            (0, newUtils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }
    inserirCliente() {
        let idCliente = (0, newUtils_1.get_number)(`\n\rDigite o numero de identificacao(ID) do cliente: `);
        let nomeCliente = (0, newUtils_1.get_text)(`\n\rDigite o nome do cliente: `);
        let numeroCpf = (0, newUtils_1.get_text)(`\n\rDigite o numero de CPF do cliente: `);
        let dataNasci = (0, newUtils_1.get_date)(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
        let cliente = new classNewClient_1.Client(nomeCliente, numeroCpf, dataNasci);
        if (cliente) {
            this._banco.inserirCliente(cliente);
        }
        return cliente;
    }
    consultarCliente() {
        let numeroCpf = (0, newUtils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            (0, newUtils_1.print)(`\n\rCliente encontrado, dados: ${clienteProcurado.toString()}`);
        }
        else {
            (0, newUtils_1.print)(`\n\rCliente não encontrado...`);
        }
    }
    excluirCliente() {
        let numeroCpf = (0, newUtils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
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
                (0, newUtils_1.print)(`\n\rConta(s) associadas excluida com sucesso...`);
            }
            this._banco.excluirCliente(clienteProcurado.cpf);
            (0, newUtils_1.print)(`\n\rCliente excluido com sucesso...`);
        }
        else {
            (0, newUtils_1.print)(`\n\rCliente não encontrado...`);
        }
    }
    associarContaCliente() {
        let numeroConta = (0, newUtils_1.get_text)(`\n\rDigite o numero da conta que deseja associar: `);
        let numeroCpf = (0, newUtils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
        this._banco.associarContaCliente(numeroConta, numeroCpf);
    }
    listaContas(contaProcurada) {
        var _a;
        let listaContas = this._banco.listarContasCliente((_a = contaProcurada.cliente) === null || _a === void 0 ? void 0 : _a.cpf);
        for (let i = 0; i < listaContas.length; i++) {
            if (listaContas[i].numero === contaProcurada.numero && listaContas.length > 1) {
                listaContas[i] = listaContas[i + 1];
            }
            else {
                listaContas.pop();
            }
        }
        return listaContas;
    }
}
exports.App = App;
//# sourceMappingURL=classNewApp.js.map