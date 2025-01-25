#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

typedef struct filmes {
    int codigo;
    string nome;
    string genero;
    int ano_lancamento;

} filmes;

filmes v[10];
int ultimo_add = 0;

void inserir (filmes novo_Filme) {
    if (ultimo_add < 10) {
        v[ultimo_add] = novo_Filme;
        ultimo_add++;
    } else {
        cout << "Não será possivel adicionar um novo filme!" << endl;
    }
}

void remover (string filme_Removido) {
    for (int i = 0; i < ultimo_add; i++) {
        if (v[i].nome == filme_Removido) { 
            for (int j = i; j < ultimo_add - 1; j++) {
                v[j] = v[j + 1];
            }
            ultimo_add--;
            cout << "Filme Removido com Sucesso!" << endl;
            return;
        }
    }
    cout << "Filme nao Encontrado!" << endl;
}

void editar (int codigo_filme) {
    for (int i = 0; i < ultimo_add; i++) {
        if (v[i].codigo == codigo_filme) {
            string novo_nome, novo_genero;
            int novo_ano;

            cout << "Digite o novo nome do filme: ";
            getline(cin, novo_nome);

            cout << "Digite o novo genero do filme: ";
            getline(cin, novo_genero);

            cout << "Digite o novo ano de lancamento: ";
            cin >> novo_ano;

            v[i].nome = novo_nome;
            v[i].genero = novo_genero;
            v[i].ano_lancamento = novo_ano;

            cout << "Filme Atualizado com sucesso!" << endl;
            return;
        }
    }
    cout << "Filme nao encontrado!" << endl;
}

void mostrar () {
    if (ultimo_add == 0) {
        cout << "Nao existe nenhum filme na coleção!" << endl;
    } else {
        for (int i = 0; i < ultimo_add; i++) {
            cout << "Codigo: " << v[i].codigo << "| Nome: " << v[i].nome << "| Genero: " << v[i].genero << "| Ano: " << v[i].ano_lancamento << endl;
        }
    }
}

int main () {
    filmes a1 = {1, "Senhor dos Aneis", "Aventura", 2001};
    filmes a2 = {2, "De volta pro Futuro", "Sci-fi", 1979};
    filmes a3 = {3, "Senhor dos Aneis 3", "Aventura", 2003};
    filmes a4 = {4, "O Hobit", "Aventura", 2012};

    inserir(a1);
    inserir(a2);
    inserir(a3);
    inserir(a4);

    mostrar();

    remover("O Hobit");

    mostrar();

    editar(2);

    mostrar();

    return 0;
    
}