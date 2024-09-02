import { question } from "readline-sync";

function main() {
    let caso = get_Text();

    while (caso !== ``) {
        let frase = caso.split(``);
        let alterarTamanho = true;

        for (let i = 0; i < frase.length; i++) {
            if (frase[i] === ` `) {
                continue;
            } else {
                if ((frase[i] >= `A` && frase[i] <= `Z`) || (frase[i] >= `a` && frase[i] <= `z`)) {
                    if(alterarTamanho) {
                        frase[i] = frase[i].toUpperCase();
                    }else {
                        frase[i] = frase[i].toLowerCase();
                    }
                    alterarTamanho = !alterarTamanho;
                }
            }
        }
        let texto = frase.join(``);
        print(texto);

        caso = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();