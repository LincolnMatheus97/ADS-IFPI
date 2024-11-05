#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    int i, k;
    cin >> i;

    for (k = 1; k <= i; k++) {
        string jogada_1, jogada_2;
        cin >> jogada_1 >> jogada_2;

        if (jogada_1 == "tesoura") {
            if (jogada_2 == "papel") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "lagarto") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "pedra") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else if (jogada_2 == "Spock") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else {
               printf("Caso #%d: De novo!\n", k);
            }
        } else if (jogada_1 == "papel") {
            if (jogada_2 == "pedra") {
               printf("Caso #%d: Bazinga!\n",k);
            } else if (jogada_2 == "Spock") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "tesoura") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else if (jogada_2 == "lagarto") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else {
               printf("Caso #%d: De novo!\n", k);
            }
        } else if (jogada_1 == "pedra") {
            if (jogada_2 == "lagarto") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "tesoura") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "papel") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else if (jogada_2 == "Spock") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else {
               printf("Caso #%d: De novo!\n", k);
            }
        } else if (jogada_1 == "lagartoto") {
            if (jogada_2 == "Spock") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "papel") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "tesoura") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else if (jogada_2 == "pedra") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else {
               printf("Caso #%d: De novo!\n", k);
            }
        } else if (jogada_1 == "Spock") {
            if (jogada_2 == "tesoura") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "pedra") {
               printf("Caso #%d: Bazinga!\n", k);
            } else if (jogada_2 == "papel") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else if (jogada_2 == "lagarto") {
               printf("Caso #%d: Raj trapaceou!\n", k);
            } else {
               printf("Caso #%d: De novo!\n", k);
            }
        }
    }
}