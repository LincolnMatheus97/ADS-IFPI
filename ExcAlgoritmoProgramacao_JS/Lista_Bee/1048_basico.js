import { question } from "readline-sync";

function main() {
    const salario = get_number();

    const reajuste = Calcular_Reajuste(salario);

    print(`Novo salario: ${reajuste[0].toFixed(2)}`);
    print(`Reajuste ganho: ${reajuste[1].toFixed(2)}`);
    print(`Em percentual: ${reajuste[2]} %`);

}

function get_number() {
    return parseFloat(question());
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Reajuste(salario) {
    let novo_salario;
    let percentil;
    let percentual;

    if (salario > 0 && salario <= 400) {
        percentil = 15;
        percentual = salario * (15 / 100);
        novo_salario = (salario + percentual);
    } else if (salario <= 800) {
        percentil = 12;
        percentual = salario * (12 / 100);
        novo_salario = (salario + percentual);
    } else if (salario <= 1200) {
        percentil = 10;
        percentual = salario * (10 / 100);
        novo_salario = (salario + percentual);
    } else if (salario <= 2000) {
        percentil = 7;
        percentual = salario * (7 / 100);
        novo_salario = (salario + percentual);
    } else {
        percentil = 4;
        percentual = salario * (4 / 100);
        novo_salario = (salario + percentual);
    }
    return [novo_salario, percentual, percentil];
}

main();