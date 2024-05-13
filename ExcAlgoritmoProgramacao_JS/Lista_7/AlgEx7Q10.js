//Receba o valor de uma temperatura em °C e retorne a equivalente em °F. (t°F = (9 * t°C + 160) / 5).

import { get_number, print } from "../utils/io_utils.js";
import { determinarTemperaturaFahrenheit } from "./LMCCP-Funcoes.js";

function main() {
    const TEMP_CELS = get_number(`Digite sua temperatura em celsius: `);
    const TEMP_FAHRE = determinarTemperaturaFahrenheit(TEMP_CELS);
    print(`Dada a temperatura em Celsius ${TEMP_CELS.toFixed(1)}, é equivalente em Fahrenheit ${TEMP_FAHRE.toFixed(1)}.`);

}

main();