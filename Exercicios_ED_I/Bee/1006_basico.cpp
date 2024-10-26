#include <stdio.h>
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double nota_A, nota_B, nota_C;

    scanf("%lf", &nota_A);
    scanf("%lf", &nota_B);
    scanf("%lf", &nota_C);

    double peso_A = 2;
    double peso_B = 3;
    double peso_C = 5;

    double media = ((nota_A * peso_A) + (nota_B * peso_B) + (nota_C * peso_C)) / (peso_A + peso_B + peso_C);

    cout << fixed << setprecision(1);
    cout << "MEDIA = " << media << endl;
    return 0;
}