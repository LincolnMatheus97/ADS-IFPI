/*
O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
    Até 5 Kg                                    Acima de 5 Kg
    File R$ 4,90 por Kg                         R$ 5,80 por Kg
    Alcatra R$ 5,90 por                         Kg R$ 6,80 por Kg
    Picanha R$ 6,90 por                         Kg R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

import { question } from "readline-sync";
import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const tipo = question(`
    ----> Escreva o Tipo de carne que voce deseja (File, Alcatra ou Picanha): `).toUpperCase();
    const kilos = get_positive_number(`
    ----> Escreva quantos (Kg) voce deseja: `);

    //Processamento
    let preco_total;
    let pagamento;
    let tipocarne;
    let desconto;

    if (Compras_Ate_5kg(kilos)) {
        if (Tipo_Carnes(tipo)) {
            tipocarne = `${tipo ? `File` : `Alcatra`}`;
            preco_total = valordapeca(tipo, kilos);

        } else {
            tipocarne = `Picanha`;
            preco_total = valordapeca(tipo, kilos);
        }
    } else {
        if (Tipo_Carnes(tipo)) {
            tipocarne = `${tipo ? `File` : `Alcatra`}`;
            preco_total = valordapeca(tipo, kilos);

        } else {
            tipocarne = `Picanha`;
            preco_total = valordapeca(tipo, kilos);
        }
    }

    pagamento = question(`
    ----> Voce deseja pagar no Cartao ou Dinheiro: `).toUpperCase();

    if (Eh_Cartao(pagamento)) {
        desconto = (5 * preco_total) / 100;
    } else {
        desconto = 0;
    }

    //Saída
    print(`
    ----------------------------------------------------------------------------------------
    ############            NOTA FISCAL             ############
    
    ---> TIPO DA CARNE:                         ${tipocarne}
    ---> QUANTIDADE EM KG:                      ${kilos}
    ______________________________________________________________
    ---> PREÇO TOTAL:                           ${preco_total.toFixed(2)}
    ---> TIPO DE PAGAMENTO:                     ${pagamento}
    ---> DESCONTO(5% COM CARTÃO DA LOJA):       ${desconto}
    
    ---> VALOR A SER PAGO:                      ${(preco_total - desconto).toFixed(2)}
    
    ----------------------------------------------------------------------------------------`);
}

function Compras_Ate_5kg(kilos) {
    return kilos <= 5;
}

function Tipo_Carnes(tipo) {
    return (tipo === `PICANHA` || tipo === `ALCATRA` || tipo === `FILE`);
}

function valordapeca(tipo, kilos) {
    let precokilos;

    if (Compras_Ate_5kg(kilos)) {
        if (Tipo_Carnes(tipo)) {
            precokilos = (tipo === `FILE` ? (kilos * 4.9) : (kilos * 5.9));
        } else {
            precokilos = kilos * 6.9;
        }
    } else {
        if (Tipo_Carnes(tipo)) {
            precokilos = (tipo === `FILE` ? (kilos * 5.8) : (kilos * 6.8));
        } else {
            precokilos = kilos * 7.8;
        }
    }
    return precokilos;
}

function Eh_Cartao(pagamento) {
    return pagamento === `CARTAO`;
}

main();