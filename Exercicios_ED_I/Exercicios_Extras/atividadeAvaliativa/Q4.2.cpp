#include "Q4.2.hpp"

int main() {
    Lista lista;

    lista.inserirNoInicio(1022, "Lincoln");
    lista.inserirNoInicio(1003, "Lucas");
    lista.inserirNoFinal(1042, "Natiele");
    lista.inserirNoFinal(1086, "Thalisson");

    cout << "Lista do inicio ao fim:" << endl;
    lista.mostrarInicioAoFim();

    cout << "Lista do fim ao inicio:" << endl;
    lista.mostrarFimAoInicio();

    cout << "Removendo o aluno com matricula 1003 (Lucas)..." << endl;
    lista.removerItemEspecifico(1003);

    cout << "Lista do inicio ao fim apos remocao:" << endl;
    lista.mostrarInicioAoFim();

    return 0;
}