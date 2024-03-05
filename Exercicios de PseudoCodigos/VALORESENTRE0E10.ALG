Algoritmo "ValoresEntre0e10"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis 
   v, n, tot, SImp, SImpares: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

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
   Escreva("A Soma dos números impares entre 0 e 10 é :" , SImpares)
   Escreva("A soma de todos os números impares é :", SImp)
   
   
Fimalgoritmo