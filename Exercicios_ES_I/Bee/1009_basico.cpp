#include <stdio.h>
#include <iostream>
#include <iomanip>
using namespace std;
 
int main() {
    char nome[20];
    double salario, valor_Vendas;

    scanf("%s", nome);
    scanf("%lf", &salario);
    scanf("%lf", &valor_Vendas);

    double percentual = valor_Vendas * 0.15;

    cout << fixed << setprecision(2);
    cout << "TOTAL = R$ " << salario + percentual << endl;

    return 0;
}