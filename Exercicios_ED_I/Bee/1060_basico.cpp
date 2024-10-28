#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int contador = 0;
    int i = 0;

    while (i < 6) {
        double numero;
        cin >> numero;

        if (numero > 0) {
            contador++;
        }
        i++;
    }
    cout << contador << " valores positivos" << endl;
}