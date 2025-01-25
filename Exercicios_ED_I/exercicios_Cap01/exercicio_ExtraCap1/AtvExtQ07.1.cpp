#include <stdio.h>
#include <iostream>

using namespace std;

typedef struct no {
    int item;
    struct no *prox;
} *NO;

void criar_Lista(int x, NO *p) {
    struct no* nozinho = (struct no*)malloc(sizeof(struct no));
    if (nozinho != NULL) {
        nozinho->item = x;
        nozinho->prox = NULL;

        if (*p == NULL) {
            *p = nozinho;
        } else {
            struct no* aux = *p;
            while (aux->prox != NULL) {
                aux = aux->prox;
            }
            aux->prox = nozinho;
        }
    }
}

main() {
    int quantidade_No;

    cout << "Digite a quantidede de Nos que deseja: ";
    cin >> quantidade_No;

    NO primeiro_No = NULL;

    for (int i = 0; i < quantidade_No; i++) {
        int valor;
        cout << "Digite o valor para o no: ";
        cin >> valor;
  
        criar_Lista(valor, &primeiro_No);
    }

    NO p = primeiro_No;
    cout << "Valores na lista:" << endl;
    while (p) {
        cout << p->item << endl; 
        p = p->prox;
    }
}