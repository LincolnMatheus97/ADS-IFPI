#include <stdio.h>
#include <stdlib.h>

struct endereco {
    char rua[50];
    int numero;
};

struct pessoa {
    char nome[30];
    struct endereco *endereco;
};

int main() {
    struct endereco End = {"Av.Centenario", 3323};
    struct pessoa eu = {"Lincoln", &End};

    printf("Meu nome %s, minha rua: %s e o numero da casa: %d\n", eu.nome, eu.endereco->rua, eu.endereco->numero);
    return 0;
}