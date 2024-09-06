import { get_number, print } from "../utils/io.js";

function main() {
    let comprimento_C = get_number(`Qual o comprimento que voce deseja ver da sequencia fibonacci: `);
    let sequencia_Fibo = `0 1`, i1 = 0, i2 = 1;

    for (let i = 2; i <= comprimento_C; i++) {
        let soma = i1 + i2;
        i1 = i2;
        i2 = soma;
        sequencia_Fibo += ` ${soma}`;
    }

    print(`${sequencia_Fibo}`);
}

main();