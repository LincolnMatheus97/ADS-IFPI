#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int x, z, soma;
    cin >> x;
    cin >> z;

    while (z < x) {
        cin >> z;
    }

    soma = x;
    int contador = 1;

    while (soma <= z) {
        x++;
        soma += x;
        contador++;
    }
    cout << contador << endl;
}