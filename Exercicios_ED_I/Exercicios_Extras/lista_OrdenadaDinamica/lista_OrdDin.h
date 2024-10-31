struct aluno {
    int matricula;
    char nome[30];
    float n1, n2, n3;
};

typedef struct elemento* Lista;

Lista* criar_Lista();
void liberar_Lista(Lista* li);
int tamanho_Lista(Lista* li);
int lista_Cheia(Lista* li);
int lista_Vazia(Lista* li);
int inserir_Ini_Lista(Lista* li, struct aluno al);
int inserir_Fin_Lista(Lista* li, struct aluno al);
int inserir_Forma_Ordenada(Lista* li, struct aluno al);
int remover_Ini_Lista(Lista* li);
int remover_Fin_Lista(Lista* li);
int remover_Lista(Lista* li, int mat);
int consultar_Pos_Lista(Lista* li, int pos, struct aluno *al);
int consultar_Lista_Matr(Lista* li, int mat, struct aluno *al);