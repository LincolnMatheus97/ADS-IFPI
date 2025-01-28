#include <stdio.h>
#include <stdlib.h>
#include "listaDuplamente.h"

int main() {
    Lista listinha = NULL;
    inserirOrdenado(10, &listinha);
    inserirOrdenado(5, &listinha);
    inserirOrdenado(20, &listinha);
    mostrarLista(listinha);
    printf("\n");
    removerOrdenadamente(10, &listinha);
    mostrarLista(listinha);
}