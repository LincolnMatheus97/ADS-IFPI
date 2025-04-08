#include <stdio.h>
#include <stdlib.h>
#include "arvore.h"

int main() {
    Arv arvore = NULL;

    ins_arv_busca_binaria(5, &arvore);
    ins_arv_busca_binaria(7, &arvore);
    ins_arv_busca_binaria(3, &arvore);
    ins_arv_busca_binaria(1, &arvore);
    ins_arv_busca_binaria(4, &arvore);
    ins_arv_busca_binaria(6, &arvore);

    printf("%d\n", folhas(arvore));
}