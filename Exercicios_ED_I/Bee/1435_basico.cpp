#include <stdio.h>
#include <iostream>
#include <vector>
#include <sstream>
#include <iomanip>
using namespace std;

main() {
    int n;
    cin >> n;

    while (n != 0) {
        int i, j;
        vector<vector<int>> matriz;

        for (i = 0; i < n; i++) {
            vector<int> linha;

            for (j = 0; j < n; j++) {
                int menor_I_J = min(i, j);
                int menor_I1_J1 = min(n - i - 1, n - j - 1);
                int menor = min(menor_I_J, menor_I1_J1) + 1;
                linha.push_back(menor);
            }
            matriz.push_back(linha);
        }

        for (size_t i = 0; i < matriz.size(); i++) {
            ostringstream linhas;
            for (size_t j = 0; j < matriz[i].size(); j++) {
                linhas << setw(3) << matriz[i][j]; // Adiciono o numero com preenchimento para a largura de 3

                if (j != matriz[i].size() - 1) { // Adiciono um espaço, exceto apos o ultimo elemento
                    linhas << " ";
                }
            }
            cout << linhas.str() << endl;
        }
        cout << "" << endl;
        cin >> n;
    }
}