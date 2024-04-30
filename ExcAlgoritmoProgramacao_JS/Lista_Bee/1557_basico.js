import { question } from "readline-sync";

function main() {
    let n = Number(question());

    if(n >= 0 && n <= 15) {
        while(n !== 0) {
            let matriz = [];
    
            if(n >= 0 && n <= 100) {
                for (let i = 0; i < n; i++) {
                    let linha = [];
        
                    for (let j = 0; j < n; j++) {
                        let valor = Math.pow(2, i + j);
                        linha.push(valor);
            
                    }
                    matriz.push(linha);
            
                }
                printMatrix(matriz);
                console.log('');
                matriz = [];
                
            }
            n = Number(question());
    
        }
    }
}

function printMatrix(matrix) {
    const maxLength = Math.max(...matrix.flat()).toString().length;

    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = matrix[i][j].toString().padStart(maxLength, ' ');
            row += `${cell}${j !== matrix[i].length - 1 ? ' ' : ''}`;
        }
        console.log(row);
    }
}


main();