#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int cod_Peca, quantidade_Peca;
    float valor_Peca, valor_total = 0.0;

    for (int i = 0; i < 2; i++) {
        cin >> cod_Peca >> quantidade_Peca >> valor_Peca;
        valor_total += quantidade_Peca * valor_Peca;
    }

    printf("VALOR A PAGAR: R$ %.2f\n", valor_total);
}