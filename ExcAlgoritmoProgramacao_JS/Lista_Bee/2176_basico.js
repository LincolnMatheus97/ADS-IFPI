import { question } from "readline-sync";

function main() {
    let s = get_Text();
    const bit = `1`;
    let count = 0;

    for (let i = 0; i < s.length; i++) {

        if (bit.includes(s[i])) {
            count++;
        }
    }
    count % 2 === 0 ? print(s + `0`) : print(s + `1`);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();