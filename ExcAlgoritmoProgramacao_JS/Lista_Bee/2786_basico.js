import { question } from "readline-sync";

function main() {
    const C = get_Number();
    const L = get_Number();

    let lajota_1 = C * L + (C - 1) * (L - 1), lajota_2 = 2 * (C - 1) + 2 * (L - 1);

    print(lajota_1);
    print(lajota_2);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();