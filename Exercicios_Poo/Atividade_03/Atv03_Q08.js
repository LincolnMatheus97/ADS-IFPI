function reduce(arr, criterio, valor_Atual) {
    var acumulado = valor_Atual;
    for (var i = 0; i < arr.length; i++) {
        acumulado = (criterio(acumulado, arr[i], i, arr));
    }
    return acumulado;
}
function map(arr, transformadora) {
    var novo_Array = [];
    for (var i = 0; i < arr.length; i++) {
        novo_Array.push(transformadora(i, arr[i]));
    }
    return novo_Array;
}
function main() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var array_Dobro = map(array, function (indice, elemento) { return elemento * 2; });
    var soma_ElemArray = reduce(array, function (resultado, elemento) { return resultado + elemento; }, 0);
    console.log(array_Dobro);
    console.log(soma_ElemArray);
}
main();
