#include <stdio.h>
#include <stdlib.h>
#include "metodosOrdenacao.h"

int main()
{
    int v[3] = {30, 5, 12};
    int comparacao = 0, particao = 0;

    quickSort(v, 0, 2, &comparacao, &particao);
    mostrarVetor(v, 3);
    printf("\nTotal de operacoes: %d (Comparacoes: %d, Particoes: %d)\n", comparacao + particao, comparacao, particao);

    return 0;
}