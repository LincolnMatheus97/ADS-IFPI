#include <stdio.h>
#include <stdlib.h>

#define troca(a, b) {int x = a; a = b; b = x;}

// ORDENAÇÃO

// bubbleSort

void bubbleSort(int v[], int tamanhoVetor, int *comparacoes, int *trocas) {
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
    for (int i = 0; i < tamVetor; i++) {
        insere(v[i], v, i, comparacoes, insercao);
    }
}

// mergeSort

void intercala(int v[], int indInicio, int m, int indFinal, int *comparacoes, int *intercalar) {
    int *w = (int*)malloc((indFinal - indInicio + 1) * sizeof(int));
    if (w == NULL) {
        abort();
    }
    int i = indInicio, j = m + 1, k = 0;
    while (i <= m && j <= indFinal) {
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
    while (j <= indFinal) {
        w[k++] = v[j++];
    }
    for (k = 0; k <= indFinal - indInicio; k++) {
        v[indInicio + k] = w[k];
        (*intercalar)++; // Contagem da intercalacao
    }
    free(w);
}

void mergeSort(int v[], int indexInicial, int indexFinal, int *comparacoes, int *intercalar) {
    if (indexInicial == indexFinal) {
        return;
    }
    int m = (indexInicial + indexFinal) / 2;
    mergeSort(v, indexInicial, m, comparacoes, intercalar);
    mergeSort(v, m + 1, indexFinal, comparacoes, intercalar);
    intercala(v, indexInicial, m, indexFinal, comparacoes, intercalar);
}

// quickSort

int particiona(int v[], int indInicial, int indFinal, int *comparacoes, int *particionar) {
    int pivo = v[indInicial];
    int i = indInicial - 1;
    int j = indFinal - 1;
    while (i < j) {
        do {
            j--;
            (*comparacoes)++; // Contagem da comparação
        } while (v[j] > pivo);
        do {
            i++;
            (*comparacoes)++; // Contagem da comparação
        } while (v[i] < pivo);
        if (i < j) {
            troca(v[i], v[j]);
            (*particionar)++; // Contagem da particao
        }
    }
    return j;
}

void quickSort(int v[], int indInicial, int indFinal, int *comparacoes, int *particionar) {
    if (indInicial >= indFinal) {
        return;
    }
    int p = particiona(v, indInicial, indFinal, comparacoes, particionar);
    quickSort(v, indInicial, p, comparacoes, particionar);
    quickSort(v, p + 1, indFinal, comparacoes, particionar);
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
    int indFinal = n - 1;
    while (p <= indFinal) {
        int m = (p + indFinal) / 2;
        if (x == v[m]) {
            return 1;
        }
        if (x < v[m]) {
            indFinal = m - 1;
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