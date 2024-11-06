#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int i = 0, n;
    cin >> n;
    cin.ignore();

    while (i < n) {
        int jogada_1, jogada_2;
        string jogador_1, jogador_2, escolha_1, escolha_2;
        cin >> jogador_1 >> escolha_1 >> jogador_2 >> escolha_2;
        cin.ignore();
        cin >> jogada_1 >> jogada_2;

        if ((jogada_1 + jogada_2) % 2 == 0) {
            if (escolha_1 == "PAR") {
                cout << jogador_1 << endl;
            } else {
                cout << jogador_2 << endl;
            }
        } else {
            if (escolha_1 == "IMPAR") {
                cout << jogador_1 << endl;
            } else {
                cout << jogador_2 << endl;
            }
        }
        i++;
    }
}