function exibir(...argumentos:any){
    console.log(argumentos);
}

function main() {
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main();