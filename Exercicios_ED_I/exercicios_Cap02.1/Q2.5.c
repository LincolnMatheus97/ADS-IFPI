/*Usando Pilha, crie uma função para verificar se uma expressão composta apenas por chaves, colchetes e parênteses,
representada por uma cadeia está ou não balanceada. Por exemplo, as expressões [{()()}{}] e {[([{}])]} estão balanceadas,
mas as expressões {[(}]) e {[)()(]} não estão*/

#include <stdio.h>
#include <string.h>
#include "pilha.h"

int ehValida(char *expressao) {
    for (int i = 0; expressao[i] != '\0' && expressao[i] != '\n'; i++) {
        if(!strchr("()[]{}", expressao[i])) {
            return 0;
        }
    }
    return 1;
}

int main() {
    PILHA pilha = criar_Pilha(100);
    char expressao[100];

    printf("Digite sua expressao: ");
    fgets(expressao, sizeof(expressao), stdin);

    if(ehValida(expressao)) {
        for (int i = 0; expressao[i] != '\0' && expressao[i] != '\n'; i++) {
            empilhar(expressao[i], pilha);
        }
        int balanceado = ehBalanceado(pilha);

        if (balanceado) {
            printf("A expressao esta Balanceada...\n");
        } else {
            printf("A expressao nao esta Balanceada...\n");
        }
    } else {
        printf("Digite uma expressao valida...\n");
    }

    return 0;
}