#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

//Definicao da estrutura Aluno
typedef struct {
	int mat;
	char nome[30];
} TAluno;

//Vetor de alunos e variavel que controla o ultimo elemento da estrutura
TAluno v[20];
int ultimo = 0;

void inserir(TAluno novo){	
	if(ultimo < 20) { //Verifico se ainda tem espaço no vetor
		v[ultimo] = novo; //Incremento novo aluno na posção "ultimo"
		ultimo++; //Incremento o indice ultimo
	} else {
		cout << "Lista esta Cheia, não é possivel inserir um novo aluno!" << endl;
	}
}

void remover(int procurado){
	int aluno_Encontrado = -1;

	//Procuro o aluno de matricula 'procurado'
	for (int i = 0; i < ultimo; i++) {
		if(v[i].mat == procurado) {
			aluno_Encontrado = i;
			break;
		}
	}

	if (aluno_Encontrado != -1) { //Se encontrar o aluno
		//Remove o aluno da estrutura
		for (int i = aluno_Encontrado; i < ultimo - 1; i++) {
			v[i] = v[i + 1]; //Movo, todo o resto uma posicao para tras
		}
		ultimo--;
		cout << "Aluno Removido com sucesso!" << endl;
	} else {
		cout << "Aluno não Encontrado!" << endl;
	}
}

void mostra(){
	if (ultimo == 0) { //Verifico se o vetor nao esta vazio
		cout << "Nenhum Aluno consta na lista" << endl;
	} else {
		for (int i = 0; i < ultimo; i++) { //Mostro cada elemento da estrutura de aluno
			cout << "Matricula: " << v[i].mat << ", Nome: " << v[i].nome << endl;
		}
	}
}

main(){
	int matricula;
	char nome_Aluno[30];
	char condicao = 's';

	while (condicao != 'n') {
		printf("Digite a matricula do aluno: ");
		scanf("%d", &matricula);

		printf("Digite o nome do aluno: ");
		scanf("%s", nome_Aluno);

		TAluno n;
		n.mat = matricula;
		strcpy(n.nome, nome_Aluno); //Copio o conteudo de nome_Aluno para o campo "nome" da estrutura do aluno

		inserir(n);

		printf("Deseja inserir mais alunos? (s) ou (n):");
		scanf(" %c", &condicao); 
	}

	cout << "Lista dos Alunos" << endl;
	mostra();

	return 0;
}