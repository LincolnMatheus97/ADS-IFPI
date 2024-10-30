#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int quant_Gaso = 0, quant_Alco = 0, quant_Dies = 0, combustivel;
    cin >> combustivel;

    while (combustivel != 4) {
        while (combustivel < 1 || combustivel > 4) {
            cin >> combustivel;
        }
        
        if (combustivel == 1) {
            quant_Alco++;
        } else if (combustivel == 2) {
            quant_Gaso++;
        } else if (combustivel == 3){
            quant_Dies++;
        }
        cin >> combustivel;
    }
    cout << "MUITO OBRIGADO" << endl;
    cout << "Alcool: " << quant_Alco << endl;
    cout << "Gasolina: " << quant_Gaso << endl;
    cout << "Diesel: " << quant_Dies << endl;
}