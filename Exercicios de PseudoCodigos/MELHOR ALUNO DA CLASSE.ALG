Algoritmo "Melhor aluno da Classe"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis
   cont, n: inteiro
   aluno, melhorN: caractere
   nota, maiorN: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   cont <- 1

   Escreva("Escola Santa Angélica")

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