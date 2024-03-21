/*
Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em 
numeração romana.  Utilize  funções para  obter  cada dígito do número decimal e para a transformação 
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M). 
*/

import { get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    const numero = get_positive_number(`Digite um numero qualquer de ate 3 digitos: `);

    if (Tem_Ate_3_Digitos(numero)) {
        let quantidade_digitos = Calcular_Digitos(numero);
        let numero_romano = Calcular_NumeroRomano(numero, quantidade_digitos);

        print(`O seu número decimal é ${numero}, transformado para número romano se torna ${numero_romano}.`);
    } else {
        print(`Número inválido de até 3 digitos. Tente Novamente !`);
    }

}

function Tem_Ate_3_Digitos(numero) {
    return (numero >= 1 && numero <= 999)
}

function Calcular_Digitos(numero) {
    let divisao = parseInt(numero / 10);
    let digitos = 1;

    while (divisao !== 0) {
        divisao = parseInt(divisao / 10);
        digitos++;
    }

    return digitos;
}

function Calcular_NumeroRomano(numero, digitos) {
    let mensagem = ``;

    if (digitos === 3) {
        let centena = Math.floor(numero / 100);
        let dezena = Math.floor((numero % 100) / 10);
        let unidade = numero % 10;

        centena = centena * 100;
        dezena = dezena * 10;

        mensagem += (centena === 100) ? `C` : (centena === 200) ? `CC` : (centena === 300) ? `CCC` :
            (centena === 400) ? `CD` : (centena === 500) ? `D` : (centena === 600) ? `DC` : (centena === 700) ?
                `DCC` : (centena === 800) ? `DCCC` : (centena === 900) ? `CM` : ``;

        mensagem += (dezena === 10) ? `X` : (dezena === 20) ? `XX` : (dezena === 30) ? `XXX` : (dezena === 40) ?
            `XL` : (dezena === 50) ? `L` : (dezena === 60) ? `LX` : (dezena === 70) ? `LXX` : (dezena === 80)
                ? `LXXX` : (dezena === 90) ? `XC` : ``;

        mensagem += (unidade === 1) ? `I` : (unidade === 2) ? `II` : (unidade === 3) ? `III` :
            (unidade === 4) ? `IV` : (unidade === 5) ? `V` : (unidade === 6) ? `VI` : (unidade === 7) ?
                `VII` : (unidade === 8) ? `VIII` : (unidade === 9) ? `IX` : ``;

    } else if (digitos === 2) {
        let dezena = Math.floor(numero / 10);
        let unidade = numero % 10;

        dezena = dezena * 10;

        mensagem += (dezena === 10) ? `X` : (dezena === 20) ? `XX` : (dezena === 30) ? `XXX` : (dezena === 40) ?
            `XL` : (dezena === 50) ? `L` : (dezena === 60) ? `LX` : (dezena === 70) ? `LXX` : (dezena === 80)
                ? `LXXX` : (dezena === 90) ? `XC` : ``;

        mensagem += (unidade === 1) ? `I` : (unidade === 2) ? `II` : (unidade === 3) ? `III` :
            (unidade === 4) ? `IV` : (unidade === 5) ? `V` : (unidade === 6) ? `VI` : (unidade === 7) ?
                `VII` : (unidade === 8) ? `VIII` : (unidade === 9) ? `IX` : ``;

    } else {
        let unidade = numero;

        mensagem += (unidade === 1) ? `I` : (unidade === 2) ? `II` : (unidade === 3) ? `III` :
            (unidade === 4) ? `IV` : (unidade === 5) ? `V` : (unidade === 6) ? `VI` : (unidade === 7) ?
                `VII` : (unidade === 8) ? `VIII` : (unidade === 9) ? `IX` : ``;
    }

    return mensagem;
}

main();