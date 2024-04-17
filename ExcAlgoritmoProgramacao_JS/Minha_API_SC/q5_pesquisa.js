import { get_number, get_text, percentual, print } from "./utils.js";

function main() {
    let listaDeItens = ``;
    let descricao = ``;
    let especificacao = ``;
    let valorItem = 0;
    let itemFormatado = ``;
    let valorTotal = 0;
    let contadorDeItens = 1;
    let valorParcelaAte6x = 0;
    let opcao = -1;

    while (opcao !== 0) {
        print(`
                -------------------------
                    MENU
                    
                    1 - Incluir Item
                    2 - Imprimir Lista
                    3 - Parcelamento
                    0 - Sair

                ------------------------`);
        opcao = get_number(`\t\tDigite uma opcao: `);

        if (opcao === 1) {
            let escolha = `S`;

            while (escolha === `S`) {
                descricao = get_text(`\n\t\tDigite o nome do item: `).toUpperCase();
                especificacao = get_text(`\t\tDigite se a especificacao do item Kg, Ml, L. Ex->5Kg, : `).toUpperCase();
                valorItem = get_number(`\t\tDigite o valor do item em (R$): `);

                itemFormatado = `${contadorDeItens} - ${descricao.padEnd(10)} ${especificacao.padEnd(10)}             R$ ${valorItem.toFixed(2)}`;
                listaDeItens += `\n\t\t${itemFormatado}`;
                valorTotal += valorItem;
                contadorDeItens++;

                escolha = get_text(`\t\tVoce deseja adicionar mais um item na lista ? Se Sim digite "S" senao "N":  `).toUpperCase();
            }

        } else if (opcao === 2) {
            print(`
                ========================   PESQUISA DE PREÇOS  ========================
                ${listaDeItens}
                _______________________________________________________________________
                
                Valor Total:                          R$ ${valorTotal.toFixed(2)}`);

        } else if (opcao === 3) {
            let infoParcelamento = ``;

            if (valorTotal <= 30) {
                infoParcelamento = `Não é possivel parcelar`;

            } else if (valorTotal <= 100) {
                infoParcelamento = `Possivel parcelar em até 3x`;

            } else {
                infoParcelamento = `Possivel parcelar em até 5x`;

            }

            valorParcelaAte6x = calcularParcela(valorTotal);

            print(`
                ======================================================================
                ->  Opções Parcelamentos no Cartão:
                        Pode ser paga à Vista no cartão o valor R$: ${valorTotal.toFixed(2)}\n
                        ou\n
                        ${infoParcelamento}\n
                        ou\n
                        Pode ser parcelada em 6x, mas com um acrescimo mensal de 5%,
                        ou seja, o valor total será R$: ${valorParcelaAte6x.toFixed(2)}.
                ======================================================================`);

        } else if (opcao === 0) {
            print(`\t\tO programa estás sendo Encerrado...`);

        } else {
            print(`\n\t\tDigite uma opção válida, Tente Novamente...`);

        }
    }
}

function calcularParcela(total) {
    let valorTotalEmParcelasSemJuros = total / 6;
    let contadorParcelas = 1;
    let valorFinal = 0;

    while (contadorParcelas <= 6) {
        valorFinal += valorTotalEmParcelasSemJuros + percentual(valorTotalEmParcelasSemJuros, 5);
        contadorParcelas++;
    }

    return valorFinal;

}

main();