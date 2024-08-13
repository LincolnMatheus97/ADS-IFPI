import { gerarMenu, get_number, lerArquivo, listarPalavras, listarPalavras_20CaractereMais, listarPalavras_SemCaractere_E, listarPalavrasEspecificas, mostrarDados, print } from "./funcoesUtils.js"

function main() {
    let arquivo = lerArquivo(`words.txt`);
    let listaPalavrasArquivo = listarPalavras(arquivo);
    let opcaoMenu = -1;

    while(opcaoMenu !== 0) {
        print(gerarMenu());
        opcaoMenu = get_number(`\tOpcao: `);
        switch(opcaoMenu) {
            case 1:
                mostrarDados(listaPalavrasArquivo, listaPalavrasArquivo.length, listaPalavrasArquivo.length);
                break;
            case 2:
                let listaPalavrasMaisDeVinte = listarPalavras_20CaractereMais(listaPalavrasArquivo);
                mostrarDados(listaPalavrasMaisDeVinte, listaPalavrasMaisDeVinte.length, listaPalavrasArquivo.length);
                break;
            case 3:
                let listarPalavrasSemCaractereE = listarPalavras_SemCaractere_E(listaPalavrasArquivo);
                mostrarDados(listarPalavrasSemCaractereE, listarPalavrasSemCaractereE.length, listaPalavrasArquivo.length);
                break;
            case 4:
                let quantidadeLetrasPalavras = get_number(`\tDigite a quantidade de letras que deseja: `);
                let listaPalavrasEspecificas = listarPalavrasEspecificas(quantidadeLetrasPalavras, listaPalavrasArquivo);
                mostrarDados(listaPalavrasEspecificas, listaPalavrasEspecificas.length, listaPalavrasArquivo.length);
                break;
            case 0:
                print(`\n\tEncerrando Programa...`);
                break;
    
        }
    }

}

main();