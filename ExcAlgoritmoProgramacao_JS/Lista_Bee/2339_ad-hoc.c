#include <stdio.h>
#include <stdlib.h>

int main() {
    int competidores, qtd_folhas_total, qtd_folhas_competidor;
    scanf("%d %d %d", &competidores, &qtd_folhas_total, &qtd_folhas_competidor);

    if ((qtd_folhas_total / competidores) >= qtd_folhas_competidor)
    {
        printf("S\n");
    }
    else printf("N\n");

    return 0;
}