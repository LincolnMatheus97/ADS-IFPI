#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int condicao = 1, vit_I = 0, vit_G = 0, empate = 0, jogos = 0;

    while (condicao != 2) {
        int gols_I = 0, gols_G = 0;
        cin >> gols_I >> gols_G;

        if (gols_I == gols_G) {
            empate++;
        } else if (gols_I > gols_G) {
            vit_I++;
        } else {
            vit_G++;
        } 
        jogos++;
        cout << "Novo grenal (1-sim 2-nao)" << endl;
        cin >> condicao;
    }
    cout << jogos << " grenais" << endl;
    cout << "Inter:" << vit_I << endl;
    cout << "Gremio:" << vit_G << endl;
    cout << "Empates:" << empate << endl;
    if (vit_I > vit_G) {
        cout << "Inter venceu mais" << endl;
    } else if (vit_G > vit_I){
        cout << "Gremeio venceu mais" << endl;
    } else {
        cout << "Nao houve vencedor" << endl;
    }
}