import { question } from "readline-sync";

function main() {
    let andares = [];

    for (let i = 0; i < 3; i++) {
        let funcionarios = get_Number();
        andares.push(funcionarios);
    }

    const T1 = 2 * andares[1] + 4 * andares[2];
    const T2 = 2 * andares[0] + 2 * andares[2];
    const T3 = 4 * andares[0] + 2 * andares[1];

    T1 <= T2 && T1 <= T3 ? print(T1) : T2 <= T3 ? print(T2) : print(T3);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();