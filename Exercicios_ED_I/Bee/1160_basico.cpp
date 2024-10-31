#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos, i = 0;
    cin >> casos;

    while (i < casos) {
        int populacao_A, populacao_B, anos = 0;
        float cresc_A, cresc_B;
        cin >> populacao_A >> populacao_B >> cresc_A >> cresc_B;

        while (populacao_A <= populacao_B) {
            if (anos > 100) {
                break;
            } else {
                populacao_A += populacao_A * (cresc_A / 100);
                populacao_B += populacao_B * (cresc_B / 100);
                anos++;
            }
        }
        if (anos > 100) {
            cout << "Mais de 1 seculo." << endl;
        } else {
            cout << anos << " anos." << endl;
        }
        i++;
    }
}