"use strict";
function reduce(arr, criterio, valor_Atual) {
    let acumulado = valor_Atual;
    for (let i = 0; i < arr.length; i++) {
        acumulado = (criterio(acumulado, arr[i], i, arr));
    }
    return acumulado;
}
function map(arr, transformadora) {
    let novo_Array = [];
    for (let i = 0; i < arr.length; i++) {
        novo_Array.push(transformadora(i, arr[i]));
    }
    return novo_Array;
}
function main() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const array_Dobro = map(array, (indice, elemento) => elemento * 2);
    const soma_ElemArray = reduce(array, (resultado, elemento) => resultado + elemento, 0);
    console.log(array_Dobro);
    console.log(soma_ElemArray);
}
main();
//# sourceMappingURL=Atv03_Q08.js.map