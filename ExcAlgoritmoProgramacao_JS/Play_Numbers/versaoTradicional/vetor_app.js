import { print } from "./utils.js";
import { menuUser, show_All_Values, initializer_Vector, reset_Vector, quantity_Vector, show_PositiveValues_And_Quantity, show_NegativeValues_And_Quantity, lowhigh_Value_And_Positions, sum_Values, average_Values, add_Value_In_Vector, remove_Items_Exact_Value, remove_Items_Exact_Position, edit_Items_Exact_Position, save_Values_File, save_Automatic, update_AllValues_Rule } from "./vertor_funcionabilidade.js";

function main() {
    let vetor_Original = [];
    let opcaoMenu = -1;

    while(opcaoMenu !== 16) {
        opcaoMenu = menuUser();
        switch(opcaoMenu) {
            case 1:
                vetor_Original = initializer_Vector(`INICIALIZADO`);
                break;
            case 2:
                print(`${show_All_Values(vetor_Original)}`);
                break;
            case 3:
                vetor_Original = reset_Vector(vetor_Original);
                break;
            case 4:
                print(`${quantity_Vector(vetor_Original)}`);
                break;
            case 5:
                print(`${lowhigh_Value_And_Positions(vetor_Original)}`);
                break;
            case 6:
                print(`${sum_Values(vetor_Original)}`);
                break;
            case 7:
                print(`${average_Values(vetor_Original)}`);
                break;
            case 8:
                print(`${show_PositiveValues_And_Quantity(vetor_Original)}`);
                break;
            case 9:
                print(`${show_NegativeValues_And_Quantity(vetor_Original)}`);
                break;
            case 10:
                vetor_Original = update_AllValues_Rule(vetor_Original);
                break;
            case 11:
                vetor_Original = add_Value_In_Vector(vetor_Original);
                break;
            case 12:
                vetor_Original = remove_Items_Exact_Value(vetor_Original);
                break;
            case 13:
                vetor_Original = remove_Items_Exact_Position(vetor_Original);
                break;
            case 14:
                vetor_Original= edit_Items_Exact_Position(vetor_Original);
                break;
            case 15:
                save_Values_File(vetor_Original);
                break;
            case 16:
                save_Automatic(vetor_Original);
                break;
        }
    }
}

main();