function eh_Par(num:number):boolean {
    return (num % 2 == 0);
}

function main() {
    const numero:number = 10;
    const variavel:boolean = eh_Par(numero);

    console.log(`É ${variavel} que numero é Par!`);
}

main();