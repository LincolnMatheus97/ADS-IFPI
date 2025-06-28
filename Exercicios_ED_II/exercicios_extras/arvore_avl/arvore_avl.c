#include <stdlib.h>
#include <stdio.h>
#include "arvore_avl.h"

No criar_no(int valor) {
    No novoNo = (No)malloc(sizeof(struct arvore_avl));
    novoNo->valor = valor;
    novoNo->esquerda = NULL;
    novoNo->direita = NULL;
    novoNo->altura = 1;
    return novoNo;
}

int altura(No no) {
    if (no == NULL) {
        return 0;
    }
    return no->altura;
}

int obter_fator_balanceamento(No no) {
    if (no == NULL) return 0;
    return altura(no->esquerda) - altura(no->direita);
}

No rotacao_esq(No no_desbalanceado) {
    No pivo = no_desbalanceado->direita;
    No sub_arvore_central = pivo->esquerda;

    pivo->esquerda = no_desbalanceado;
    no_desbalanceado->direita = sub_arvore_central;

    no_desbalanceado->altura = max(altura(no_desbalanceado->esquerda), altura(no_desbalanceado->direita)) + 1;
    pivo->altura = max(altura(pivo->esquerda), altura(pivo->direita)) + 1;

    return pivo;
}

No rotacao_dir(No no_desbalanceado) {
    No pivo = no_desbalanceado->esquerda;
    No sub_arvore_central = pivo->direita;

    pivo->direita = no_desbalanceado;
    no_desbalanceado->esquerda = sub_arvore_central;

    no_desbalanceado->altura = max(altura(no_desbalanceado->esquerda), altura(no_desbalanceado->direita)) + 1;
    pivo->altura = max(altura(pivo->esquerda), altura(pivo->direita)) + 1;

    return pivo;
}

No no_minimo_valor(No no) {
    No atual = no;
    while (atual->esquerda != NULL) {
        atual = atual->esquerda;
    }
    return atual;
}

No inserir_simples(No no, int valor) {
    if (no == NULL) return criar_no(valor);

    if (valor < no->valor) {
        no->esquerda = inserir_simples(no->esquerda, valor);
    } else if (valor > no->valor) {
        no->direita = inserir_simples(no->direita, valor);
    } else {
        return no;
    }

    no->altura = 1 + max(altura(no->esquerda), altura(no->direita));
    int fb = obter_fator_balanceamento(no);

    if (fb > 1 && valor < no->esquerda->valor) {
        return rotacao_dir(no);
    }
    if (fb < -1 && valor > no->direita->valor) {
        return rotacao_esq(no);
    }

    return no;
}

No remover_simples(No no, int valor) {
    if (no == NULL) return no;

    if (valor < no->valor) {
        no->esquerda = remover_simples(no->esquerda, valor);
    } else if (valor > no->valor) {
        no->direita = remover_simples(no->direita, valor);
    } else {
        if (no->esquerda == NULL || no->direita == NULL) {
            No temp = no->esquerda ? no->esquerda : no->direita;
            if (temp == NULL) {
                temp = no;
                no = NULL;
            } else {
                *no = *temp;
            }
            free(temp);
        } else {
            No temp = no_minimo_valor(no->direita);
            no->valor = temp->valor;
            no->direita = remover_simples(no->direita, temp->valor);
        }
    }

    if (no == NULL) return no;

    no->altura = 1 + max(altura(no->esquerda), altura(no->direita));
    int fb = obter_fator_balanceamento(no);

    if (fb > 1 && obter_fator_balanceamento(no->esquerda) >= 0) {
        return rotacao_dir(no);
    }

    if (fb < -1 && obter_fator_balanceamento(no->direita) <= 0) {
        return rotacao_esq(no);
    }

    return no;
}

No inserir_duplo(No no, int valor) {
    if (no == NULL) return criar_no(valor);

    if (valor < no->valor) {
        no->esquerda = inserir_duplo(no->esquerda, valor);
    } else if (valor > no->valor) {
        no->direita = inserir_duplo(no->direita, valor);
    } else {
        return no;
    }

    no->altura = 1 + max(altura(no->esquerda), altura(no->direita));
    int fb = obter_fator_balanceamento(no);

    if (fb > 1 && valor < no->esquerda->valor) {
        return rotacao_dir(no);
    }
    if (fb < -1 && valor > no->direita->valor) {
        return rotacao_esq(no);
    }
    if (fb > 1 && valor > no->esquerda->valor) {
        no->esquerda = rotacao_esq(no->esquerda);
        return rotacao_dir(no);
    }
    if (fb < -1 && valor < no->direita->valor) {
        no->direita = rotacao_dir(no->direita);
        return rotacao_esq(no);
    }

    return no;
}

No remover_duplo(No no, int valor) {
    if (no == NULL) return no;

    if (valor < no->valor) {
        no->esquerda = remover_duplo(no->esquerda, valor);
    } else if (valor > no->valor) {
        no->direita = remover_duplo(no->direita, valor);
    } else {
        if (no->esquerda == NULL || no->direita == NULL) {
            No temp = no->esquerda ? no->esquerda : no->direita;
            if (temp == NULL) {
                temp = no;
                no = NULL;
            } else {
                *no = *temp;
            }
            free(temp);
        } else {
            No temp = no_minimo_valor(no->direita);
            no->valor = temp->valor;
            no->direita = remover_duplo(no->direita, temp->valor);
        }
    }

    if (no == NULL) return no;

    no->altura = 1 + max(altura(no->esquerda), altura(no->direita));
    int fb = obter_fator_balanceamento(no);

    if (fb > 1 && obter_fator_balanceamento(no->esquerda) >= 0) {
        return rotacao_dir(no);
    }

    if (fb < -1 && obter_fator_balanceamento(no->direita) <= 0) {
        return rotacao_esq(no);
    }
    if (fb > 1 && obter_fator_balanceamento(no->esquerda) < 0) {
        no->esquerda = rotacao_esq(no->esquerda);
        return rotacao_dir(no);
    }
    if (fb < -1 && obter_fator_balanceamento(no->direita) > 0) {
        no->direita = rotacao_dir(no->direita);
        return rotacao_esq(no);
    }

    return no;
}

void em_ordem(No no) {
    if (no != NULL) {
        em_ordem(no->esquerda);
        printf("%d ", no->valor);
        em_ordem(no->direita);
    }
}

void imprimir_fator_balanceamento(No no) {
    if (no != NULL) {
        imprimir_fator_balanceamento(no->esquerda);
        printf("No %d, FB = %d\n", no->valor, obter_fator_balanceamento(no));
        imprimir_fator_balanceamento(no->direita);
    }
}