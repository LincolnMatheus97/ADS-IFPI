#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char entrada[1000];

    while (fgets(entrada, sizeof(entrada), stdin) != NULL) {
        char *parte = strtok(entrada, " \n");
        if (parte == NULL) continue;
        int v = atoi(parte);

        parte = strtok(NULL, " \n");
        if (parte == NULL) continue;
        int t = atoi(parte);

        int deslocamento = v * (2 * t);
        printf("%d\n", deslocamento);
    }
    return 0;
}