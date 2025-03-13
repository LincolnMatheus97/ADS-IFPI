import { question } from 'readline-sync'

// 1°

// function main() {
//     let capitalInicial = get_Number();
//     let taxaJuros = get_Number();
//     let quantidaMeses = get_Number();

//     let jurosTotal = jurosSimples(capitalInicial, taxaJuros, quantidaMeses);
//     let capitalFinal = capitalInicial + jurosTotal;
//     print(`O capital ao final do periodo de ${quantidaMeses} Meses é R$: ${capitalFinal.toFixed(2)}.
//     \t\rSendo o capital incial de R$: ${capitalInicial} e a taxa de juros ${taxaJuros.toFixed(2)}% `);
// }

// function jurosSimples(capital, taxa, meses) {
//     return (capital * (taxa / 100)) * meses;
// }

// 2°

// function main() {
//     let peso = get_Number();
//     let altura = get_Number();

//     let imc = IMC(peso, altura);
//     print(`Dado sua altura ${altura}m e seu peso ${peso}kg, seu Indice Metabolico Calorico é: ${imc.toFixed(2)}`);
// }

// function IMC(peso, altura) {
//     return (peso) / (altura * altura);
// }


// 3°

// function main() {
//     let porcentagemGorjeta = get_Number();
//     const totalConta = 125.92;

//     let valorGorjeta = calcularGorjeta(porcentagemGorjeta, totalConta);
//     print(`Dado ${porcentagemGorjeta}% sobre o valor total da conta R$: ${totalConta.toFixed(2)} é de R$: ${valorGorjeta.toFixed(2)}`);
// }

// function calcularGorjeta(porcentagem, total) {
//     return total * (porcentagem / 100);
// }

// 4°

// function main() {
//     let porcentagemDesconto = get_Number();
//     const valorItem = 152.96;

//     let novoValorItem = calcularDesconto(porcentagemDesconto, valorItem);
//     print(`O item custa R$: ${valorItem} e a loja oferece um desconto de ${porcentagemDesconto}%. O novo valor do item é: ${novoValorItem.toFixed(2)}`);
// }

// function calcularDesconto(porcentagem, valor) {
//     let desconto = valor * (porcentagem / 100);
//     return valor - desconto; 
// }

// 5°

// function main() {
//     let [A, B, C] = get_Text().split(` `).map(Number);
//     let mediaGeometrica = calcularMediaGeometrica(A, B, C);

//     print(`Dado os três numeros positivos ${A}, ${B} e ${C}. Temos que a média geometrica entre eles é ${mediaGeometrica.toFixed(2)}`);
// }

// function calcularMediaGeometrica(A, B, C) {
//     return Math.pow(A * B * C, 1 / 3);
// }

// 6°

// function main() {
//     let [catetoA, catetoB] = get_Text().split(` `).map(Number);
//     let hipotenusa = calcularTeoremaPitagoras(catetoA, catetoB);

//     print(`Dado os catetos A = ${catetoA} e B = ${catetoB}, pelo teorema de pitogaras a hipotenusa é igual á ${hipotenusa.toFixed(1)}`);
// }

// function calcularTeoremaPitagoras(catA, catB) {
//     return Math.sqrt(Math.pow(catA, 2) + Math.pow(catB, 2));
// }

//7°

// function main() {
//     let [x1, y1] = get_Text().split(` `).map(Number);
//     let [x2, y2] = get_Text().split(` `).map(Number);

//     let distaciaEntrePontos = calcularDistancia(x1, y1, x2, y2);
//     print(`Dado os pontos A = (${x1}, ${y1}) e B = (${x2}, ${y2}) a distancia entre os pontos é ${distaciaEntrePontos.toFixed(2)}`);
// }

// function calcularDistancia(x1, y1, x2, y2) {
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// 8°

// function main() {
//     let [A, B, C] = get_Text().split(` `).map(Number);
//     let somatorio = somaDosQuadrados(A, B, C);

//     print(`Dados os inteiros A = ${A}, B = ${B} e C = ${C}, a soma dos quadrados desses números é ${somatorio.toFixed(2)}`);
// }

// function somaDosQuadrados(a, b, c) {
//     return Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
// }

function get_Number() {
    return parseFloat(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();