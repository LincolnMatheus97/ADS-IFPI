#include <stdio.h>
#include <iostream>
#include <vector>
#include <iomanip>
#include <sstream>
#include <math.h>
using namespace std;

main() {
    int n;

    while (scanf("%d", &n) != EOF) {
        if (n == 0) {
            break;
        }

        vector<vector<int>> matriz;
        int i, j;

        for (i = 0; i < n; i++) {
            vector<int> linha;

            for (j = 0; j < n; j++) {
                if (i + j == n - 1) {
                    linha.push_back(2);
                } else if (i == j) {
                    linha.push_back(1);
                } else {
                    linha.push_back(3);
                }
            }
            matriz.push_back(linha);
        }

        for (size_t i = 0; i < matriz.size(); i++) {
            ostringstream linhas;
            for (size_t j = 0; j < matriz[i].size(); j++) {
                linhas << matriz[i][j];
            }
            cout << linhas.str() << endl;
        }
    }
}