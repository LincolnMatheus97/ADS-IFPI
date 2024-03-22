import { question } from "readline-sync";

function main() {
    let totais_grenal = 0;
    let vitoria_gremio = 0;
    let vitoria_inter = 0;
    let empates = 0;
    let novo_grenal = 0;

    while (true) {
        let n_numeros = get_text();
        let numeros = n_numeros.split(` `);
        let gols_inter = parseInt(numeros[0]);
        let gols_gremio = parseInt(numeros[1]);

        if (gols_inter > gols_gremio) {
            vitoria_inter++;
        } else if (gols_gremio > gols_inter) {
            vitoria_gremio++;
        } else {
            empates++;
        }

        totais_grenal++;

        while (true) {
            print(`Novo grenal (1-sim 2-nao)`);
            novo_grenal = get_number();
            if (novo_grenal === 1 || novo_grenal === 2) {
                break;
            }
        }

        if (novo_grenal === 2) {
            break
        }
    }
    let maio_vencedor = (vitoria_inter > vitoria_gremio > empates) ? `Inter venceu mais` : (vitoria_gremio > vitoria_inter > empates)
        ? `Gremio venceu mais` : `Nao houve vencedor`;

    print(`${totais_grenal} grenais`);
    print(`Inter:${vitoria_inter}`);
    print(`Gremio:${vitoria_gremio}`);
    print(`Empates:${empates}`);
    print(maio_vencedor);

}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function get_number() {
    return parseInt(question());
}

main();