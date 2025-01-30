#include <stdio.h>
#include <stdlib.h>
#include "metodosOrdenacao.h"

int main() {
    int v[10] = {7, 5, 3, 9, 2, 6, 1, 8, 4, 10};
    int n = 10;
    int comparacoes = 0, particionar = 0;

    printf("Busca Linear\n");
    printf("Busca por 5: %s\n", buscaLinear(5, v, n) ? "Encontrado" : "Não encontrado");

    printf("Busca Binaria\n");
    quickSort(v, 0, n - 1, &comparacoes, &particionar);
    printf("Busca por 5: %s\n", buscaBinaria(5, v, n) ? "Encontrado" : "Não encontrado");
}