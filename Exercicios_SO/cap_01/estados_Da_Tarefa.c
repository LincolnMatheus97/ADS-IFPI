#include <stdio.h>
#include <Windows.h>
#include <stdlib.h>

int main() {
    printf(">>>>>> INICIANDO TAREFA\n");
    printf("\n");

    Sleep(2000);

    printf(">>>>>> EM EXECUCAO\n");
    printf("\n");

    Sleep(4000);
    
    printf(">>>>> PAUSADA...");
    system("pause");

    Sleep(2000);

    printf(">>>>>> RETOMANDO TAREFA\n");
    printf("\n");

    Sleep(4000);

    printf(">>>>>> FINALIZANDO\n");

    return 0;
}