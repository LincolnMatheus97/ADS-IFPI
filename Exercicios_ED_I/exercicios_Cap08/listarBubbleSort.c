#include <stdio.h>
#include <stdlib.h>
#include "metodosOrdenacao.h"

int main() {
    int v[3] = {5, 3, 1};
    int comparacoes = 0, trocas = 0;

    bubbleSort(v, 3, &comparacoes, &trocas);
    mostrarVetor(v, 3);
    printf("\nTotal de operacoes: %d (Comparacoes: %d, Trocas: %d)\n", comparacoes + trocas, comparacoes, trocas);
    
    return 0;
}