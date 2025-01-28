#include <stdio.h>
#include <stdlib.h>
#include "listarOrdenadoCircular.h"

int main() {
    Lista listinha = NULL;
    inserirOrdenado('a', &listinha);
    inserirOrdenado('c', &listinha);
    inserirOrdenado('b', &listinha);
    mostrarLista(listinha);
}