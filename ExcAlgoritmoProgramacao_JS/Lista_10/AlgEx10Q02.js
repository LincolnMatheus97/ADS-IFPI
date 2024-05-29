import { get_text, print } from "../utils/io_utils.js";
import { lerArquivo, localizarPalavra } from "./funcoes.js";

function main() {
    const texto = lerArquivo(`textinho.txt`);
    const palavraEspecifica = get_text(`Digite a palavra que queira localizar no texto: `);
    let validação = localizarPalavra(palavraEspecifica, texto);

    if (validação) {
        print(`Palavra ${palavraEspecifica} foi localizada.`);
    } else {
        print(`Palavra ${palavraEspecifica} não foi localizada.`);
    }

}

main();