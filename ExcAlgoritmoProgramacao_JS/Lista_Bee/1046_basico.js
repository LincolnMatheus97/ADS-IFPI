import { question } from "readline-sync";

function main() {
    const entrada = get_number();

    let Nentradas = entrada.split(` `);
    let comeco = parseInt(Nentradas[0]);
    let final = parseInt(Nentradas[1]);

    const duracao = Calcular_Duracao(comeco, final);

    print(`O JOGO DUROU ${duracao} HORA(S)`);
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Duracao(num1, num2) {
    let duracao_maxima = 24;
    let intervalo = num1 - num2;

    if(intervalo < 0) {
        intervalo += 24;
        let tempo_duracao = duracao_maxima - intervalo;
        return tempo_duracao;
    } else {
        let tempo_duracao = duracao_maxima - intervalo;

        return tempo_duracao;
    }
}

main();