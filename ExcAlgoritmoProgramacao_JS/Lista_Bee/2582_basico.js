import { question } from "readline-sync";

function main() {
    const musicas = [`PROXYCITY`, `P.Y.N.G.`, `DNSUEY!`, `SERVERS`, `HOST!`, `CRIPTONIZE`, `OFFLINE DAY`, `SALT`, `ANSWER!`, `RAR?`, `WIFI ANTENNAS`];
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let [n1, n2] = get_Text().split(` `).map(Number);
        print(musicas[n1 + n2]);
    }

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