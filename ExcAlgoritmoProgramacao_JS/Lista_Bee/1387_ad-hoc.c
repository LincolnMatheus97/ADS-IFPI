#include <stdio.h>
#include <stdlib.h>

int main() {
    int esq, dir;
    scanf("%d %d", &esq, &dir);

    while (esq != 0 && dir != 0) {
        int soma = esq + dir;
        printf("%d\n", soma);

        scanf("%d %d", &esq, &dir);
    }
    return 0;
}