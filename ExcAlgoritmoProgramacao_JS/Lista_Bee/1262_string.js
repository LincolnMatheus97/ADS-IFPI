import { question } from "readline-sync";

function main() {
    let rastros = get_Text();

    while (rastros !== ``) {
        let processos = get_Number();
        let caracteres_Rastros = [], parte_Atual = rastros[0];

        for (let i = 1; i < rastros.length; i++) {
            if (rastros[i] !== rastros[i - 1]) {
                caracteres_Rastros.push(parte_Atual);
                parte_Atual = rastros[i];
            }else {
                parte_Atual += rastros[i];
            }
        }

        caracteres_Rastros.push(parte_Atual);

        let minimos_Ciclos = caracteres_Rastros.map((a) => a[0] === `W` ? a.length : Math.ceil(a.length / processos));
        minimos_Ciclos = minimos_Ciclos.reduce((acc, valorAtual) => acc + Number(valorAtual), 0);

        print(minimos_Ciclos);
        rastros = get_Text();
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