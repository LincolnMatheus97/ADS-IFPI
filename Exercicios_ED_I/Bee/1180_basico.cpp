#include <stdio.h>
#include <iostream>
#include <vector>
#include <sstream>
#include <climits>
using namespace std;

main() {
    int i;
    size_t j;
    vector<int> numeros;
    cin >> i;
    cin.ignore();

    string entrada;
    getline(cin, entrada); // Leio a linha inteira

    istringstream stream(entrada); // Crio uma stringstream para dividir a entrada em numeros inteiros
    int numero;

    while (stream >> numero) { // Extraio cada numero da string e colocamos no vetor
        numeros.push_back(numero);
    }

    int menor = INT_MAX;
    int posicao;

    for (j = 0; j < numeros.size(); j++) {
        if (numeros[j] < menor) {
            menor = numeros[j];
            posicao = j;
        }
    }

    cout << "Menor valor: " << menor << endl;
    cout << "Posicao: " << posicao << endl;
}