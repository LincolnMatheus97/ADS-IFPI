#include <stdio.h>
#include <stdlib.h>

int main() {
    int num_dias, saldo_inicial;
    scanf("%d %d", &num_dias, &saldo_inicial);

    int menor_saldo = saldo_inicial;

    while (num_dias > 0)
    {
        int movimentacao;
        scanf("%d", &movimentacao);

        saldo_inicial += movimentacao;

        if (saldo_inicial < menor_saldo) {
            menor_saldo = saldo_inicial;
        }
        num_dias--;
    }
    
    printf("%d\n", menor_saldo);
    return 0;
}