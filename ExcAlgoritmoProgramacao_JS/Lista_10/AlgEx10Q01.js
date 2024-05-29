import { print } from "../utils/io_utils.js";
import { lerArquivo } from "./funcoes.js";

function main() {
    let palavras = lerArquivo(`textinho.txt`);
    let palavra = palavras.split(/[` `,.-]/);
    let palavrasCorretas = palavra.filter(palavra => palavra !== ``);
    let quantidade = palavrasCorretas.length;
    print(quantidade);

}

main();