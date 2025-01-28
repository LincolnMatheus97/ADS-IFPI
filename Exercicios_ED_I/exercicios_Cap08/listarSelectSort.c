#include <stdio.h>
#include <stdlib.h>
#include "metodosOrdenacao.h"

int main() {
    int v[3] = {20, 4, 13};
    int comparacoes = 0, selecoes = 0;

    selectSort(v, 3, &comparacoes, &selecoes);
    mostrarVetor(v, 3);
    printf("\nTotal de operacoes: %d (Comparacao: %d, Selecoes: %d)\n", comparacoes + selecoes, comparacoes, selecoes);
    
    return 0;
}