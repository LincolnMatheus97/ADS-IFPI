#include <iostream>
#include <thread>
using namespace std;

void tarefa_1() {
    for (int i = 0; i < 10; i++) {
        cout << "TAREFA 1 - EXECUTANDO" << endl;
    }
}

void tarefa_2() {
    for (int i = 0; i < 10; i++) {
        cout << "TAREFA 2 - EXECUTANDO" << endl;
    }
}

void tarefa_3() {
    for (int i = 0; i < 10; i++) {
        cout << "TAREFA 3 - EXECUTANDO" << endl;
    }
}

int main() {
    // CRIO 3 THREADS, EXECUTANDO CADA UMA DELAS.
    thread t1(tarefa_1);
    thread t2(tarefa_2);
    thread t3(tarefa_3);

    // ESPERO QUE AS THREADS TERMINEM ANTES DE CONTINUAR
    t1.join();
    t2.join();
    t3.join();

    cout << "TODAS AS TAREFAS FORAM ENCERRADAS" << endl;
    return 0;
}