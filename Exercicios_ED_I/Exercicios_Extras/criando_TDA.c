#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct ponto
{
    float x;
    float y;
};

typedef struct ponto Ponto;
// Aloca e retorna um ponto com coordenada "x" e "y".
Ponto *pto_Cria(float x, float y)
{
    Ponto *p = (Ponto*) malloc(sizeof(Ponto));
    if (p != NULL)
    {
        p->x = x;
        p->y = y;
    }
    return p;
}

// Libera a memoria alocada para um ponto
void pto_Libera(Ponto *p)
{
    free(p);
}

// Acessa, por referencia, o valor de um ponto
void pto_Acessa(Ponto *p, float *x, float *y)
{
    *x = p->x;
    *y = p->y;
}

// Atribui a um ponto as coordenadas "x" e "y"
void pto_Atribui(Ponto *p, float x, float y)
{
    p->x = x;
    p->y = y;
}

// Calcula a distancia entre dois pontos
float pto_Distancia(Ponto *p1, Ponto *p2)
{
    float dx = p1->x - p2->x;
    float dy = p1->y - p2->y;
    return sqrt(dx * dx + dy * dy);
}


int main () {
    float d;
    Ponto *p, *q;
    p = pto_Cria(10, 21);
    q = pto_Cria(7, 25);

    d = pto_Distancia(p, q);
    printf("A distancia entre p e q = %f\n", d);
    pto_Libera(p);
    pto_Libera(q);

    return 0;
}