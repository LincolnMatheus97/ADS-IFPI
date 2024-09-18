import { question } from "readline-sync";

function main() {
    let entrada = get_Text();

    while (entrada != ``) {
        let [n1, n2] = entrada.split(` `).map(Number);
        let fatorial_1 = fatorial(n1);
        let fatorial_2 = fatorial(n2);

        console.log((fatorial_1 + fatorial_2).toString());

        entrada = get_Text();
    }
}

function get_Text() {
    return question();
}

function fatorial(numero) {
    let fatorial = BigInt(1);

    for (let i = BigInt(1); i <= BigInt(numero); i++) {
        fatorial *= i;
    }

    return fatorial;
}

main();