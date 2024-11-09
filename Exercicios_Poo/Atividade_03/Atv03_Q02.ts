function saudacao(nome:string, pronome:string):void {
    if (pronome != null) {
        console.log(`${pronome} ${nome}`);
    }
    if (pronome == null) {
        console.log(`Sr ${nome}`);
    }
}

function main() {
    const nome:string = "Sávia";
    const pronome:string = "Sra";

    saudacao(nome, pronome);
}

main();