#include <stdio.h>
#include <stdlib.h>

void minutosTotais(int h1, int m1, int h2, int m2) {
    int minutosInicial = (h1 * 60) + m1;
    int minutosFinal = (h2 * 60) + m2;

    int minutosTotal;
    if (minutosFinal >= minutosInicial) {
        minutosTotal = minutosFinal - minutosInicial;
        printf("%d\n", minutosTotal);
    } else {
        minutosTotal = (1440 - minutosInicial) + minutosFinal;
        printf("%d\n", minutosTotal);
    }
}

int main() {
    while(1) {
        int h1, m1, h2, m2;
        scanf("%d %d %d %d", &h1, &m1, &h2, &m2);
        if (h1 == 0 && m1 == 0 && h2 == 0 && m2 == 0) break;

        minutosTotais(h1, m1, h2, m2);
    }
    return 0;
}