import { get_number_random, get_text, print } from "./utils.js";

function main() {
    const TAMANHO_SENHA = 1_000_000;
    let senha = get_number_random(TAMANHO_SENHA);
    let senhaVerificada = verificadorDeSenha(senha);

    print(`Sua senha já foi gerada. Sendo ela ${senhaVerificada}.`);
    let respostaUsuario = get_text(`Voce aceita essa senha: ${senhaVerificada} ? Se sim digite "S" se nao digite "N":  `).toUpperCase();

    while(respostaUsuario !== `S`) {
        senha = get_number_random(TAMANHO_SENHA);
        senhaVerificada = verificadorDeSenha(senha);

        print(`Sua nova senha já foi gerada. Sendo ela ${senhaVerificada}.`);
        respostaUsuario = get_text(`Voce aceita essa senha: ${senhaVerificada} ? Se sim digite "S" se nao digite "N":  `).toUpperCase();
    }

    print(`Você desejou ficar com a senha ${senhaVerificada}. Programa encerrando...\n`);
}

function verificadorDeSenha(senha) {            //Nessa Function fiz a verificação para se o digito Atual é igual ao Anterior,
    let novaSenha = ``;                        //e não permitir que o digito seja antecessor ou sucessor imediato,
    let ultimoDigito = -1;                    //e ainda adicionei uma verificação para o primeiro digito não seja 0.       
    let primeiroDigito = true;

    while(senha > 0) {
        let digito = senha % 10;
        print(digito)

        if(primeiroDigito && digito === 0) {
            digito = get_number_random(1);
        }

        while(digito === ultimoDigito || Math.abs(digito - ultimoDigito) === 1) {
            digito = get_number_random(10);
        }

        novaSenha = digito + novaSenha;
        ultimoDigito = digito;
        senha = Math.floor(senha / 10);
        primeiroDigito = false;
    }

    return novaSenha;
}

main();