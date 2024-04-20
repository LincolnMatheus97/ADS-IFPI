/*
Leia um verbo regular terminado em ER e mostre sua conjugação no presente. 
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    let verbo = get_text(`\nDigite um verbo regular terminado em ER: `).toUpperCase();
    let verboSemEr = verbo.slice(0, -2);
    let verboNoPresente = conversorDeVerbo(verboSemEr);
    let escolha = get_text(`\nSeu Verbo era ${verbo}, e na conjugacao no presente fica ${verboNoPresente} !
    \nVoce deseja conjugar mais um verbo ? SIM(S) Ou NAO(N): `).toUpperCase();

    while (escolha === `S`) {
        verbo = get_text(`\nDigite um novo verbo regular: `).toUpperCase();
        verboSemEr = verbo.slice(0, -2);
        verboNoPresente = conversorDeVerbo(verboSemEr);
        escolha = get_text(`\nSeu Verbo era ${verbo}, e na conjugacao no presente fica ${verboNoPresente} !
        \nVoce deseja conjugar mais um verbo ? SIM(S) Ou NAO(N): `).toUpperCase();

    }

    print(`\nPrograma Encerrando...`);

}

function conversorDeVerbo(verbo) {
    let verboNoPresente = ``;

    for (let i = 0; i < verbo.length; i++) {
        verboNoPresente += `${verbo[i]}`;
        if (i + 1 === verbo.length) {
            verboNoPresente += `I`;
        }
    }
    return verboNoPresente
}

main();