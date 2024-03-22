import { question } from "readline-sync";

function main() {
    const N = get_number();
    let contador = 1;
    let min = 1;

    if (N > 1 && N < 1_000) {
        while (contador <= N) {

            Calcular_Quadrado(min);
            Calcular_Quadrado_Mais1(min);
            min++;
            contador++;
        }
    }
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

function Calcular_Quadrado(num) {
    let numero = num;
    let contador = 1;
    let mensagem = ``;

    while (contador <= 3) {
        mensagem += `${numero}`;
        if (contador < 3) {
            mensagem += ` `;
        }
        numero *= num;
        contador++;
    }
    print(mensagem);
}

function Calcular_Quadrado_Mais1(num) {
    let numero = num;
    let contador = 1;
    let mensagem = ``;

    mensagem += `${numero} `
    while(contador <= 2) {
        numero *= num;
        mensagem += `${numero + 1}`;
        
        if(contador < 2) {
            mensagem += ` `;
        }
        contador++;
    }
    print(mensagem);
}
main();