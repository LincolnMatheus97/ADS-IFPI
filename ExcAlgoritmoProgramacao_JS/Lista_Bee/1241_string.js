import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let [valor_A, valor_B] = get_Text().split(` `);
        let texto = ``, final_A = ``;

        for (let i = valor_A.length - valor_B.length; i < valor_A.length; i++) {
            final_A += valor_A[i];
        }

        if(final_A === valor_B) {
            texto = `encaixa`;
        }else {
            texto = `nao encaixa`;
        }    
        
        print(texto);
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();