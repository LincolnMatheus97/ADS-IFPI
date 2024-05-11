import { question } from "readline-sync";

function main() {
    let joias = new Set();
    let a = get_Text();
    let count = 0;

    while (a !== ``) {
        if (!joias.has(a)) {
            joias.add(a);
            count++;
        }
        a = get_Text();

    }

    print(count);

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();