//Receba o valor de uma temperatura em °F e retorne a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { get_number, print } from "../utils/io_utils.js";
import { determinarTemperaturaCelsius } from "./LMCCP-Funcoes.js";

function main() {
    const TEMP_FAHRE = get_number(`Digite sua temperatura em fahrenheit: `);
    const TEMP_CELS = determinarTemperaturaCelsius(TEMP_FAHRE);
    print(`Dada a temperatura em Fahrenheit ${TEMP_FAHRE.toFixed(1)}, é equivalente em Celsius ${TEMP_CELS.toFixed(1)}.`);

}

main();