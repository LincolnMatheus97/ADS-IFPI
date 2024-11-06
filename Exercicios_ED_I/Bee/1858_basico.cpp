#include <stdio.h>
#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

main() {
    int n;
    string entrada;
    vector<int> numeros; 

    cin >> n;
    cin.ignore();
    getline(cin, entrada);

    istringstream stream(entrada);
    int numero;

    while (stream >> numero) {
        numeros.push_back(numero);
    }

    int menor_Quantidade = 0, i;
    for (i = 1; i < n; i++) {
        if(numeros[i] < numeros[menor_Quantidade]) {
            menor_Quantidade = i;
        }
    }
    cout << menor_Quantidade + 1 << endl;
}