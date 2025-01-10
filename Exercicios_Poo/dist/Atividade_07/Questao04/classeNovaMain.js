"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const classeNovoBanco_1 = require("./classeNovoBanco");
const classeNovoApp_1 = require("./classeNovoApp");
const novaUtils_1 = require("./novaUtils");
function main() {
    let b = new classeNovoBanco_1.Bank();
    let app = new classeNovoApp_1.App(b);
    let escolha = -1, numeroConta = '', valor = 0, contaOrigem = '', contasDestino = [], cpf = '';
    let nomeCliente = '', dataNasci = new Date(), verificação = false;
    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar           3 - Sacar
        \t\r4 - Depositar       5 - Excluir             6 - Transferir
        \t\r7 - Totalização     8 - Mudar Titularidade  9 - Render Juros
        \n\t\rPara Clientes:
        \t\r10 - Inserir        11 - Consultar           12 - Associar
        \t\r13 - Excluir
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number((0, readline_sync_1.question)(`\n\t\rOpcao Desejada: `));
        switch (escolha) {
            case 1:
                numeroConta = (0, novaUtils_1.get_text)(`Digite o numero da conta: `);
                app.inserirConta(numeroConta);
                break;
            case 2:
                numeroConta = (0, novaUtils_1.get_text)(`Digite o numero da conta: `);
                app.consultarConta(numeroConta);
                break;
            case 3:
                numeroConta = (0, novaUtils_1.get_text)(`Digite o numero da conta que deseja sacar: `);
                valor = (0, novaUtils_1.get_number)(`Digite o valor que deseja sacar: `);
                app.sacarConta(numeroConta, valor);
                break;
            case 4:
                numeroConta = (0, novaUtils_1.get_text)(`Digite o numero da conta que deseja depositar: `);
                valor = (0, novaUtils_1.get_number)(`Digite o valor que deseja depositar: `);
                app.depositarConta(numeroConta, valor);
                break;
            case 5:
                numeroConta = (0, novaUtils_1.get_text)(`Digite o numero da conta que deseja excluir: `);
                app.excluirConta(numeroConta);
                break;
            case 6:
                contaOrigem = (0, novaUtils_1.get_text)(`Digite o numero da conta de origem: `);
                while (true) {
                    let contaDestino = (0, novaUtils_1.get_text)(`Digite o numero da conta de destino ou 0 para sair: `);
                    if (contaDestino == '0') {
                        break;
                    }
                    contasDestino.push(contaDestino);
                }
                valor = (0, novaUtils_1.get_number)(`Digite o valor que deseja transferir: `);
                if (valor * contasDestino.length > b.consultarConta(contaOrigem).saldo) {
                    console.log(`Saldo insuficiente...`);
                    break;
                }
                app.transferirEntreContas(contaOrigem, contasDestino, valor);
                break;
            case 7:
                cpf = (0, novaUtils_1.get_text)(`Digite o cpf do cliente: `);
                app.totalizarSaldos(cpf);
                break;
            case 8:
                app.mudarTitularidade();
                break;
            case 9:
                numeroConta = (0, novaUtils_1.get_text)(`Digite o numero da conta: `);
                verificação = app.renderJuros(numeroConta);
                if (verificação) {
                    console.log(`Juros rendidos com sucesso...`);
                }
                else {
                    console.log(`Conta não encontrada...`);
                }
            case 10:
                nomeCliente = (0, novaUtils_1.get_text)(`\n\rDigite o nome do cliente: `);
                cpf = (0, novaUtils_1.get_text)(`\n\rDigite o numero de CPF do cliente: `);
                dataNasci = (0, novaUtils_1.get_date)(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
                app.inserirCliente(nomeCliente, cpf, dataNasci);
                break;
            case 11:
                cpf = (0, novaUtils_1.get_text)(`\n\rDigite o cpf do cliente: `);
                app.consultarCliente(cpf);
                break;
            case 12:
                numeroConta = (0, novaUtils_1.get_text)(`\n\rDigite o numero da conta: `);
                cpf = (0, novaUtils_1.get_text)(`\n\rDigite o cpf do cliente: `);
                app.associarContaCliente(numeroConta, cpf);
                break;
            case 13:
                cpf = (0, novaUtils_1.get_text)(`\n\rDigite o cpf do cliente: `);
                app.excluirCliente(cpf);
                break;
            case 0:
                console.log(`Encerrando Programa...`);
                break;
            default:
                console.log(`Opção Invalida...`);
        }
        (0, readline_sync_1.question)(`Operacao finalizada...Digite Enter`);
    }
}
main();
//# sourceMappingURL=classeNovaMain.js.map