Algoritmo "ConversorDeMoeda"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis
      R, D: real
      C, Q: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
      C<-1
   Escreva("Quantas vezes voc� quer converter: ?")
   Leia(Q)
   Enquanto (C <= Q) faca
      Escreva("Quanto voc� quer converter: ?")
      Leia(R)
      D <- R/5.20
      Escreva("Voc� ter� em Dol�res: ", D)
      C<- C+1
   Fimenquanto

Fimalgoritmo