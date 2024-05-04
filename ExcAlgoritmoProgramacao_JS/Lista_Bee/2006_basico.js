import { question } from "readline-sync";

function main() {
    const N = get_Text();
    let respostas = get_Text().split(` `);
    let respostasCorretas = 0;

    for(let i = 0; i < respostas.length; i++){
        if(N.includes(respostas[i])){
            respostasCorretas++;
        }
    }
    print(`${respostasCorretas}`);
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();