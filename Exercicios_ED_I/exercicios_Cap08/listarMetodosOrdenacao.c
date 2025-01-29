#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "metodosOrdenacao.h"

void testarOrdenacao(int v[], int tamanho) {
    int comparacao = 0, operacao = 0;

    // Teste com Bubble Sort
    int *vBubble = (int *)malloc(tamanho * sizeof(int));
    memcpy(vBubble, v, tamanho * sizeof(int));
    bubbleSort(vBubble, tamanho, &comparacao, &operacao);
    printf("Bubble Sort - Total de operacoes: %d (Comparacoes: %d, Trocas: %d)\n", comparacao + operacao, comparacao, operacao);
    free(vBubble);

    // Teste com Select Sort
    comparacao = 0; operacao = 0;
    int *vSelect = (int *)malloc(tamanho * sizeof(int));
    memcpy(vSelect, v, tamanho * sizeof(int));
    selectSort(vSelect, tamanho, &comparacao, &operacao);
    printf("Select Sort - Total de operacoes: %d (Comparacoes: %d, Selecoes: %d)\n", comparacao + operacao, comparacao, operacao);
    free(vSelect);

    // Teste com Insert Sort
    comparacao = 0; operacao = 0;
    int *vInsert = (int *)malloc(tamanho * sizeof(int));
    memcpy(vInsert, v, tamanho * sizeof(int));
    insertSort(vInsert, tamanho, &comparacao, &operacao);
    printf("Insert Sort - Total de operacoes: %d (Comparacoes: %d, Insercoes: %d)\n", comparacao + operacao, comparacao, operacao);
    free(vInsert);

    // Teste com Merge Sort
    comparacao = 0; operacao = 0;
    int *vMerge = (int *)malloc(tamanho * sizeof(int));
    memcpy(vMerge, v, tamanho * sizeof(int));
    mergeSort(vMerge, 0, tamanho - 1, &comparacao, &operacao);
    printf("Merge Sort - Total de operacoes: %d (Comparacoes: %d, Intercalacoes: %d)\n", comparacao + operacao, comparacao, operacao);
    free(vMerge);

    // Teste com Quick Sort
    comparacao = 0; operacao = 0;
    int *vQuick = (int *)malloc(tamanho * sizeof(int));
    memcpy(vQuick, v, tamanho * sizeof(int));
    quickSort(vQuick, 0, tamanho - 1, &comparacao, &operacao);
    printf("Quick Sort - Total de operacoes: %d (Comparacoes: %d, Particoes: %d)\n", comparacao + operacao, comparacao, operacao);
    free(vQuick);
}

int main() {
    int vPequeno[] = {5, 3, 1};
    int vMedio[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    int vGrande[100];
    for (int i = 0; i < 100; i++) {
        vGrande[i] = 100 - i;
    }

    printf("Teste com entradas pequenas:\n");
    testarOrdenacao(vPequeno, 3);

    printf("\nTeste com entradas medias:\n");
    testarOrdenacao(vMedio, 10);

    printf("\nTeste com entradas grandes:\n");
    testarOrdenacao(vGrande, 100);

    return 0;
}