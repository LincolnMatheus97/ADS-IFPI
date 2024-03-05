Algoritmo "SomadorNumerico"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis 
    cont, N, S, maior, menor : inteiro
    

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    cont <- 1
    N <- 0
    Enquanto (cont <= 5) Faca
      Escreva("Digite", cont ,"o.número que deseja somar: ?")
      Leia(N)
      Se (N > maior) Entao
          maior <- N
      Fimse
      Se (N < maior) Entao
          menor <- N
      Fimse
      S <- S + N
      cont <- cont + 1
    FimEnquanto

    Escreva("O valor da soma dos números é: " , S)

    Escreva("O Maior valor digitado foi: " , maior)
    
    Escreva ("O Menor valor digitado foi: " , menor)

Fimalgoritmo