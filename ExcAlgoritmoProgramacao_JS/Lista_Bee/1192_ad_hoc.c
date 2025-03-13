#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main() {
    int casos;
    scanf("%d", &casos);

    for (int i = 0; i < casos; i++) {
        int alg1, alg2;
        char letra;

        scanf("%d %c %d", &alg1, &letra, &alg2);

        int valor = 0;
        if (alg1 == alg2) {
            valor = alg1 * alg2;
        } else if (letra == toupper(letra)) {
            valor = alg2 - alg1;
        } else if (letra == tolower(letra)) {
            valor = alg1 + alg2;
        }

        printf("%d\n", valor);
    }
    return 0;
}