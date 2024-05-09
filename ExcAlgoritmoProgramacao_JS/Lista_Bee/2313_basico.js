import { question } from "readline-sync";

function main() {
    const [l1, l2, l3] = get_Text().split(` `).map(Number).sort();

    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
        if (l1 === l2 && l2 === l3) {
            print(`Valido-Equilatero`);
        } else if (l1 === l2 || l1 === l3 || l2 === l3) {
            print(`Valido-Isoceles`);
        } else {
            print(`Valido-Escaleno`);
        }

        if (l1 ** 2 === (l2 ** 2 + l3 ** 2) || l2 ** 2 === (l1 ** 2 + l3 ** 2) || l3 ** 2 === (l1 ** 2 + l2 ** 2)) {
            print(`Retangulo: S`);
        } else {
            print(`Retangulo: N`);
        }

    } else {
        print(`Invalido`);
    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();