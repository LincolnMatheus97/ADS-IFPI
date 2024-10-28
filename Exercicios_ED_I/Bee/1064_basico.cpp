#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int contador = 0;
    double soma_Positivos = 0;
    int i = 0;

    while (i < 6) {
        double numero;
        cin >> numero;

        if (numero > 0) {
            soma_Positivos += numero;
            contador++;
        }
        i++;
    }
    double media_Positivos = soma_Positivos / contador;

    cout << contador << " valores positivos" << endl;
    printf("%.1lf", media_Positivos);
}