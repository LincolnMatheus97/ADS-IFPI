function reduce(arr:any[], criterio:any, valor_Atual:number):any {
    let acumulado:number = valor_Atual;

    for (let i:number = 0; i < arr.length; i++) {
        acumulado = (criterio(acumulado, arr[i], i, arr));
    }
    return acumulado
}

function map(arr:any[], transformadora:any):any {
    let novo_Array:any[] = [];

    for (let i:number = 0; i < arr.length; i++) {
        novo_Array.push(transformadora(i, arr[i]));
    }
    return novo_Array;
}

function main() {
    const array:any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const array_Dobro:any[] = map(array, (indice:number, elemento:number) => elemento * 2);
    const soma_ElemArray:number = reduce(array, (resultado:number, elemento:number) => resultado + elemento, 0);
    console.log(array_Dobro);
    console.log(soma_ElemArray);
}

main();