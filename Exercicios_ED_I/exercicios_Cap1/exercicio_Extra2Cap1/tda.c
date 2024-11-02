#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct aluno{
    int matricula;
    char nome[30];
}ALUNO;

//Cria um novo ALUNO e inicializa os dados
ALUNO *cria_Aluno(int mat, char nome[30]) {     
    ALUNO *al = (ALUNO*)malloc(sizeof(ALUNO)); //Aloca memoria para estrutura ALUNO, usa o ponteiro *al para armazenar esse endereço
    if (al != NULL) { //Verifica se a alocaçao foi bem sucessida, se falhar retorna null.
        al -> matricula = mat; //Inicializa os dados
        strcpy(al->nome, nome);
    }   
    return al; //Retorna o endereço da nova estrutura
}

//Libera a memoria alocada para um ALUNO
void liberar_Aluno(ALUNO *al) {
    free(al); //Libera a memoria previamente alocado pelo malloc 
}

//Exibe os dados de um ALUNO
void mostrar_Aluno(ALUNO *al) {
    if (al == NULL) {
        return;
    } else {
        printf("-----DADOS DO ALUNO-----\n");
        printf("Matricula: %d\n", al->matricula);
        printf("Nome: %s\n", al->nome);
    }
}

int main() {
    ALUNO *aluno_1 = cria_Aluno(1, "Lincoln");
    mostrar_Aluno(aluno_1);
    free(aluno_1);

    return 0;
}