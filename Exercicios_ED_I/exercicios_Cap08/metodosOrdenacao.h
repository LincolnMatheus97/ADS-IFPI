#include <stdio.h>
#include <stdlib.h>

#define troca(a, b) {int x = a; a = b; b = x;}

// ORDENAÇÃO

// bubbleSort

void bubbleSort(int v[], int tamanhoVetor, int *comparacoes, int *trocas) {
    *comparacoes = 0;
    *trocas = 0;
    for (int i = 0; i < tamanhoVetor; i++) {
        for (int j = 0; j < tamanhoVetor - 1; j++) {
            (*comparacoes)++; // Contagem da comparação
            if (v[j] > v[j + 1]) {
                troca(v[j], v[j + 1]);
                (*trocas)++; // Contagem da troca
            }
        }
    }
}

// selectSort

int seleciona(int v[], int tamanhoVetor, int *comparacoes) {
    int i = 0;
    for (int j = 1; j < tamanhoVetor; j++) {
        (*comparacoes)++; // Contagem da comparação
        if (v[i] < v[j]) {
            i = j;
        }
    }
    return i;
}

void selectSort(int v[], int tamanhoVetor, int *comparacoes, int *selecao) {
    *comparacoes = 0;
    *selecao = 0;
    while (tamanhoVetor > 1) {
        int maxIndex = seleciona(v, tamanhoVetor, comparacoes);
        troca(v[maxIndex], v[tamanhoVetor - 1]);
        (*selecao)++; // Contagem de selecoes
        tamanhoVetor--;
    }
}

// insertSort

void insere(int x, int v[], int indexVetor, int *comparacoes, int *insercao) {
    while (indexVetor > 0 && x < v[indexVetor - 1]) {
        (*comparacoes)++; // Contagem da comparação
        v[indexVetor] = v[indexVetor - 1];
        indexVetor--;
        (*insercao)++; // Contagem de insercoes
    }
    v[indexVetor] = x;
    (*insercao)++; // Contagem de insercoes
}

void insertSort(int v[], int tamVetor, int *comparacoes, int *insercao) {
    *comparacoes = 0;
    *insercao = 0;
    for (int i = 0; i < tamVetor; i++) {
        insere(v[i], v, i, comparacoes, insercao);
    }
}

// mergeSort

void intercala(int v[], int p, int m, int u, int *comparacoes, int *trocas) {
    int *w = (int*)malloc((u - p + 1) * sizeof(int));
    if (w == NULL) {
        abort();
    }
    int i = p, j = m + 1, k = 0;
    while (i <= m && j <= u) {
        (*comparacoes)++; // Contagem da comparação
        if (v[i] < v[j]) {
            w[k++] = v[i++];
        } else {
            w[k++] = v[j++];
        }
    }
    while (i <= m) {
        w[k++] = v[i++];
    }
    while (j <= u) {
        w[k++] = v[j++];
    }
    for (k = 0; k <= u - p; k++) {
        v[p + k] = w[k];
        (*trocas)++; // Contagem da troca
    }
    free(w);
}

void mergeSort(int v[], int p, int u, int *comparacoes, int *trocas) {
    if (p == u) {
        return;
    }
    int m = (p + u) / 2;
    mergeSort(v, p, m, comparacoes, trocas);
    mergeSort(v, m + 1, u, comparacoes, trocas);
    intercala(v, p, m, u, comparacoes, trocas);
}

// quickSort

int particiona(int v[], int p, int u, int *comparacoes, int *trocas) {
    int x = v[p];
    p--;
    u++;
    while (p < u) {
        do {
            u--;
            (*comparacoes)++; // Contagem da comparação
        } while (v[u] > x);
        do {
            p++;
            (*comparacoes)++; // Contagem da comparação
        } while (v[p] < x);
        if (p < u) {
            troca(v[p], v[u]);
            (*trocas)++; // Contagem da troca
        }
    }
    return u;
}

void quickSort(int v[], int p, int u, int *comparacoes, int *trocas) {
    if (p >= u) {
        return;
    }
    int m = particiona(v, p, u, comparacoes, trocas);
    quickSort(v, p, m, comparacoes, trocas);
    quickSort(v, m + 1, u, comparacoes, trocas);
}

// BUSCAS

// buscaLinear
int buscaLinear(int x, int v[], int n) {
    for (int i = 0; i < n; i++) {
        if (x == v[i]) {
            return 1;
        }
    }
    return 0;
}

// buscaBinaria

int buscaBinaria(int x, int v[], int n) {
    int p = 0;
    int u = n - 1;
    while (p <= u) {
        int m = (p + u) / 2;
        if (x == v[m]) {
            return 1;
        }
        if (x < v[m]) {
            u = m - 1;
        } else {
            p = m + 1;
        }
    }
    return 0;
}

void mostrarVetor(int v[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", v[i]);
    }
}