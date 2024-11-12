"use strict";
function filter(arr, criterio) {
    let new_Arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (criterio(i, arr[i])) {
            new_Arr.push(arr[i]);
        }
    }
    return new_Arr;
}
function main() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const novo_Array = filter(array, (indice, elemento) => elemento % 2 === 0);
    console.log(novo_Array);
}
main();
//# sourceMappingURL=Atv03_Q07.js.map