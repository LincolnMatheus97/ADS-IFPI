#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int codigo, quantidade;
    cin >> codigo >> quantidade;
    double total_Pagar = 0.00;

    if (codigo == 1) {
        total_Pagar = 4.00 * quantidade;
        printf("Total: R$ %.2lf\n", total_Pagar);
    } else if (codigo == 2) {
        total_Pagar = 4.50 * quantidade;
        printf("Total: R$ %.2lf\n", total_Pagar);
    } else if (codigo == 3) {
        total_Pagar = 5.00 * quantidade;
        printf("Total: R$ %.2lf\n", total_Pagar);
    } else if (codigo == 4) {
        total_Pagar = 2.00 * quantidade;
        printf("Total: R$ %.2lf\n", total_Pagar);
    } else if (codigo == 5) {
        total_Pagar = 1.50 * quantidade;
        printf("Total: R$ %.2lf\n", total_Pagar);
    }
}