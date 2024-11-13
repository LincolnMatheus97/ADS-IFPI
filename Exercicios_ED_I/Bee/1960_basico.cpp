#include <stdio.h>
#include <iostream>
#include <vector>
#include <string>
using namespace std;

string emRomano(int numero) {
    vector<int> numeros = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    vector<string> simbolos = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

    string valor;

    for (int i = 0; i < 13; i++) {
        while(numero >= numeros[i]) {
            numero -= numeros[i];
            valor += simbolos[i];
        }
    }
    return valor;
}

main() {
    int numero;
    cin >> numero;

    string numeroRomano = emRomano(numero);
    cout << numeroRomano << endl;
}