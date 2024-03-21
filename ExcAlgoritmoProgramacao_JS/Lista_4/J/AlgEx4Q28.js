/*
Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand()) 
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número 
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente 
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso, 
escreva em quantas tentativas o usuário acertou.
*/

import { get_positive_number, get_random_number, print } from "../../utils/io_utils.js";

function main() {
    print(`
            Bem-vindo Usuario, ao jogo do adivinha. Um número aleatorio será gerado baseado num intevalor de números
            que voce digitou. Adivinhe o número aleatorio.`);

    const numero = get_positive_number(`
            Digite um numero: `);

    let numero_aleatorio = get_random_number(1, numero + 1);

    print(`
            O número aleatorio foi gerado!`);

    let palpite = get_positive_number(`
            Digite seu Primeiro palpite: `)

    let tentativas = 1;

    while (palpite !== numero_aleatorio) {
        if (palpite > numero_aleatorio) {
            print(`
            O número aleatorio é Menor.`);
        } else {
            print(`
            O número aleatorio é Maior.`);
        }
        palpite = get_positive_number(`
            Digite um novo Palpite: `);
        tentativas++;
    }
    print(`
            Parabéns Usuario você conseguiu adivinhar o número aleatorio em ${tentativas} tentativas.`);
}

main();