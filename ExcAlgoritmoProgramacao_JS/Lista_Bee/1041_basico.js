import { question } from "readline-sync";

function main() {
    const entrada = get_number();

    let coordenadas = entrada.split(` `);
    let x = parseFloat(coordenadas[0]);
    let y = parseFloat(coordenadas[1]);

    const quadrante = Encontrar_Quadrante(x, y);
    print(`${quadrante}`);
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Encontrar_Quadrante(num1, num2) {
    let mensagem;
    if (num1 > 0 && num2 > 0) {
        mensagem = `Q1`;
    } else if (num1 < 0 && num2 > 0) {
        mensagem = `Q2`;
    } else if (num1 < 0 && num2 < 0) {
        mensagem = `Q3`;
    } else if (num1 > 0 && num2 < 0) {
        mensagem = `Q4`;
    } else if((num1 > 0 || num1 < 0) && num2 === 0){
        mensagem = `Eixo X`;
    } else if(num1 === 0 && (num2 > 0 || num2 < 0)){
        mensagem = `Eixo Y`;
    } else {
        mensagem = `Origem`;
    }
    return mensagem;
}

main();