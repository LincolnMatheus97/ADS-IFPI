import { question } from "readline-sync";

function main() {
    let primeira_String = get_Text();

    while (primeira_String !== ``) {
        let segunda_String = get_Text();
        let maior_Substring = 0;

        for (let i = 0; i < primeira_String.length; i++) {
            for (let j = 0; j < segunda_String.length; j++) {
                let tamanho = 0;

                while (i + tamanho < primeira_String.length && j + tamanho < segunda_String.length && primeira_String[i + tamanho] === segunda_String[j + tamanho]) {
                    tamanho++;
                }

                if(tamanho > maior_Substring) {
                    maior_Substring = tamanho;
                }
            }
        }

        print(`${maior_Substring}`);
        primeira_String = get_Text();
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