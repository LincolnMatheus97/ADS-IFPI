import { question } from "readline-sync";

function main() {
    let soma = 0

    for (let i = 0; i < 3; i++) {
        let resposta = get_Text();

        while (resposta !== `caw caw`) {
            if (resposta[2] == `*`) {
                soma += 1;
            }
            if (resposta[0] == `*`) {
                soma += 4;
            }
            if (resposta[1] == `*`) {
                soma += 2;
            }

            resposta = get_Text();
        }
        print(soma);
        soma = 0;
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();