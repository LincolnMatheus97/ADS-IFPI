Algoritmo "ValoresEntre0e10"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis 
   v, n, tot, SImp, SImpares: inteiro


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

   tot <- 0
   SImp <- 0


   Para v <- 1 ate 6 faca
     Escreva("Digite um valor:")
     Leia(n)
     Se (n%2=1) entao
             SImp <- SImp + n
     Fimse
     Se (n >= 0) e (n <= 10) entao
         tot <- tot + 1
         Se (n%2=1) entao
             SImpares <- SImpares + n
         Fimse
     Fimse
   Fimpara


   Escreva("Ao todo foram", tot , "valores entre 0 e 10")
   Escreva("A Soma dos n�meros impares entre 0 e 10 � :" , SImpares)
   Escreva("A soma de todos os n�meros impares � :", SImp)
   
   
Fimalgoritmo