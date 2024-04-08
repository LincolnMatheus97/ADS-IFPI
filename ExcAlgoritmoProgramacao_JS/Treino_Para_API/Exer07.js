import { question } from "readline-sync";

function main() {
    let productName = get_text(`Digite o nome do produto: `).toUpperCase();
    let valueProduct = get_number(`Digite o valor unitario do produto: `);
    let countProduct = get_number(`Digite a quantidade desse produto: `);

    while (productName !== `FIM`) {
        let totalPay = calculatePay(valueProduct, countProduct);
        print(`
        ---------------------------------------------------------
        >>>>>>>>>>>>>           NOTAFISCAL          >>>>>>>>>>>>>
        
        Nome do Produto:                        ${productName}.
        Valor Unitário:                         R$:${valueProduct}
        Quantidade:                             ${countProduct}
        _________________________________________________________
        Valor total à Pagar                     R$:${totalPay.toFixed(2)}
        
        ---------------------------------------------------------\n`);

        productName = get_text(`Digite o nome do produto: `).toUpperCase();
        valueProduct = get_number(`Digite o valor unitario do produto: `);
        countProduct = get_number(`Digite a quantidade desse produto: `);
    }

}

function get_text(text) {
    return question(text);
}

function get_number(text) {
    return Number(question(text));
}

function calculatePay(value, count) {
    let valueTotal = value * count;
    let totalAmountDiscounted = 0;

    if (count <= 10) {
        totalAmountDiscounted = valueTotal;
    } else if (count <= 20) {
        totalAmountDiscounted = valueTotal - percentage(valueTotal, 10);
    } else if (count <= 50) {
        totalAmountDiscounted = valueTotal - percentage(valueTotal, 20);
    } else {
        totalAmountDiscounted = valueTotal - percentage(valueTotal, 25);
    }

    return totalAmountDiscounted;
}

function print(text) {
    return console.log(text);
}

function percentage(total, percente) {
    return total * (percente / 100);
}

main();