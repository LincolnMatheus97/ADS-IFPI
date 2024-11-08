#include <stdio.h>
#include "lista.h"

int main() {
    Pilha pilha = NULL;

    empilhar(1, &pilha);
    empilhar(2, &pilha);
    empilhar(3, &pilha);
    
    printf("Primeiro valor da pilha: %d\n", desempilhar(&pilha));
    printf("Segundo valor da pilha: %d\n", desempilhar(&pilha));
    printf("Terceiro valor da pilha: %d\n", desempilhar(&pilha));
}