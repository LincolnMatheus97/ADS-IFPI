import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();
    let guardaChuvaCasa = 0, guardaChuvaTrabalho = 0, emCasa = 0, noTrabalho = 0;

    while (quantidadeCasos != 0) {
        let [saidaDia, saidaNoite] = get_Text().split(` `);
        if(saidaDia === `chuva`) {
            if(emCasa > 0) {
                emCasa--;

            }else {
                guardaChuvaCasa++;

            }
            noTrabalho++;

        }

        if(saidaNoite === `chuva`) {
            if(noTrabalho > 0) {
                noTrabalho--;

            }else {
                guardaChuvaTrabalho++;

            }
            emCasa++;
            
        }

        quantidadeCasos--;

    }

    print(`${guardaChuvaCasa} ${guardaChuvaTrabalho}`);

}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();