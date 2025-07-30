#include <stdio.h>
#include <stdlib.h>

int main() {
    int porta_p, porta_r;
    scanf("%d %d", &porta_p, &porta_r);

    if (porta_p == 1 && porta_r == 0) {
        printf("B\n");
    } else if (porta_p == 1 && porta_r == 1) {
        printf("A\n");
    } else {
        printf("C\n");
    }
    return 0;
}