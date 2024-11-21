#include <stdio.h> 
#include <iostream> 
using namespace std; 
 
typedef struct no { 
    int item; 
    struct no *prox; 
}*NO;

typedef NO Lista;

void criar_Lista(int x, Lista *p) {
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

void exibir_Lista(Lista list) {
    if (list == NULL) {
        return;
    }
    cout << list->item << endl;
    return exibir_Lista(list->prox);
}

main() {
    int quantidade_Vetor;

    cout << "Digite a quantidede de dados no vetor: ";
    cin >> quantidade_Vetor;

    int i;
    Lista list = NULL;
    for (i = 0; i < quantidade_Vetor; i++) {
        int valor;
        cout << "Digite um valor" <<endl;
        cin >> valor;
        criar_Lista(valor, &list);
    }
    exibir_Lista(list);
}