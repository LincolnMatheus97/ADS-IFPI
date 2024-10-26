#include <stdio.h>
#include <iostream>
#include <cmath>
#include <cstdlib>
using namespace std;

main() {
    int a, b, c;
    cin >> a >> b >> c;

    int maior_AB = (a + b + abs(a - b)) / 2;
    int maior = (maior_AB + c + abs(maior_AB - c)) / 2;

    cout << maior << " eh o maior" << endl;
}