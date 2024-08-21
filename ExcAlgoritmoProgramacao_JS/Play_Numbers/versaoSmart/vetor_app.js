import { print } from "./utils.js";
import { menuUser, show_All_Values, initializer_Vector, reset_Vector, quantity_Vector, show_PositiveValues_And_Quantity, show_NegativeValues_And_Quantity } from "./vetor_funcionabilidade.js";

function main() {
    let vetor_Original = [], vetor_Posiivo = [], vetor_Negativo = [];
    let opcaoMenu = -1;

    while(opcaoMenu !== 16) {
        opcaoMenu = menuUser();
        switch(opcaoMenu) {
            case 1:
                vetor_Original = initializer_Vector(`INICIALIZADO`);
                break;
            case 2:
                show_All_Values(vetor_Original);
                break;
            case 3:
                reset_Vector(vetor_Original);
                break;
            case 4:
                quantity_Vector(vetor_Original);
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                vetor_Posiivo = show_PositiveValues_And_Quantity(vetor_Original);
                break;
            case 9:
                vetor_Negativo = show_NegativeValues_And_Quantity(vetor_Original);
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break;
            case 16:
                break;
        }
    }
}

main();