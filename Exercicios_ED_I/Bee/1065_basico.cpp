#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int contador = 0;
    int i = 0;

    while (i < 5) {
        int numero;
        cin >> numero;
        if (numero % 2 == 0) {
            contador++;
        }
        i++;
    }
    cout << contador << " valores pares" << endl;
}