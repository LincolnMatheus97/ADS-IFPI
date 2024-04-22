/*
Leia um senha de um usuário, colocando asteriscos nos caracteres digitados e verifique se a senha é 
correta ou não. 
*/
import { hideInput, print } from "../utils/io_utils.js";

function main() {
    let senha = hideInput(`\nDigite sua senha: `);
    let senhaCorreta = 1234;

    while(senha != senhaCorreta) {
        senha = hideInput(`\nAcesso Negado ! Digite novamente sua senha: `);

    }

    print(`\nAcesso Permitido.`);

}

main();