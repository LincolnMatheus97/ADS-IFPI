#include <stdio.h>
#include <stdlib.h>
#include "listaEncadeadaOrdenada.h"

int main() {
    Lista lista = NULL;
    inserirOrdenado(10, &lista);
    inserirOrdenado(20, &lista);
    inserirOrdenado(2, &lista);
    mostrarLista(lista);
    removerOrdenado(10, &lista);
    printf("\n");
    mostrarLista(lista);
}