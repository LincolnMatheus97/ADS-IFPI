#include <stdio.h>
#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

main() {
    int i, k;

    while (scanf("%d", &i) != EOF) {
        cin.ignore();
        int nivel_Velocidade = 1;
        string velocidades;
        vector<int> velocidade; 

        getline(cin, velocidades);
        istringstream stream(velocidades);
        int numero_Velocidade;

        while (stream >> numero_Velocidade) {
            velocidade.push_back(numero_Velocidade);
        }
        
        int maior_Velocidade = 0;

        for (k = 0; k < i; k++) {
            if (velocidade[k] > maior_Velocidade) {
                maior_Velocidade = velocidade[k];
            }    
        }
        if (maior_Velocidade >= 20) {
            nivel_Velocidade = 3;
        } else if (maior_Velocidade >= 10 && maior_Velocidade < 20) {
            nivel_Velocidade = 2;
        }
        cout << nivel_Velocidade << endl;
    }
}