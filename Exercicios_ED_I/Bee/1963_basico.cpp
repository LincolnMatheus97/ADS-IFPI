#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double valorAntigo, valorAtual;
    cin >> valorAntigo >> valorAtual;

    double percentualAumento = ((valorAtual * 100.0) / valorAntigo) - 100;
    printf("%.2lf%%\n", percentualAumento);
}