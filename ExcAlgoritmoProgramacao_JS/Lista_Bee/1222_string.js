import { question } from "readline-sync";

function main() {
    let caso = get_Text();

    while (caso !== ``) {
        let [palavrasTexto, maxLinha, maxCaracter] = caso.split(` `).map(Number);
        let linhas = 1, paginas = 1;
        let lista_Palavras = get_Text().split(` `);
        let tamanho_Primeira_Palavra = lista_Palavras[0].length;

        for (let i = 1; i < lista_Palavras.length; i++) {
            let proxima_Palavras = lista_Palavras[i];
            let tamanho_Proxima_Palavra = proxima_Palavras.length;

            if ((tamanho_Primeira_Palavra + tamanho_Proxima_Palavra + 1) <= maxCaracter) {
                tamanho_Primeira_Palavra += tamanho_Proxima_Palavra + 1;
            } else {
                linhas++;
                if (linhas > maxLinha) {
                    paginas++;
                    linhas = 1;
                }
                tamanho_Primeira_Palavra = tamanho_Proxima_Palavra;
            }
        }

        print(`${paginas}`);
        caso = get_Text();
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