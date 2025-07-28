#include <stdio.h>
#include <stdlib.h>

int main() {
    int colocacao;
    scanf("%d", &colocacao);

    if (colocacao == 1)
    {
        printf("Top 1\n");
    } 
    else if (colocacao <= 3)
    {
        printf("Top 3\n");
    } 
    else if (colocacao <= 5)
    {
        printf("Top 5\n");
    }
    else if (colocacao <= 10)
    {
        printf("Top 10\n");
    }
    else if (colocacao <= 25)
    {
        printf("Top 25\n");
    }
    else if (colocacao <= 50)
    {
        printf("Top 50\n");
    }
    else
    {
        printf("Top 100\n");
    }
    return 0;
}