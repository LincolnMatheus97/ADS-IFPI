#include <iostream>
#include <cstring>

using namespace std;

class No {
public:
    int mat;
    char nome[23];
    No* prox;
    No* ant;

    No(int m, const char n[23]) {
        mat = m;
        strcpy(nome, n);
        prox = NULL;
        ant = NULL;
    }
};

class Lista {
private:
    No* head;

public:
    Lista() : head(NULL) {}

    void inserirNoInicio(int m, const char n[23]) {
        No* novoNo = new No(m, n);
        novoNo->prox = head;
        if (head != NULL) {
            head->ant = novoNo;
        }
        head = novoNo;
    }

    void inserirNoFinal(int m, const char n[23]) {
        No* novoNo = new No(m, n);
        if (head == NULL) {
            head = novoNo;
        } else {
            No* aux = head;
            while (aux->prox != NULL) {
                aux = aux->prox;
            }
            aux->prox = novoNo;
            novoNo->ant = aux;
        }
    }

    void removerItemEspecifico(int m) {
        if (head == NULL) {
            return;
        }
        No* novoNo = head;
        No* ant = NULL;
        while (novoNo != NULL && novoNo->mat != m) {
            ant = novoNo;
            novoNo = novoNo->prox;
        }
        if (novoNo == NULL) {
            return;
        }
        if (novoNo == head) {
            head = novoNo->prox;
            if (head != NULL) {
                head->ant = NULL;
            }
        } else {
            ant->prox = novoNo->prox;
            if (novoNo->prox != NULL) {
                novoNo->prox->ant = ant;
            }
        }
        delete novoNo;
    }

    void mostrarInicioAoFim() const {
        No* l = head;
        while (l != NULL) {
            cout << l->mat << " " << l->nome << endl;
            l = l->prox;
        }
    }

    void mostrarFimAoInicio() const {
        if (head == NULL) {
            return;
        }
        No* l = head;
        while (l->prox != NULL) {
            l = l->prox;
        }
        while (l != NULL) {
            cout << l->mat << " " << l->nome << endl;
            l = l->ant;
        }
    }
};