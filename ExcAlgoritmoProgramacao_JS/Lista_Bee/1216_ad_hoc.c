#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char nomeAmigo[100];
    int totalAmigos = 0;
    int distanciaTotal = 0;
    int distanciaCasa;

    while (1) {
        if (!fgets(nomeAmigo, sizeof(nomeAmigo), stdin) || nomeAmigo[0] == '\n') break;
        if (!fgets(nomeAmigo, sizeof(nomeAmigo), stdin) || nomeAmigo[0] == '\n') break;

        if (sscanf(nomeAmigo, "%d", &distanciaCasa) != 1) continue;

        totalAmigos++;
        distanciaTotal += distanciaCasa;
    }

    if (totalAmigos > 0) {
        double distanciaMedia = (double)distanciaTotal / totalAmigos;
        printf("%.1f\n", distanciaMedia);
    }

    return 0;
}