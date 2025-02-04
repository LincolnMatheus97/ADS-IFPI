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

// Função para verificar segurança do sistema
void verificar_seguranca() {
    bool finalizado[PROCESSOS] = {false}; // Processos finalizados 
    int recursos_disp[RECURSOS]; // Recursos disponíveis

    // Inicializa recursos disponíveis
    for (int i = 0; i < RECURSOS; i++) {
        recursos_disp[i] = A[i];
    }

    int count = 0; // Contador de processos
    while (count < PROCESSOS) { // Enquanto houver processos
        bool encontrou = false; // Verifica se encontrou processo
        for (int i = 0; i < PROCESSOS; i++) { // Para cada processo
            if (!finalizado[i]) { // Se o processo não foi finalizado
                bool pode_executar = true; // Verifica se o processo pode ser executado
                for (int j = 0; j < RECURSOS; j++) { // Para cada recurso
                    if (R[i][j] > recursos_disp[j]) { // Se a requisição é maior que o recurso disponível
                        pode_executar = false; // Não pode executar
                        break; // Sai do loop
                    }
                }
                if (pode_executar) { // Se pode executar 
                    for (int j = 0; j < RECURSOS; j++) { // Atualiza recursos disponíveis
                        recursos_disp[j] += C[i][j]; // Recurso disponível = Recurso disponível + Recurso alocado
                    }
                    printf("Processo %d executado\n", i);
                    printf("Recursos disponiveis: ");
                    mostrarVetor(recursos_disp);
                    printf("\n");
                    finalizado[i] = true; // Processo finalizado
                    encontrou = true; // Encontrou processo
                    count++; // Incrementa contador
                }
            }
        }
        if (!encontrou) { // Se não encontrou processo
            printf("Deadlock detectado!\n"); // Deadlock detectado
            return;
        }
    }
    // Se não houver deadlock
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