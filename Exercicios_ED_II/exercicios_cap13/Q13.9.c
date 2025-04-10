#include <stdio.h>
#include <stdlib.h>
#include "arvore.h"

int main() {
    Arv arvore = NULL;
    ins_arv_busca_binaria(5, &arvore);
    ins_arv_busca_binaria(10, &arvore);
    ins_arv_busca_binaria(8, &arvore);
    ins_arv_busca_binaria(4, &arvore);
    ins_arv_busca_binaria(1, &arvore);
    ins_arv_busca_binaria(12, &arvore);
    ins_arv_busca_binaria(6, &arvore);

    printf("Ordem Crescente: ");
    em_ordem(arvore);
    printf("\n");
    printf("Ordem Decrescente: ");
    exibe_de(arvore);
}