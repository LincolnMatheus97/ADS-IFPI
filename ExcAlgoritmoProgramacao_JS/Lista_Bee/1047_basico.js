import { question } from "readline-sync";

function main() {
    const entrada = get_number();

    let Nentradas = entrada.split(` `);
    let hora_inicio = parseInt(Nentradas[0]);
    let min_inicio = parseInt(Nentradas[1]);
    let hora_final = parseInt(Nentradas[2]);
    let min_final = parseInt(Nentradas[3]);

    let duracao = Calcular_Duracao(hora_inicio, min_inicio, hora_final, min_final);

    print(`O JOGO DUROU ${duracao[0]} HORA(S) E ${duracao[1]} MINUTO(S)`);

}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Duracao(num1, num2, num3, num4) {
    let duracaomin = (((num3 * 60) + num4) - ((num1 * 60) + num2));
    let hora;
    let minuto;

    if (duracaomin <= 0) {
        duracaomin += 1440;
        hora = Math.floor(duracaomin / 60);
        minuto = duracaomin % 60;
        return [hora, minuto]

    } else {
        hora = Math.floor(duracaomin / 60);
        minuto = duracaomin % 60;
        return [hora, minuto]
    }
}

main();