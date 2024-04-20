/*
Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte 
regra: o login é composto pelas letras iniciais do nome do usuário.
*/

import { get_text, print } from "../utils/io_utils.js";

function main() {
    const NOME_USUARIO = get_text(`\nDigite seu nome: `).split(` `);
    let login = ``;
    
    for(let i = 0; i < NOME_USUARIO.length; i++) {
        let primeiraLetra = NOME_USUARIO[i].split(``);
        login += `${primeiraLetra[0]}`;

    }

    print(`\nSeu Login é ${login}.\n`);

}

main();