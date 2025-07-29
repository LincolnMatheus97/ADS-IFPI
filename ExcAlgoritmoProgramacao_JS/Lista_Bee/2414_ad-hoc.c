#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char entradas[1000];
    int numeros[1000];
    int i = 0;

    fgets(entradas, sizeof(entradas), stdin);
    char *entrada = strtok(entradas, " \n");

    while (entrada != NULL) {
        numeros[i] = atoi(entrada);
        i++;
        entrada = strtok(NULL, " \n");
    }

    int maior = 0, j = 0;

    while(numeros[j] != 0) {
        if (numeros[j] >= maior) {
            maior = numeros[j];
        }
        j++;
    }

    printf("%d\n", maior);
    return 0;
}