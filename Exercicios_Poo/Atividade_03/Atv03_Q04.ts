function soma(x:number, y?:any):number {
    return x + y;
}

function main() {
    console.log(soma(1, 2));
    console.log(soma(1, "2"));
    console.log(soma(1));
}

main();