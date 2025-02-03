#include <stdio.h>
#include <stdbool.h>

#define PROCESSOS 3
#define RECURSOS 4

// Recursos existentes
int E[RECURSOS] = {4, 2, 3, 1};
// Recursos disponíveis
int A[RECURSOS] = {2, 1, 0, 0};
// Matriz de alocação
int C[PROCESSOS][RECURSOS] = {
    {0, 0, 1, 0},
    {2, 0, 0, 1},
    {0, 1, 2, 0}
};
// Matriz de requisições
int R[PROCESSOS][RECURSOS] = {
    {2, 0, 0, 1},
    {1, 0, 1, 0},
    {2, 1, 0, 0}
};

// Função para mostrar vetores
void mostrarVetor(int vetor[RECURSOS]) {
    for (int i = 0; i < RECURSOS; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");
}

// Função para mostrar matrizes
void mostrarMatriz(int matriz[PROCESSOS][RECURSOS]) {
    for (int i = 0; i < PROCESSOS; i++) {
        for (int j = 0; j < RECURSOS; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
}

void verificar_seguranca() {
    bool finalizado[PROCESSOS] = {false};
    int recursos_disp[RECURSOS];
    for (int i = 0; i < RECURSOS; i++) {
        recursos_disp[i] = A[i];
    }

    int count = 0;
    while (count < PROCESSOS) {
        bool encontrou = false;
        for (int i = 0; i < PROCESSOS; i++) {
            if (!finalizado[i]) {
                bool pode_executar = true;
                for (int j = 0; j < RECURSOS; j++) {
                    if (R[i][j] > recursos_disp[j]) {
                        pode_executar = false;
                        break;
                    }
                }
                if (pode_executar) {
                    for (int j = 0; j < RECURSOS; j++) {
                        recursos_disp[j] += C[i][j];
                    }
                    printf("Processo %d executado\n", i);
                    printf("Recursos disponiveis: ");
                    mostrarVetor(recursos_disp);
                    printf("\n");
                    finalizado[i] = true;
                    encontrou = true;
                    count++;
                }
            }
        }
        if (!encontrou) {
            printf("Deadlock detectado!\n"); // Deadlock detectado
            return;
        }
    }
    printf("Nenhum deadlock detectado.\n"); // Nenhum deadlock encontrado
}

int main() {
    printf("Recursos existentes:\n");
    mostrarVetor(E);
    printf("\n\nRecursos disponiveis:\n");
    mostrarVetor(A);
    printf("\n\nMatriz de alocacao:\n");
    mostrarMatriz(C);
    printf("\nMatriz de requisicoes:\n");
    mostrarMatriz(R);
    printf("\n");
    verificar_seguranca();
    return 0;
}