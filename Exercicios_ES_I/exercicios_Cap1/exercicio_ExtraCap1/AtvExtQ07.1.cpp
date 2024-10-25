#include <stdio.h>
#include <iostream>

using namespace std;

typedef struct no {
    int item;
    struct no *prox;
} *NO;

NO no (int x, NO p) {
    NO n = (struct no*)malloc(sizeof(struct no));
    n -> item = x;
    n -> prox = p;
    return n;
}

main() {
    int quantidade_No;

    cout << "Digite a quantidede de Nos que deseja: ";
    cin >> quantidade_No;

    NO primeiro_No = NULL;
    NO ultimo_No = NULL;

    for (int i = 0; i < quantidade_No; i++) {
        int valor;
        cout << "Digite o valor para o no: ";
        cin >> valor;
  
        NO novo_NO = no(valor, NULL);
        if (primeiro_No == NULL) {
            primeiro_No = novo_NO;
        } else {
            ultimo_No -> prox = novo_NO; 
        }
        ultimo_No = novo_NO;
    }

    NO p = primeiro_No;
    cout << "Valores na lista:" << endl;
    while (p) {
        cout << p->item << endl; 
        p = p->prox;
    }
}