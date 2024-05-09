import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let n = parseInt(a);
        let votos = get_Text().split(` `).map(Number);
        let afavor = 0;
        let contra = 0;

        for (let i = 0; i < n; i++) {
            votos[i] === 1 ? afavor++ : contra++;
        }
        if (afavor >= (2 / 3) * n) {
            print(`impeachment`);
        } else {
            print(`acusacao arquivada`);
        }
        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();