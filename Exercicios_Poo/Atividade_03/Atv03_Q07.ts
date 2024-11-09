function filter(arr:Array<number>, criterio:any):any[] {
    let new_Arr:Array<number> = [];

    for (let i = 0; i < arr.length; i++) {
        if (criterio(i, arr[i])) {
            new_Arr.push(arr[i]);
        }
    }
    return new_Arr;
}

function main() {
    const array:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const novo_Array:Array<number> = filter(array, (indice:number, elemento:number) => elemento % 2 === 0);
    console.log(novo_Array);
}

main();