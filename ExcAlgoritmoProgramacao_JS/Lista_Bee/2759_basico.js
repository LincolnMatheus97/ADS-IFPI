import { question } from "readline-sync";

function main() {
    const STRINGS = [];

    for (let i = 0; i < 3; i++) {
        let string = get_Text();
        STRINGS.push(string);

    }
    print(`A = ${STRINGS[0]}, B = ${STRINGS[1]}, C = ${STRINGS[2]}`);
    print(`A = ${STRINGS[1]}, B = ${STRINGS[2]}, C = ${STRINGS[0]}`);
    print(`A = ${STRINGS[2]}, B = ${STRINGS[0]}, C = ${STRINGS[1]}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();