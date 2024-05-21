import { question } from "readline-sync";

function main() {
    const SIGLAS = [];

    for (let i = 0; i < 10; i++) {
        let siglas = get_Text();
        SIGLAS.push(siglas);

    }
    print(`${SIGLAS[2]}`);
    print(`${SIGLAS[6]}`);
    print(`${SIGLAS[8]}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();