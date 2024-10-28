#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 0;
    int impares = 0, pares = 0, positivos = 0, negativos = 0;

    while (i < 5) {
        int numero;
        cin >> numero;

        if (numero % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
        if (numero > 0) {
            positivos++;
        }else if (numero < 0) {
            negativos++;
        }
        i++;
    }
    cout << pares << " valor(es) par(es)" << endl;
    cout << impares << " valor(es) impar(es)" << endl;
    cout << positivos << " valor(es) positivo(s)" << endl;
    cout << negativos << " valor(es) negativo(s)" << endl;
    
}