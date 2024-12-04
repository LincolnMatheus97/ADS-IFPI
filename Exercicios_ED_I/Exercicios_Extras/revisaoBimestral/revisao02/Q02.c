#include <stdio.h>
#include <stdlib.h>

struct produto {
    int id;
    float valor;
};

float calcular_total(struct produto *l, int tamanho) {
    float valor_Total = 0.0;

    for(int i = 0; i < tamanho; i++) {
        valor_Total += l[i].valor;
    }

    return valor_Total;
}

int main() {
    struct produto itens[3] = {{1, 15.5}, {2, 25.0}, {3, 10.0}};
    printf("Total: %.2f\n", calcular_total(itens, 3));
    return 0;
}