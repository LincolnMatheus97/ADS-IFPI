#include <stdio.h>
#include <Windows.h>

void inicializando_Tarefa() {
    printf(">>>>>> INICIANDO TAREFA\n");
    printf("\n");
    Sleep(4500);

    printf(">>>>>> EM EXECUCAO\n");
    printf("\n");
    Sleep(5000);

    printf(">>>>>> PAUSADA\n");
    printf("\n");
}

void finzalizando_Tarefa() {
    printf(">>>>>> RETOMANDO TAREFA\n");
    printf("\n");
    Sleep(4500);

    printf(">>>>>> EM EXECUCAO\n");
    printf("\n");
    Sleep(5000);

    printf(">>>>>> ENCERRADA\n");
}

int main() {
    inicializando_Tarefa();

    Sleep(8000);

    finzalizando_Tarefa();

    return 0;
}