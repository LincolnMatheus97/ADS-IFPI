/*
Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o 
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo 
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”). 
a. Até 10 unidades: valor total 
b. de 11 a 20 unidades: 10% de desconto 
c. de 21 a 50 unidades: 20% de desconto 
d. acima de 50 unidades: 25% de desconto 
*/

import { get_positive_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {

    while (true) {
        let nome_produto = get_text(`Digite o nome do produto: `).toUpperCase();

        if (nome_produto === `FIM`) {
            break;
        }

        let preco_produto = get_positive_number(`Digite o preco do produto: `);
        let quantidade_produto = get_positive_number(`Digite a quantidade do produto: `);

        let valor_total = preco_produto * quantidade_produto;
        let descontos = 0;

        if (quantidade_produto > 50) {
            descontos = percentual(valor_total, 25);
        } else if (quantidade_produto > 20 && quantidade_produto <= 50) {
            descontos = percentual(valor_total, 20);
        } else if (quantidade_produto > 10 && quantidade_produto <= 20) {
            descontos = percentual(valor_total, 10);
        } else {
            descontos = 0;
        }
        print(`
        -----------------------------------------------------------------------------------
        <<<<<<<<<<<<<<<<<<<<            NOTA FISCAL             <<<<<<<<<<<<<<<<<<<<
        
        ---> Nome Produto:  --------------------------------    ${nome_produto}
        ---> Valor Unitario do Produto: --------------------    R$:${preco_produto}
        ---> Quantidade de Produto: ------------------------    ${quantidade_produto}
        ---> Desconto(-)    --------------------------------    R$:${descontos.toFixed(2)}
        ---> Valor Total a ser pago(Antes do desconto): ----    R$:${(valor_total).toFixed(2)}

        ---> Valor Final da Nota:   ------------------------    R$:${(valor_total - descontos).toFixed(2)}
        
        -----------------------------------------------------------------------------------`);
    }
}

main();