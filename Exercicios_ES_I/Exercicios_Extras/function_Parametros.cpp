#include <math.h>
#include <stdio.h> 

float square(float param) {
    return param * param;
}

int main(void) {
    float a, b;

    printf("A?\n");
    scanf("%f", &a);
    printf("B?\n");
    scanf("%f", &b);
    printf("The length of the hypotenuse is: %f\n",sqrt(square(a) + square(b)));
    return 0;
}