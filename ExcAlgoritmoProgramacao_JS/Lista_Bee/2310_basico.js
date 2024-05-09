import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let saqueTotal = 0, saqueCerto = 0, bloqueioTotal = 0, bloqueioCerto = 0, ataqueTotal = 0, ataqueCerto = 0;

    for (let i = 0; i < N; i++) {
        let nome = get_Text();

        let [s, b, a] = get_Text().split(` `).map(Number);
        saqueTotal += s;
        bloqueioTotal += b;
        ataqueTotal += a;

        let [s1, b1, a1] = get_Text().split(` `).map(Number);
        saqueCerto += s1;
        bloqueioCerto += b1;
        ataqueCerto += a1;

    }

    let porcentagemSaque = porcentagem(saqueCerto, saqueTotal);
    let porcentagemBloqueio = porcentagem(bloqueioCerto, bloqueioTotal);
    let porcentagemAtaque = porcentagem(ataqueCerto, ataqueTotal);

    print(`Pontos de Saque: ${porcentagemSaque.toFixed(2)} %.`);
    print(`Pontos de Bloqueio: ${porcentagemBloqueio.toFixed(2)} %.`);
    print(`Pontos de Ataque: ${porcentagemAtaque.toFixed(2)} %.`);

}

function porcentagem(valor, total) {
    return (valor * 100) / total;
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();