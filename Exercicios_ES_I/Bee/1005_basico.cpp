#include <stdio.h>
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double nota_A, nota_B;

    scanf("%lf", &nota_A);
    scanf("%lf", &nota_B);

    double peso_A = 3.5;
    double peso_B = 7.5;

    double media = ((nota_A * peso_A) + (nota_B * peso_B)) / (peso_A + peso_B);

    cout << fixed << setprecision(5);
    cout << "MEDIA = " << media << endl;
    return 0;
}