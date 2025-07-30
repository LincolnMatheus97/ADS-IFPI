#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 4

typedef struct {
    int codigo;
    char responsavel[20];
} Profissional;

int main() {
    Profissional lista[MAX];
    int indice = 0;

    lista[indice].codigo = 1;
    strcpy(lista[indice].responsavel, "Rolien");
    indice++;
    
    lista[indice].codigo = 2;
    strcpy(lista[indice].responsavel, "Naej");
    indice++;

    lista[indice].codigo = 3;
    strcpy(lista[indice].responsavel, "Elehcim");
    indice++;

    lista[indice].codigo = 4;
    strcpy(lista[indice].responsavel, "Odranoel");
    indice++;

    int casos_teste;
    scanf("%d", &casos_teste);

    while (casos_teste != 0) {
        int qtd_avaliacoes;
        scanf("%d", &qtd_avaliacoes);

        while (qtd_avaliacoes != 0) {
            int categoria;
            scanf("%d", &categoria);

            for (int i = 0; i < indice; i++) {
                if (lista[i].codigo == categoria) {
                    printf("%s\n", lista[i].responsavel);
                    break;
                }
            }
            qtd_avaliacoes--;
        }
        casos_teste--;
    }
    return 0;
}