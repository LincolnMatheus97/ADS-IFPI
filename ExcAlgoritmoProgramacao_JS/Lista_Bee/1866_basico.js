import { question } from "readline-sync";

function main() {
    const C = get_Number();
    let soma = 0;

    for (let i = 0; i < C; i++) {
        let n = get_Number();

        for (let j = 0; j < n; j++) {
            if(j % 2 === 0) {
                soma += 1;
            }else {
                soma -= 1;
            }
        }
        print(soma);
        soma = 0;
    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();