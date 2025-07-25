#include <stdio.h>
#include <stdlib.h>

int main() {
    int pressao_desejada, pressao_atual;
    scanf("%d", &pressao_desejada);
    scanf("%d", &pressao_atual);

    int diferenca_pressao = pressao_desejada - pressao_atual;
    printf("%d\n", diferenca_pressao);
    return 0;
}