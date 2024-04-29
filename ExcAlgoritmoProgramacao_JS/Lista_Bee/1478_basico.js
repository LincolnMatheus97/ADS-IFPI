import { question } from "readline-sync";

function main() {
    let n = Number(question());

    while(n !== 0) {
        let matriz = [];

        if(n >= 0 && n <= 100) {
            for (let i = 0; i < n; i++) {
                let linha = [];
    
                for (let j = 0; j < n; j++) {
                    let valor = Math.abs(i - j) + 1;
                    linha.push(valor);
        
                }
                matriz.push(linha);
        
            }
            for (let i = 0; i < matriz.length; i++) {
                let linha = '';
                for (let j = 0; j < matriz[i].length; j++) {
                    linha += matriz[i][j].toString().padStart(3, ' ') + (j === matriz[i].length - 1 ? '' : ' ');
                }
                console.log(linha);
            }
            console.log('');
            matriz = [];
            
        }
        n = Number(question());

    }
}

main();