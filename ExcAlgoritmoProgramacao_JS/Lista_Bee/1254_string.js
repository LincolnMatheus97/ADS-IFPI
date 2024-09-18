import { question } from "readline-sync";

function main() {
    let tag_Original = get_Text();

    while (tag_Original !== ``) {
        let valor_Numerico = get_Number();
        let documento = get_Text();

        let documento_Atualizado = substittuir_Tag(documento, tag_Original, valor_Numerico);
        print(documento_Atualizado);

        tag_Original = get_Text();
    }
}

function get_Text() {
    return question().trim();
}

function get_Number() {
    return parseInt(question().trim());
}

function substittuir_Tag(texto, tag, valor) {
    let novo_Doc = ``;
    let i = 0;
    let tamanho_Tag = tag.length;
    while (i < texto.length) {
        while (i < texto.length && texto[i] !== `<`) {
            novo_Doc += texto[i++];

        }

        if (i < texto.length && texto[i] === '<') {
            novo_Doc += texto[i++];
            while (i < texto.length && texto[i] !== '>') {
                if (texto.substr(i, tamanho_Tag).toUpperCase() === tag.toUpperCase()) {
                    novo_Doc += `${valor}`;
                    i += tamanho_Tag;
                } else {
                    novo_Doc += texto[i++];
                }
            }
            if (i < texto.length && texto[i] === '>') {
                novo_Doc += texto[i++];
            }
        }
    }
    return novo_Doc;
}

function print(texto) {
    console.log(texto);
}

main();