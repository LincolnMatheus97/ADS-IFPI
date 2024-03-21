/*
Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.
*/

import { get_number, get_positive_number, print } from "../../utils/io_utils.js";

function main() {
    const numero_containers = get_positive_number(`Digite o numero de containers que seram transportados: `);
    let volume_containers = Calcular_VolumeContainer(numero_containers);

    const numero_passageiros = get_positive_number(`Digite o numero de passageiros do voo: `);
    let volume_bagagens_passageiros = Calcular_VolumePassageiro(numero_passageiros);

    const peso_sem_combustivel = volume_containers + volume_bagagens_passageiros;
    const combustivel_kg = 500_000 - peso_sem_combustivel;
    const combustivel_possivel = combustivel_kg / 1.5;
    const decolagem_autorizada = combustivel_possivel ? `SIM` : `NÃO`;

    print(`
    >>>>>>>>>>>>>>>         DETALHES SOBRE A AERONAVE           >>>>>>>>>>>>>>>
    
    ---> Quantidade Passageiros:    ------------------------------     ${numero_passageiros}
    ---> Quantidade total de volume de Bagagem + Passageiros:  ---     ${volume_bagagens_passageiros.toFixed(2)}
    ---> Quantidade peso da carga:  ------------------------------     ${volume_containers.toFixed(2)}
    ---> Quantidade possivel de Combustível:    ------------------     ${combustivel_possivel.toFixed(2)}
    ___________________________________________________________________________
    ---> Decolagem Autorizada ? ----------------------------------     ${decolagem_autorizada}
    
    ---------------------------------------------------------------------------`);
}

function Calcular_VolumeContainer(numero) {
    let total = numero;
    let volume_total = 0;

    while (total !== 0) {
        let volume_individual = get_number(`Digite o peso do conainer n${total}: `);
        volume_total += volume_individual;

        total--;
    }
    return volume_total;
}

function Calcular_VolumePassageiro(numero) {
    let total = numero;
    let volume_total = 0;

    while (total !== 0) {
        let numero_volume = get_number(`Digite quantas baganens voce esta levando passageiro n${total}: `);
        volume_total += (numero_volume * 10);
        total--;
    }

    let somatorio = (total * 70) + (volume_total);
    return somatorio;
}

main();