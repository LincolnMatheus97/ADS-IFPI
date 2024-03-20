/*
Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.º de identificação e seu 
peso.  Escreva um algoritmo que leia um conjunto de cartões e escreva o n.º de identificação e o peso do 
boi mais magro e do boi mais gordo. (Flag: n.º identificação=0).
*/

import { get_number, print } from "../utils/io_utils.js";

function main() {
    let numero_indetificacao = 1;
    let mais_magro = Infinity;
    let mais_gordo = 0;
    let numero_id_maior;
    let numero_id_menor;

    while (numero_indetificacao !== 0) {

        numero_indetificacao = get_number(`Digite o numero de identificacao do boi: `);
        if (numero_indetificacao === 0) {
            break;
        }

        let peso = get_number(`Digite o peso do boi de ID:${numero_indetificacao}: `);

        if (Eh_MaisGordo(mais_gordo, peso)) {
            mais_gordo = peso;
            numero_id_maior = numero_indetificacao;
        } else {
            mais_magro = peso;
            numero_id_menor = numero_indetificacao;
        }
    }
    print(`
    --------------------------------------------------------------------------------------------------
                >>>>>>>>>>>>>>>>>           DETALHES DOS BOIS           >>>>>>>>>>>>>>>>>
    
    ---> N° de Identificação e peso do boi mais magro                   N°:${numero_id_menor} e PESO: ${mais_magro} kg
    ---> N° de Identificação e peso do boi mais gordo                   N°:${numero_id_maior} e PESO: ${mais_gordo} kg
    
    --------------------------------------------------------------------------------------------------`);
}

function Eh_MaisGordo(num1, num2) {
    return num2 > num1;
}

main();