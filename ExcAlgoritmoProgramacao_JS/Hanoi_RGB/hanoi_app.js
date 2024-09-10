import { menu_User, nivel_1, nivel_2, nivel_3 } from "./funcionabilidade_app.js";
import { clean, print } from "./utils.js";

function main() {
    let opcaoMenu = -1, vencedor = ``;
    
    while (opcaoMenu !== 0) {
        opcaoMenu = menu_User();
        clean();
        
        switch (opcaoMenu) {
            case 1:
                vencedor = nivel_1();
                print(vencedor);
                break;
            case 2:
                vencedor = nivel_2();
                print(vencedor);
                break;
            case 3:
                vencedor = nivel_3();
                print(vencedor);
                break;
        }
    }
}

main();