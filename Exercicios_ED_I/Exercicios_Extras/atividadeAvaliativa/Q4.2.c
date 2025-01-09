#include <stdio.h>
#include <stdlib.h>
#include "Q4.2.h"

int main() {
    LISTA listinha = criarLista(1003, "Lincoln");
    inserirNoInicio(1022, "Lucas", &listinha);
    inserirNoInicio(1056, "Natiele", &listinha);
    inserirNoFinal(1088,"Thalisson", &listinha);
    printf("Mostrando do inicio ao fim:\n");
    mostrarInicioAoFim(listinha);
    printf("\n");
    removerItemEspecifico(1022, &listinha);
    printf("Mostrando do fim ao inicio:\n");
    mostrarFimAoInicio(listinha);
    printf("\n");
}