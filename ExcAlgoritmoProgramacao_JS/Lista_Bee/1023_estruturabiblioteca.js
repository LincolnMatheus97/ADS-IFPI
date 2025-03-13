import { question } from 'readline-sync'

function main() {
    let quantidadeCidades = 1;
    let primeiraCidade = true;

    while (true) {
        let quantidadeCasos = get_Number();
        if (quantidadeCasos === 0) break;

        if (!primeiraCidade) {print(``);} 
        primeiraCidade = false;

        let mapaConsumo = {};
        let totalPessoas = 0, totalConsumo = 0;

        for (let j = 0; j < quantidadeCasos; j++) {
            let [pessoas, consumo] = get_Text().split(` `).map(Number);
            totalPessoas += pessoas;
            totalConsumo += consumo;

            let consumoIndividual = Math.floor(consumo / pessoas);
            mapaConsumo[consumoIndividual] = (mapaConsumo[consumoIndividual] || 0) + pessoas;
        }

        let consumoOrdenado = Object.keys(mapaConsumo).map(Number).sort((a, b) => a - b);

        let ordemDeConsumo = consumoOrdenado.map(c => `${mapaConsumo[c]}-${c}`).join(` `);
        let valorMedio = ((totalConsumo / totalPessoas) * 100) / 100;

        print(`Cidade# ${quantidadeCidades}:`);
        print(ordemDeConsumo);
        print(`Consumo medio: ${valorMedio.toFixed(2)} m3.`);
        quantidadeCidades++;
    }
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();