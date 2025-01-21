"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const Banco_1 = require("./Banco");
const App_1 = require("./App");
const Utils_1 = require("./Utils");
function main() {
    let b = new Banco_1.Bank();
    let app = new App_1.App(b);
    let arquivoContasInativas = 'CNC.txt', arquivoContasAtivas = 'CC.txt';
    let escolha = -1, numeroConta = '', valor = 0, contaOrigem = '', contasDestino = [], cpf = '';
    let nomeCliente = '', dataNasci = new Date(), verificacao, decisao = '', resultadoConsulta = '', resultadoMudanca = '';
    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar                  3 - Sacar
        \t\r4 - Depositar       5 - Excluir                    6 - Transferir
        \t\r7 - Totalização     8 - Mudar Titularidade         9 - Render Juros
        \n\t\rPara Clientes:
        \t\r10 - Inserir        11 - Consultar                 12 - Associar
        \t\r13 - Excluir        14 - Ler Arquivo De Contas     15 - Salvar Arquivo De Contas
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number((0, readline_sync_1.question)(`\n\t\rOpcao Desejada: `));
        switch (escolha) {
            case 1:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta: `);
                decisao = (0, Utils_1.get_text)(`Deseja criar Conta Corrente ou Poupanca? 1-(Corrente), 2-(Poupanca) ou 3-(Imposto): `);
                if (decisao === `1`) {
                    app.inserirContaCorrente(numeroConta);
                }
                else if (decisao === `2`) {
                    app.inserirContaPoupanca(numeroConta);
                }
                else if (decisao === `3`) {
                    app.inserirContaImposto(numeroConta);
                }
                (0, Utils_1.print)(`Conta criada com sucesso...`);
                break;
            case 2:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta: `);
                resultadoConsulta = app.consultarConta(numeroConta);
                (0, Utils_1.print)(resultadoConsulta.mensagem);
                break;
            case 3:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta que deseja sacar: `);
                valor = (0, Utils_1.get_number)(`Digite o valor que deseja sacar: `);
                app.sacarConta(numeroConta, valor);
                break;
            case 4:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta que deseja depositar: `);
                valor = (0, Utils_1.get_number)(`Digite o valor que deseja depositar: `);
                app.depositarConta(numeroConta, valor);
                break;
            case 5:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta que deseja excluir: `);
                app.excluirConta(numeroConta);
                break;
            case 6:
                contaOrigem = (0, Utils_1.get_text)(`Digite o numero da conta de origem: `);
                while (true) {
                    let contaDestino = (0, Utils_1.get_text)(`Digite o numero da conta de destino ou 0 para sair: `);
                    if (contaDestino == '0') {
                        break;
                    }
                    contasDestino.push(contaDestino);
                }
                valor = (0, Utils_1.get_number)(`Digite o valor que deseja transferir: `);
                app.transferirEntreContas(contaOrigem, contasDestino, valor);
                break;
            case 7:
                cpf = (0, Utils_1.get_text)(`Digite o cpf do cliente: `);
                app.totalizarSaldos(cpf);
                break;
            case 8:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta: `);
                resultadoConsulta = app.consultarConta(numeroConta);
                if (resultadoConsulta.sucesso) {
                    (0, Utils_1.print)(resultadoConsulta.mensagem);
                    escolha = (0, Utils_1.get_number)(`Deseja mudar a titularidade da conta? 1-(Sim) ou 2-(Nao): `);
                    if (escolha === 1) {
                        cpf = (0, Utils_1.get_text)(`Digite o numero de CPF do novo Cliente Titular: `);
                        resultadoMudanca = app.mudarTitularidade(numeroConta, cpf);
                        (0, Utils_1.print)(resultadoMudanca);
                    }
                    else {
                        (0, Utils_1.print)(`Operacao cancelada...`);
                    }
                }
                else {
                    (0, Utils_1.print)(resultadoConsulta.mensagem);
                }
                break;
            case 9:
                numeroConta = (0, Utils_1.get_text)(`Digite o numero da conta: `);
                verificacao = app.renderJuros(numeroConta);
                if (verificacao) {
                    (0, Utils_1.print)(`Juros rendidos com sucesso...`);
                }
                else {
                    (0, Utils_1.print)(`Conta não encontrada...`);
                }
                break;
            case 10:
                nomeCliente = (0, Utils_1.get_text)(`\n\rDigite o nome do cliente: `);
                cpf = (0, Utils_1.get_text)(`\n\rDigite o numero de CPF do cliente: `);
                dataNasci = (0, Utils_1.get_date)(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
                app.inserirCliente(nomeCliente, cpf, dataNasci);
                break;
            case 11:
                cpf = (0, Utils_1.get_text)(`\n\rDigite o cpf do cliente: `);
                app.consultarCliente(cpf);
                break;
            case 12:
                numeroConta = (0, Utils_1.get_text)(`\n\rDigite o numero da conta: `);
                cpf = (0, Utils_1.get_text)(`\n\rDigite o cpf do cliente: `);
                app.associarContaCliente(numeroConta, cpf);
                break;
            case 13:
                cpf = (0, Utils_1.get_text)(`\n\rDigite o cpf do cliente: `);
                app.excluirCliente(cpf);
                break;
            case 14:
                app.lerArquivoDeContas(arquivoContasInativas);
                (0, Utils_1.print)(`Arquivo lido com sucesso...`);
                break;
            case 15:
                app.salvarArquivoDeContas(arquivoContasAtivas);
                (0, Utils_1.print)(`Arquivo salvo com sucesso...`);
                break;
            case 0:
                (0, Utils_1.print)(`Encerrando Programa...`);
                break;
            default:
                (0, Utils_1.print)(`Opção Invalida...`);
        }
        (0, readline_sync_1.question)(`Operacao finalizada...Digite Enter`);
    }
}
main();
//# sourceMappingURL=Main.js.map