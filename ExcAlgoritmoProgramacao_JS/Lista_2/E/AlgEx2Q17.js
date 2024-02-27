/*
Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos.
*/

import { print, get_number } from "../../utils/io_utils.js";

function main() {
    //Entrada
    const num1 = get_number("Digite um primeiro valor inteiro: ");
    const num2 = get_number("Digite um segundo valor inteiro: ");

    //Processamento e Saída
    const restodiv = num1 % num2;

    if (Eh_Igual_Um(restodiv)) {
        const soma_m_resto = ((num1 + num2) + (restodiv));
        print(`A soma das variáveis mais o resto da divisão é igual a: ${soma_m_resto}.`);

    } else if (Eh_Igual_Dois(restodiv)) {
        if (Sao_Pares(num1, num2)) {
            print(`O primeiro e o segundo valor são pares.`);
        } else {
            print(`O primeiro e o segundo valor são ímpares.`);
        }

    } else if (Eh_Igual_Tres(restodiv)) {
        const mult_soma = ((num1 + num2) * num1);
        print(`A multiplicação da soma dos dois valores pelo primeiro é igual a: ${mult_soma}.`);

    } else if (Eh_Igual_Quatro_E_Num2_Difent_Zero(num2, restodiv)) {
        const div_soma = ((num1 + num2) / num2);
        print(`A divisão da soma dois valores pelo o segundo é igual a: ${div_soma}.`);

    } else {
        const num1_sqrt = num1 ** 2;
        const num2_sqrt = num2 ** 2;
        print(`
        O quadrado do primeiro e segundo valores respectivamente são: ${num1_sqrt.toFixed(2)} e ${num2_sqrt.toFixed(2)}.`);
    }
}

function Eh_Igual_Um(restodiv) {
    return restodiv === 1;
}

function Eh_Igual_Dois(restodiv) {
    return restodiv === 2;
}

function Eh_Igual_Tres(restodiv) {
    return restodiv === 3;
}

function Eh_Igual_Quatro_E_Num2_Difent_Zero(num2, restodiv) {
    return (restodiv === 4 && num2 !== 0);
}
function Sao_Pares(num1, num2) {
    return ((num1 % 2) === 0 && (num2 % 2) === 0);
}

main();