import { question } from "readline-sync";

function main() {
    let caso = get_Text();

    while (caso !== ``) {
        let lista_Palavras = caso.toLowerCase().split(` `);
        let aliteracao = 0, letra_Alitera = ``;

        for (let i = 0; i < lista_Palavras.length - 1; i++) {
            if (i === 0) {
                if(lista_Palavras[i][0] === lista_Palavras[i + 1][0]) {
                    aliteracao++;
                    letra_Alitera = lista_Palavras[i][0];
                }

            } else {
                if(lista_Palavras[i][0] === lista_Palavras[i + 1][0]) {
                    letra_Alitera = lista_Palavras[i][0];
                    if(!(lista_Palavras[i - 1][0] === letra_Alitera)) {
                        aliteracao++;
                    }
                }
            }
        }

        print(`${aliteracao}`);
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