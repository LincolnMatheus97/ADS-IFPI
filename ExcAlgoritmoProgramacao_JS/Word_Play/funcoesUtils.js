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
        4 -> Palavras C/ N Letras que Contem a Letra 'N'
        5 -> Palavras S/ Letras Proibidas
        6 -> Palavras Só com Letras Proibidas
        7 -> Palavras Q Usam todas as Letras Proibidas
        8 -> Palavras Em Ordem Alfabetica
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

export function has_no_e(lista) {
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

export function avoids(string, lista) {
    let novaLista = [];
    for (let palavra of lista) {
        let possuiLetra = false;

        for (let caractere of palavra) {
            for (let caracteresProibidos of string) {
                if (caractere === caracteresProibidos) {
                    possuiLetra = true;
                    break;
                }
            }
        }
        if (!possuiLetra) {
            novaLista.push(palavra);
        }
    }
    return novaLista;
}

export function uses_Only(string, lista) {
    let novaLista = [];
    for (let palavra of lista) {
        if (palavra === string) {
            novaLista.push(palavra);
        }
    }
    return novaLista;
}

export function uses_All(string, lista) {
    let novaLista = [];
    for (let palavra of lista) {
        let possuiTodasLetras = false;

        for (let caractereProibido of string) {
            let caractereIgual = false;
            for (let caractere of palavra) {
                if (caractere === caractereProibido) {
                    caractereIgual = true;
                    break;
                }
            }
            if (!caractereIgual) {
                possuiTodasLetras = true;
                break;
            }
        }
        if (!possuiTodasLetras) {
            novaLista.push(palavra);
        }
    }
    return novaLista;
}

export function is_abecarian(lista) {
    let novaLista = [];

    for (let palavra of lista) {
        let estaEmOrdem = true;

        for (let i = 0; i < palavra.length - 1; i++) {
            if (palavra[i] > palavra[i + 1]) {
                estaEmOrdem = false;
                break;
            }
        }
        if (estaEmOrdem) {
            novaLista.push(palavra);
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

export function tamanhoLista(lista) {
    return lista.length;
}

export function porcentagem(valor, total) {
    return (valor * 100) / total;
}

export function get_number(texto) {
    return Number(question(texto));
}

export function get_text(mensagem) {
    return question(mensagem);
}

export function print(texto) {
    return console.log(texto);
}