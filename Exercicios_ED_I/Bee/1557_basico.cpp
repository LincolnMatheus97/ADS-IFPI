#include <stdio.h>
#include <iostream>
#include <vector>
#include <iomanip>
#include <sstream>
#include <math.h>
using namespace std;

int maxLength(vector<vector<int>>& matriz) {

}


main() {
    int n;
    cin >> n;

    while (n != 0) {
        vector<vector<int>> matriz;
        int i, j;

        for (i = 0; i < n; i++) {
            vector<int> linha;

            for (j = 0; j < n; j++) {
                int valor = pow(2, i + j);
                linha.push_back(valor);
            }
            matriz.push_back(linha);
        }

        int maior_Numero = maxLength(matriz);

        for (size_t i = 0; i < matriz.size(); i++) {
            ostringstream coluna;
            for (size_t j = 0; j < matriz[i].size(); j++) {
                coluna << setw(maior_Numero) << setfill(" ") << matriz[i][j]; // adiciona padding à esquerda

                if (j != matriz[i].size() - 1) { // adiciona espaço entre os elementos, exceto o último
                    coluna << " ";
                }
            }
            cout << coluna.str() << endl;
        }
        cout << "" << endl;
        cin >> n;
    }
}