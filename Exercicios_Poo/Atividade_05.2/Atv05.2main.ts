import { question } from 'readline-sync';
import { Bank } from "./Classes/Atv05.2novoBanco";
import { App } from './Classes/Atv05.2novoApp';

function main() {
    let b: Bank = new Bank();
    let app: App = new App(b);
    let escolha: number = -1;

    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar           3 - Sacar
        \t\r4 - Depositar       5 - Excluir             6 - Transferir
        \t\r7 - Totalização     8 - Mudar Titularidade
        \n\t\rPara Clientes:
        \t\r9 - Inserir         10 - Consultar           11 - Associar
        \t\r12 - Excluir
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number(question(`\n\t\rOpcao Desejada: `));

        switch(escolha) {
            case 1:
                app.inserirConta();
                break;
            case 2:
                app.consultarConta();
                break;
            case 3:
                app.sacarConta();
                break;
            case 4:
                app.depositarConta();
                break;
            case 5:
                app.excluirConta();
                break;
            case 6:
                app.transferirEntreContas();
                break;
            case 7:
                app.totalizarSaldos();
                break;
            case 8:
                app.mudarTitularidade();
                break;
            case 9:
                app.inserirCliente();
                break;
            case 10:
                app.consultarCliente();
                break;
            case 11:
                app.associarContaCliente();
                break;
            case 12:
                app.excluirCliente();
                break;
            case 0:
                console.log(`Encerrando Programa...`);
                break;
            default:
                console.log(`Opção Invalida...`)
        }
        question(`Operacao finalizada...Digite Enter`);
    }
}

main();