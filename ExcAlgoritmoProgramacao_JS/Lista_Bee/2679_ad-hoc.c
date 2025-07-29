#include <stdio.h>
#include <stdlib.h>

int main() {
    int numero;
    scanf("%d", &numero);

    int prox_par = 0;

    while (prox_par <= numero || prox_par % 2 != 0) {
        prox_par++;
    }

    printf("%d\n", prox_par);
    return 0;
}