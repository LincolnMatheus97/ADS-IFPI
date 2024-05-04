import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let escolhas = get_Text().split(` `).map(Number);
    let menor = 0;

    for(let i = 1; i <= N; i++) {
        if(escolhas[i] < escolhas[menor]) {
            menor = i;
        }
    }
    print(menor + 1);

}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();