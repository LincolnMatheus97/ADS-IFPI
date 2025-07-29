#include <stdio.h>
#include <stdlib.h>

int main() {
    int comp_estrada, dist_pedagio;
    scanf("%d %d", &comp_estrada, &dist_pedagio);

    int custo_km, valor_pedagio;
    scanf("%d %d", &custo_km, &valor_pedagio);

    int custo_viagem = 0;

    if (dist_pedagio <= comp_estrada) {
        custo_viagem = (comp_estrada / dist_pedagio) * valor_pedagio + (comp_estrada * custo_km);
    } else {
        custo_viagem = comp_estrada * custo_km;
    }

    printf("%d\n", custo_viagem);
    return 0;
}