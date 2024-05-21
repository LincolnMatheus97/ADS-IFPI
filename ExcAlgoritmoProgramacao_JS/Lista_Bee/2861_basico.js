import { question } from "readline-sync";

function main() {
    const n = get_Number();

    for (let i = 0; i < n; i++) {
        let question = get_Text();
        print(`gzuz`);
    }

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();