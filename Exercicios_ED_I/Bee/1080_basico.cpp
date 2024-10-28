#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 0;
    int maior = 0;
    int posicao = 0;

    while (i < 100) {
        int numero;
        cin >> numero;

        if (numero > maior) {
            maior = numero;
            posicao = i + 1;
        }
        i++;
    }

    cout << maior << endl;
    cout << posicao << endl;
}