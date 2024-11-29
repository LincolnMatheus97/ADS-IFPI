#include <stdio.h>
#include <stdlib.h>
#include "implementacao.h"

int main() {
    LISTA lista = criarLista(10);
    inserirInicioLista(20, &lista);
    inserirFinalLista(30, &lista);
    inserirFinalLista(40, &lista);
    removerInicioLista(&lista);
    removerFinalLista(&lista);
    exibirLista(lista);
    destruiL(&lista);
    return 0;
}