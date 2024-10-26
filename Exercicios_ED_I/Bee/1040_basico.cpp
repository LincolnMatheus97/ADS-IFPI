#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    double n1, n2, n3, n4;
    cin >> n1 >> n2 >> n3 >> n4;

    double media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

    if (media >= 7.00) {
        printf("Media: %.1lf\n", media);
        cout << "Aluno aprovado." << endl;
    } else if (media >= 5.00 && media < 6.9) {
        printf("Media: %.1lf\n", media);
        cout << "Aluno em exame." << endl;
        
        double nE;
        cin >> nE;

        double media_Final = (media + nE) / 2;
        printf("Nota exame: %.1lf\n", nE);

        if (media_Final >= 5.00) {
            cout << "Aluno aprovado." << endl;
        } else {
            cout << "Aluno reprovado." << endl;
        }
        printf("Media final: %.1lf\n", media_Final);
    } else {
        printf("Media: %.1lf\n", media);
        cout << "Aluno reprovado." << endl;
    }
}