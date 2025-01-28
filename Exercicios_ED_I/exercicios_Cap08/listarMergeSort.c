#include <stdio.h>
#include <stdlib.h>
#include "metodosOrdenacao.h"

int main() {
    int v[3] = {22, 8, 2};
    int comparacao, intercalacao;

    mergeSort(v, 0, 2, &comparacao, &intercalacao);
    mostrarVetor(v, 3);
    printf("\nTotal de operacoes: %d (Comparacoes: %d, Intercalacoes: %d)\n", comparacao + intercalacao, comparacao, intercalacao);
    
    return 0;
}