#include <stdio.h> 
#include <iostream> 
using namespace std; 
 
typedef struct no { 
    int item; 
    struct no *prox; 
}No; 

main() {
    int quantidade_Vetor;

    cout << "Digite a quantidede de dados no vetor: ";
    cin >> quantidade_Vetor;

    No *v = new No [quantidade_Vetor];

    for (int i = 0; i < quantidade_Vetor; i++) {
        int valor;
        cout << "Digite o valor: ";
        cin >> valor;

        v[i].item = valor;

        i < quantidade_Vetor - 1 ? v[i].prox = &v[i + 1] : v[i].prox = NULL;
    }

    No *p = v;

    while (p != NULL) {
        cout << "Valor: " << p -> item << "\n";
        cout << "Aponta: "<< p -> prox << endl;

        p = p -> prox;
    }

}