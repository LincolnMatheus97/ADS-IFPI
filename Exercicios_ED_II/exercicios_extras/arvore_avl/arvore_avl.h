#ifndef ARVORE_AVL_H
#define ARVORE_AVL_H

#define max(a, b) ((a) > (b) ? (a) : (b))

typedef struct arvore_avl {
    int valor;
    struct arvore_avl* esquerda;
    struct arvore_avl* direita;
    int altura;
} *No;

No criar_no(int valor);
No inserir_simples(No no, int valor);
No remover_simples(No no, int valor);
No inserir_duplo(No no, int valor);
No remover_duplo(No no, int valor);
void em_ordem(No no);
void imprimir_fator_balanceamento(No no);

#endif