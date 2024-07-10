import { question } from "readline-sync";

function main() {
    const listaColunas = gerarListaDeColunas();
    let coluna = get_Text().toUpperCase();

    while (coluna !== ``) {
        const numeroColuna = listaColunas.findIndex(string => string === coluna);
        if (numeroColuna === -1) {
            print(`Essa coluna nao existe Tobias!`);

        } else {
            print(numeroColuna + 1);

        }

        coluna = get_Text().toUpperCase();

    }

}

function get_Text() {
    return question();
}

function gerarListaDeColunas() {
    let listaColunas = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            listaColunas.push(listaColunas[i] + listaColunas[j]);

        }

    }

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            for (let k = 0; k < 26; k++) {
                let novaColuna = listaColunas[i] + listaColunas[j] + listaColunas[k];
                listaColunas.push(novaColuna);

                if (novaColuna === `XFD`) {
                    return listaColunas;

                }

            }

        }

    }
    
}

function print(texto) {
    return console.log(texto);
}

main();