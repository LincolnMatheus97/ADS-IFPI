Algoritmo "Melhor aluno da Classe"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis
   cont, n: inteiro
   aluno, melhorN: caractere
   nota, maiorN: real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

   cont <- 1

   Escreva("Escola Santa Ang�lica")

   Escreva("Quantos alunos tem a turma ?:")
   Leia(n)
   Enquanto (cont <= n) Faca

      Escreva("Aluno", cont)
      Escreva("Nome do Aluno:")
      Leia(aluno)
      Escreva("Nota do Aluno:")
      Leia(nota)

      cont <- cont + 1

      Se (nota > maiorN) entao
          maiorN <- nota
          melhorN <- aluno
      Fimse

   Fimenquanto
   Escreva("O melhor aproveitamento foi", melhorN  , "com a nota:", maiorN)

Fimalgoritmo