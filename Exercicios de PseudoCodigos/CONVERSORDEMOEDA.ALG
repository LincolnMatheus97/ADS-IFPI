Algoritmo "ConversorDeMoeda"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis
      R, D: real
      C, Q: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      C<-1
   Escreva("Quantas vezes você quer converter: ?")
   Leia(Q)
   Enquanto (C <= Q) faca
      Escreva("Quanto você quer converter: ?")
      Leia(R)
      D <- R/5.20
      Escreva("Você terá em Doláres: ", D)
      C<- C+1
   Fimenquanto

Fimalgoritmo