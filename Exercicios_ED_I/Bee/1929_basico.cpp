#include <stdio.h>
#include <iostream>
#include <vector>
#include <algorithm>
#include <sstream>
using namespace std;

main() {
    string entrada;
    getline(cin, entrada);
    vector<int> lados;

    istringstream stream(entrada);
    int numero;

    while (stream >> numero) {
        lados.push_back(numero);
    }

    sort(lados.begin(), lados.end());

    if (lados[0] + lados[1] > lados[2] || lados[1] + lados[2] > lados[3]) {
        cout << "S" << endl;
    } else {
        cout << "N" << endl;
    }
}