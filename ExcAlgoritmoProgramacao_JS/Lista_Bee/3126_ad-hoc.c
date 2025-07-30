#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int qtd_casos;
    scanf("%d", &qtd_casos);
    getchar();

    char entradas[10000];
    fgets(entradas, sizeof(entradas), stdin);

    int compareceram = 0;
    int lidos = 0;

    char *parte = strtok(entradas, " \n");
    while (parte != NULL && lidos < qtd_casos) {
        if (strcmp(parte, "1") == 0) {
            compareceram++;
        }
        lidos++;
        parte = strtok(NULL, " \n");
    }
    printf("%d\n", compareceram);
    return 0;
}