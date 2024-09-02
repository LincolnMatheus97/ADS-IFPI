import { question } from "readline-sync";

function main() {
    let m = question();

    while(m !== null && m !== ``) {
        let n = parseInt(m);
        let matriz = [];
        let mensagem = ``;

        if(n >= 3 && n <= 70) {
            for (let i = 0; i < n; i++) {
                let linha = [];
    
                for (let j = 0; j < n; j++) {
                    if(i === j && i + j === n - 1){
                        linha.push(2);
                    }else if(i === j) {
                        linha.push(1);
                    }else if(i + j === n - 1) {
                        linha.push(2);
                    }else {
                        linha.push(3);
                    }
        
                }
                matriz.push(linha);
        
            }
            for (let m = 0; m < matriz.length; m++) {
                mensagem += `${matriz[m].join(``)}` + `\n`;
        
            }
            console.log(mensagem.trim());
            console.log(``);
            
        }
        m = question();

    }
}

main();