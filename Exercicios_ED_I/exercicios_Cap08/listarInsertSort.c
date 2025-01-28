#include <stdio.h>
#include <stdlib.h>
#include "metodosOrdenacao.h"

int main() {
    int v[3] = {13, 10, 5};
    int comparacao, insercao;

    insertSort(v, 3, &comparacao, &insercao);
    mostrarVetor(v, 3);
    printf("\nTotal de operacoes: %d (Comparacoes: %d, Insecoes: %d)\n", comparacao + insercao, comparacao, insercao);
    
    return 0;
}