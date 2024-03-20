/*
Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de 
600 km.  No início da viagem, o carro está com o tanque cheio (50 litros).  Durante o percurso foi usado 
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações: 
· Distância percorrida desde a última medição; 
· Quantidade de litros consumidos para percorrer a distância indicada. 
Escreva um algoritmo que leia estas informações e escreva: 
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km); 
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros); 
· o consumo em km/l do carro. 
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    const distancia_total = 600;
    const tanque_cheio = 50;

    let distancia_percorrida = 0;
    let tanque_usado = 0;

    while (distancia_percorrida < distancia_total && tanque_usado < tanque_cheio) {
        let distancia_medida = get_number(`Quantos Km foram percorridos ate agora: `);
        let combustivel_gasto = get_number(`Quantos L foram gastos de gasolina ate agora: `);

        distancia_percorrida += distancia_medida;
        tanque_usado += combustivel_gasto;

    }
    if (distancia_percorrida >= distancia_total) {
        print(`O Carro chegou ao seu destino.`);
    } else {
        print(`O Carro parou antes de chegar por falta de combustível.`)
    }

    let consumo = distancia_percorrida / tanque_usado;

    print(`O consumo em km/l do carro é de ${consumo.toFixed(2)}.`)
}

main();