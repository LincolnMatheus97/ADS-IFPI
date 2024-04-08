import { question } from "readline-sync";

function main() {
    const NUMBER_OF_CONTAINERS = get_number(`\nDigite a quantidade de containers que o aviao esta levando: `);
    let totalWeightOfContainers = 0;
    let countContainers = 1;

    while (countContainers <= NUMBER_OF_CONTAINERS) {
        totalWeightOfContainers += get_number(`Digite o peso do container n${countContainers}: `);
        countContainers++;
    }

    let ticketNumber = get_number(`Digite o numero do bilhete do passegeiro: `);
    let numberOfPassengers = 0;
    let totalVolume = 0;
    let totalPassengerWeight = 0;

    while (ticketNumber !== 0) {
        let luggageVolume = get_number(`Digite a quantidade de bagagem do passageiro n${ticketNumber}: `);
        totalVolume += luggageVolume;
        numberOfPassengers++;
        totalPassengerWeight += 70 + (luggageVolume * 10);

        ticketNumber = get_number(`Digite o numero do bilhete do passegeiro`);
    }

    const TAKEOFF_WEIGHT = 500_000;
    const FUEL_WEIGHT = TAKEOFF_WEIGHT - (totalWeightOfContainers + totalPassengerWeight);
    const POSSIBLE_FUEL = FUEL_WEIGHT / 1.5;

    let authorizedTakeOff = ``;
    if (POSSIBLE_FUEL <= TAKEOFF_WEIGHT) {
        authorizedTakeOff = `SIM`;
    } else {
        authorizedTakeOff = `NAO`;
    }

    print(`
    >>>>>>>>>>>>>>>         DETALHES SOBRE A AERONAVE           >>>>>>>>>>>>>>>
    
    ---> Quantidade Passageiros:    ------------------------------     ${numberOfPassengers}
    ---> Quantidade total de volume de Bagagem + Passageiros:  ---     ${totalPassengerWeight.toFixed(2)}
    ---> Quantidade peso da carga:  ------------------------------     ${totalWeightOfContainers.toFixed(2)}
    ---> Quantidade possivel de Combustível:    ------------------     ${POSSIBLE_FUEL.toFixed(2)}
    ___________________________________________________________________________
    ---> Decolagem Autorizada ? ----------------------------------     ${authorizedTakeOff}
    
    ---------------------------------------------------------------------------`)
}

function get_number(text) {
    return Number(question(text));
}

function print(text) {
    return console.log(text);
}

main();