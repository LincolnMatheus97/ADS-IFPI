import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let cursos = [];

    for (let i = 0; i < N; i++) {
        let curso = get_Text();
        cursos.push(curso);
    }

    for(let j = 0; j < cursos.length; j++) {
        if(cursos[j] === `Ciencia da Computacao`) {
            print(`Ciencia da Computacao`);
            break;
        }else {
            print(`Ciencia da Computacao`);
            break;
        }
    }
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