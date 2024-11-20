#include <stdio.h>
#include "lista.h"

int main() {
    Pilha pilha = NULL;

    empilhar(1, &pilha);
    empilhar(2, &pilha);
    empilhar(3, &pilha);
    desempilhar(&pilha);
    
    exibir_Lista(pilha);
    int resultado = consultar_Lista(3, pilha);

    if (resultado) {
        printf("Existe na Pilha\n");
    }else {
        printf("Nao existe na Pilha\n");
    }
    
    return 0;
}