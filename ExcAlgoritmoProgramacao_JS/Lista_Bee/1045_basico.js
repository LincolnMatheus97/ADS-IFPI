import { question } from "readline-sync";

function main() {
    const valores = get_number();

    let Nvalores = valores.split(` `);
    let A = parseFloat(Nvalores[0]);
    let B = parseFloat(Nvalores[1]);
    let C = parseFloat(Nvalores[2]);

    const ordem = Ordem_Decrescente(A, B, C);

    if (!Eh_Triangulo(ordem)) {
        if (Eh_Obtusangulo(ordem)) {
            print(`TRIANGULO OBTUSANGULO`);
            if (Eh_Equilatero(ordem)) {
                print(`TRIANGULO EQUILATERO`);
            } else if (Eh_Isosceles(ordem)) {
                print(`TRIANGULO ISOSCELES`)
            }
        } else if (Eh_Acutangulo(ordem)) {
            print(`TRIANGULO ACUTANGULO`);
            if (Eh_Equilatero(ordem)) {
                print(`TRIANGULO EQUILATERO`);
            } else if (Eh_Isosceles(ordem)) {
                print(`TRIANGULO ISOSCELES`);
            }
        } else if (Eh_Retangulo(ordem)) {
            print(`TRIANGULO RETANGULO`);
        }
    } else {
        print(`NAO FORMA TRIANGULO`);
    }
}

function get_number() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function Ordem_Decrescente(num1, num2, num3) {
    let decrescente;

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            decrescente = [num1, num2, num3];
        } else {
            decrescente = [num1, num3, num2];
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            decrescente = [num2, num1, num3];
        } else {
            decrescente = [num2, num3, num1];
        }
    } else if (num3 >= num1 && num3 >= num2) {
        if (num2 >= num1) {
            decrescente = [num3, num2, num1];
        } else {
            decrescente = [num3, num1, num2];
        }
    } else {

    }
    return decrescente;
}

function Eh_Triangulo(lista) {
    return (lista[0] >= lista[1] + lista[2]);
}

function Eh_Obtusangulo(lista) {
    return (lista[0] ** 2 > lista[1] ** 2 + lista[2] ** 2);
}

function Eh_Isosceles(lista) {
    return (lista[0] === lista[1] || lista[0] === lista[2] ||
        lista[1] === lista[2]);
}

function Eh_Equilatero(lista) {
    return (lista[0] === lista[1] && lista[0] === lista[2]);
}

function Eh_Acutangulo(lista) {
    return (lista[0] ** 2 < lista[1] ** 2 + lista[2] ** 2);
}

function Eh_Retangulo(lista) {
    return (lista[0] ** 2 === lista[1] ** 2 + lista[2] ** 2);
}

main();