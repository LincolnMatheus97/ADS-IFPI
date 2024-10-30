#define MAX 100

struct aluno {
    int matricula;
    char nome[30];
    float n1, n2, n3;
};

typedef struct lista Lista;
Lista* criar_Lista();
void liberar_Lista(Lista* li);
int tamanho_Lista(Lista* li);
int lista_Cheia(Lista* li);
int lista_Vazia(Lista* li);
int inserir_Final_Lista(Lista* li, struct aluno al);
int inserir_Inicio_Lista(Lista* li, struct aluno al);
int inserir_Forma_Ordenada(Lista* li, struct aluno al);
int remover_Final_Lista(Lista* li);
int remover_Inicio_Lista(Lista* li);
int remover_Lista(Lista* li, int mat);
int consultar_Lista_Pos(Lista* li, int pos, struct aluno *al);
int consultar_Lista_Cont(Lista* li, int mat, struct aluno *al);
void imprimir_Lista(Lista* li);