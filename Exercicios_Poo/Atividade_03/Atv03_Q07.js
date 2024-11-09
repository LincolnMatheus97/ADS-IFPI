function filter(arr, criterio) {
    var new_Arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (criterio(i, arr[i])) {
            new_Arr.push(arr[i]);
        }
    }
    return new_Arr;
}
function main() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var novo_Array = filter(array, function (indice, elemento) { return elemento % 2 === 0; });
    console.log(novo_Array);
}
main();
