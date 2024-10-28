#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int casos, cobaias = 0, i = 0;
    cin >> casos;
    int r = 0, s = 0, c = 0;

    while (i < casos) {
        int quantidade;
        string animal;
        cin >> quantidade >> animal;
        
        cobaias += quantidade;
        if (animal == "R") {
            r += quantidade;
        } else if (animal == "C") {
            c += quantidade;
        } else if (animal == "S") {
            s += quantidade;
        }
        i++;
    }
    double percentual_C = (c * 100) / static_cast<double>(cobaias);
    double percentual_R = (r * 100) / static_cast<double>(cobaias);
    double percentual_S = (s * 100) / static_cast<double>(cobaias);

    cout << "Total: " << cobaias << " cobaias" << endl;
    cout << "Total de coelhos: " << c << endl;
    cout << "Total de ratos: " << r << endl;
    cout << "Total de sapos: " << s << endl;
    printf("Percentual de coelhos: %.2lf %%\n", percentual_C);
    printf("Percentual de ratos: %.2lf %%\n", percentual_R);
    printf("Percentual de sapos: %.2lf %%\n", percentual_S);
}