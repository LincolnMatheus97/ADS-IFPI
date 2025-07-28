#include <stdio.h>
#include <stdlib.h>

int main() {
    int peso_dir, comprimento_dir, peso_esq, comprimento_esq;
    scanf("%d %d %d %d", &peso_dir, &comprimento_dir, &peso_esq, &comprimento_esq);

    int crianca_dir = (peso_dir * comprimento_dir), crianca_esq = (peso_esq * comprimento_esq);

    if (crianca_dir > crianca_esq) {
        printf("-1\n");
    } else if (crianca_dir < crianca_esq) {
        printf("1\n");
    } else {
        printf("0\n");
    }

    return 0;
}