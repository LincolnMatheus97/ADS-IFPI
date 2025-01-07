#include <stdio.h>
#include <stdlib.h>
#include "Q4.2.h"

int main() {
    LISTA listinha = criarLista(10);
    inserirNoInicio(20, &listinha);
    inserirNoInicio(30, &listinha);
    inserirNoFinal(40, &listinha);
    mostrarInicioAoFim(listinha);
    printf("\n");
    removerItemEspecifico(20, &listinha);
    mostrarFimAoInicio(listinha);
    printf("\n");
}