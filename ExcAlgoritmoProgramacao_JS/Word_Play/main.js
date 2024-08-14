import { avoids, gerarMenu, get_number, get_text, has_no_e, is_abecarian, lerArquivo, listarPalavras, listarPalavras_20CaractereMais, listarPalavrasEspecificas, mostrarDados, print, tamanhoLista, uses_All, uses_Only } from "./funcoesUtils.js"

function main() {
    let arquivo = lerArquivo(`words.txt`);
    let listaPalavrasArquivo = listarPalavras(arquivo);
    let opcaoMenu = -1, listaPalavras = [], letrasProibidas = ``;

    while (opcaoMenu !== 0) {
        print(gerarMenu());
        opcaoMenu = get_number(`\tOpcao: `);
        switch (opcaoMenu) {
            case 1:
                mostrarDados(listaPalavrasArquivo, tamanhoLista(listaPalavrasArquivo), tamanhoLista(listaPalavrasArquivo));
                break;
            case 2:
                listaPalavras = listarPalavras_20CaractereMais(listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 3:
                listaPalavras = has_no_e(listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 4:
                let quantidadeLetrasPalavras = get_number(`\tDigite a quantidade de letras que deseja: `);
                listaPalavras = listarPalavrasEspecificas(quantidadeLetrasPalavras, listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 5:
                letrasProibidas = get_text(`\tDigite letras que nao deseja ver nas palavras: `);
                listaPalavras = avoids(letrasProibidas, listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 6:
                letrasProibidas = get_text(`\tDigite letras que deseja ver nas palavras: `);
                listaPalavras = uses_Only(letrasProibidas, listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 7:
                letrasProibidas = get_text(`\tDigite letras que deseja ver nas palavras: `);
                listaPalavras = uses_All(letrasProibidas, listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 8:
                listaPalavras = is_abecarian(listaPalavrasArquivo);
                mostrarDados(listaPalavras, tamanhoLista(listaPalavras), tamanhoLista(listaPalavrasArquivo));
                break;
            case 0:
                print(`\n\tEncerrando Programa...`);
                break;

        }
    }
}

main();