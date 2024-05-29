import { get_number, get_text, print } from "../../utils/io_utils.js";
import { registrarArquivo } from "../funcoes.js";
import { adicionarCliente, consultarCliente, excluirCliente, relatorioClientes, relatorioVendas } from "./funcionabilidadesQ04.js";

function main() {
    let opcao = -1, entradas, id, clienteId, vendaId, mensagem, listaClientes, listaVendas;

    while (opcao !== 0) {
        print(`
        -------- Lojas Moura --------
        
        1 - Adicionar Cliente
        2 - Remover Cliente
        3 - Consultar Cliente
        4 - Adicionar Venda
        5 - Remover Venda
        6 - Consultar Venda
        7 - Relatorio De Clientes
        8 - Relatorio De Vendas
        9 - Registrar Clientes
        10 - Registrar Vendas
        0 - Sair
        -----------------------------`);
        opcao = get_number(`\tOpcao: `);

        switch (opcao) {
            case 1:
                entradas = get_text(`\tDigite o id, nome e data de nascimento do cliente, separando as informacoes com espaco: `).toUpperCase();

                while (entradas !== ``) {
                    let entradasSeparadas = entradas.split(` `);
                    let validacao = adicionarCliente(parseInt(entradasSeparadas[0]), entradasSeparadas[1], entradasSeparadas[2]);

                    if (validacao !== true) {
                        print(`\tERRO: Cliente com ID ${entradasSeparadas[0]} já existente.`);
                    } else {
                        print(`\tSUCESSO: Cliente de Nome ${entradasSeparadas[1]} adicionado.`);
                    }

                    entradas = get_text(`\tDeseja Adicionar mais clientes ? Se sim informe no os dados novamente separando por espaco. Se nao apenas aperte Enter. `).toUpperCase();
                }
                break;
            case 2:
                id = get_text(`\tDigite o ID do cliente que deseja excluir: `);

                while (id !== ``) {
                    let validacao = excluirCliente(parseInt(id));

                    if (validacao !== true) {
                        print(`\tERRO: Cliente com ID ${id} não existe`);
                    } else {
                        print(`\tSUCESSO: Cliente de ID ${id} excluido.`);
                    }

                    id = get_text(`\tDeseja Exclir mais clientes ? Se sim informe no o ID. Se nao apenas aperte Enter. `);
                }
                break;
            case 3:
                clienteId = get_text(`\tDigite o ID do cliente que deseja consultar: `);

                while (clienteId !== ``) {
                    let validacao = consultarCliente(parseInt(clienteId));

                    if (validacao === null) {
                        print(`\tERRO: Cliente de ID ${clienteId} não existe.`);
                    } else {
                        print(`\tSUCESSO: Cliente de ID ${validacao.id} encontrado. Nome: ${validacao.nome}, Data de Nascimento: ${validacao.data}`);
                    }

                    clienteId = get_text(`\tDeseja consultar mais clientes ? Se sim informe no o ID. Se nao apenas aperte Enter. `);
                }
                break;
            case 4:
                entradas = get_text(`\tDigite o id da compra, o nome do produto e o id do cliente, separando as informacoes com espaco: `).toUpperCase();

                while (entradas !== ``) {
                    let entradasSeparadas = entradas.split(` `);
                    let validacao = adicionarVenda(parseInt(entradasSeparadas[0]), entradasSeparadas[1], parseInt(entradasSeparadas[2]));

                    if (validacao === true) {
                        print(`\tSUCESSO: Venda ${entradasSeparadas[0]} adicionada.`);
                    } else {
                        print(`\tERRO: Venda ${entradasSeparadas[0]} já existente e/ou Código de Cliente ${entradasSeparadas[2]} não existe.`);
                    }

                    entradas = get_text(`\tDeseja Adicionar mais Vendas? Se sim informe no os dados novamente separando por espaco. Se nao apenas aperte Enter. `).toUpperCase();
                }
                break;
            case 5:
                id = get_text(`\tDigite o ID da venda que deseja excluir: `);

                while (id !== ``) {
                    let validacao = excluirVenda(parseInt(id));

                    if (validacao !== true) {
                        print(`\tERRO: Venda com ID ${id} não existe`);
                    } else {
                        print(`\tSUCESSO: Venda de ID ${id} excluido.`);
                    }

                    id = get_text(`\tDeseja Exclir mais Vendas ? Se sim informe no o ID. Se nao apenas aperte Enter. `);
                }
                break;
            case 6:
                vendaId = get_text(`\tDigite o ID da Venda que deseja consultar: `);

                while (vendaId !== ``) {
                    let validacao = consultarVenda(parseInt(vendaId));

                    if (validacao === null) {
                        print(`\tERRO: Venda de ID ${vendaId} não existe.`);
                    } else {
                        print(`\tSUCESSO: Venda de ID ${validacao.id} encontrado. Nome do Produto: ${validacao.nome}, Id do Cliente: ${validacao.clienteId}`);
                    }

                    vendaId = get_text(`\tDeseja consultar mais vendas ? Se sim informe no o ID. Se nao apenas aperte Enter. `);
                }
                break;
            case 7:
                mensagem = relatorioClientes();
                print(mensagem);
                break;
            case 8:
                mensagem = relatorioVendas();
                print(mensagem);
                break;
            case 9:
                listaClientes = relatorioClientes();
                registrarArquivo(`registroCliente.txt`, listaClientes);
                print(`\tTodos Clientes Registrados no Arquivo "registroCliente.txt".`);
                break;
            case 10:
                listaVendas = relatorioVendas();
                registrarArquivo(`registroVenda.txt`, listaVendas);
                print(`\tTodas Vendas Registradas no Arquivo "registroVenda.txt".`);
                break;
            case 0:
                print(`\tSaindo do Programa...`);
                break;
            default:
                print(`\tOpção digitada nao encontrada...`);
                break;
        }
    }
}

main();