function numeros_Array(numeros:Array<number>):string {
    let mensagem:string = "";

    numeros.forEach(element => {
        if (element === numeros[0]) {
            mensagem += `${element}`;
        } else {
            mensagem += `-${element}`;
        }
    });

    return mensagem;
}

function main() {
    const numeros:Array<number> = [1, 2, 3, 4];
    const texto:string = numeros_Array(numeros);
    console.log(texto);
}

main();