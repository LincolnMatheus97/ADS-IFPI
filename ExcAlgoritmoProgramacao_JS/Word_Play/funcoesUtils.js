import { question } from "readline-sync";
import fs from 'fs';

export function lerArquivo(nomeArquivo) {
    return fs.readFileSync(nomeArquivo, `utf-8`);
}

export function gerarMenu() {
    let menu = `
        1 -> Carregamento dos Dados
        2 -> Palavras C/+ 20 Letras
        3 -> Palavras S/ Letra 'E'
        4 -> Palavras C/ N+ Letras
        0 -> Encerrar Programa
        ____________________________`;

    return menu;
}

export function listarPalavras(string) {
    let listaPalavras = [];
    let linhaAtual = ``;

    for (let caractere of string) {
        if (caractere === `\n`) {
            processarLinha(linhaAtual, listaPalavras);
            linhaAtual = ``;
        } else {
            linhaAtual += caractere;
        }
    }

    if (linhaAtual) {
        processarLinha(linhaAtual, listaPalavras);
    }

    return listaPalavras;
}

function processarLinha(linha, listaPalavras) {
    let palavraAtual = ``;

    for (let caractere of linha) {
        if ((caractere >= `a` && caractere <= `z`)) {
            palavraAtual += caractere;
        } else if (palavraAtual) {
            listaPalavras.push(palavraAtual);
            palavraAtual = ``;
        }
    }

    if (palavraAtual) {
        listaPalavras.push(palavraAtual);
    }
}

export function ordenarLista(lista) {
    for (let i = 1; i <= lista.length; i++) {
        if (i === 1) {
            print(`\n\tLista das Palavras!`);
            print(`\t${i} -> ${lista[i - 1]}`);
        } else {
            print(`\t${i} -> ${lista[i - 1]}`);
        }
    }
}

export function listarPalavras_20CaractereMais(lista) {
    let novaLista = [];

    for (let palavra of lista) {
        if (palavra.length >= 20) {
            novaLista.push(palavra);

        }
    }
    return novaLista;

}

export function listarPalavras_SemCaractere_E(lista) {
    let novaLista = [];

    for (let palavra of lista) {
        let possuiE = false;

        for (let caractere of palavra) {
            if (caractere === `e`) {
                possuiE = true;
                break;
            }
        }

        if (!possuiE) {
            novaLista.push(palavra);
        }
    }
    return novaLista;
}

export function listarPalavrasEspecificas(tamanho, lista) {
    let novaLista = [];
    for (let palavra of lista) {
        if (palavra.length === tamanho) {
            let possuiN = false;

            for (let caractere of palavra) {
                if (caractere === `n`) {
                    possuiN = true;
                    break;
                }
            }
            if (possuiN) {
                novaLista.push(palavra);
            }
        }
    }
    return novaLista;
}

export function mostrarDados(lista, valor, valorTotal) {
    let porcentagemAtual = porcentagem(valor, valorTotal);
    ordenarLista(lista);
    print(`
        \r\t----------------------------------------------------------------
        \r\tCarregamento de arquivo, realizado com sucesso!
        \r\tTotal de palavras do Arquivo:   ${lista.length}
        \r\tPorcentagem:                    ${porcentagemAtual.toFixed(2)} %
        \r\t________________________________________________________________\n`);
}

export function porcentagem(valor, total) {
    return (valor * 100) / total;
}

export function get_number(texto) {
    return Number(question(texto));
}

export function print(texto) {
    return console.log(texto);
}