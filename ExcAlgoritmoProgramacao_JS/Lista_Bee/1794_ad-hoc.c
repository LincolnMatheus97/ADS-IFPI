#include <stdio.h>
#include <stdlib.h>

int main() {
    int pecas, lava_min, lava_max, seca_min, seca_max;
    scanf("%d", &pecas); 
    scanf("%d %d", &lava_min, &lava_max);
    scanf("%d %d", &seca_min, &seca_max);

    if ((pecas >= lava_min && pecas >= seca_min) && ((pecas <= lava_max && pecas <= seca_max))) {
        printf("possivel\n");
    } else {
        printf("impossivel\n");
    }
    return 0;
}