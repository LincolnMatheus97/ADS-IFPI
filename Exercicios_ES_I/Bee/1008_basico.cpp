#include <stdio.h>
#include <iostream>
#include <iomanip>
using namespace std;
 
int main() {
    int numero_Fun, hora;
    float valor_Hora;

    scanf("%d", &numero_Fun);
    scanf("%d", &hora);
    scanf("%f", &valor_Hora);

    float salario = hora * valor_Hora;

    cout << "NUMBER = " << numero_Fun << endl;
    cout << fixed << setprecision(2);
    cout << "SALARY = U$ " << salario << endl;

    return 0;
}