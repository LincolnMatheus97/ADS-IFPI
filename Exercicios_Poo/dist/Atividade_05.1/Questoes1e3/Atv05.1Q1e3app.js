"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const Atv05_1Q1e3classBank_1 = require("./Atv05.1Q1e3classBank");
const Atv05_1Q1e3funcionabilidadeApp_1 = require("./Atv05.1Q1e3funcionabilidadeApp");
function main() {
    let b = new Atv05_1Q1e3classBank_1.Bank();
    let escolha = -1;
    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar           3 - Sacar
        \t\r4 - Depositar       5 - Excluir             6 - Transferir
        \t\r7 - Totalização
        \n\t\rPara Clientes:
        \t\r8 - Inserir         9 - Consultar           10 - Associar
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number((0, readline_sync_1.question)(`\n\t\rOpcao Desejada: `));
        switch (escolha) {
            case 1:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.inserirConta)(b);
                break;
            case 2:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.consultarConta)(b);
                break;
            case 3:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.sacarConta)(b);
                break;
            case 4:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.depositarConta)(b);
                break;
            case 5:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.excluirConta)(b);
                break;
            case 6:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.transferirEntreContas)(b);
                break;
            case 7:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.totalizarSaldos)(b);
                break;
            case 8:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.inserirCliente)(b);
                break;
            case 9:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.consultarCliente)(b);
                break;
            case 10:
                (0, Atv05_1Q1e3funcionabilidadeApp_1.associarContaCliente)(b);
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
//# sourceMappingURL=Atv05.1Q1e3app.js.map