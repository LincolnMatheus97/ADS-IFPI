Algoritmo "SomadorNumerico"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis 
    cont, N, S, maior, menor : inteiro
    

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    cont <- 1
    N <- 0
    Enquanto (cont <= 5) Faca
      Escreva("Digite", cont ,"o.n�mero que deseja somar: ?")
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

    Escreva("O valor da soma dos n�meros �: " , S)

    Escreva("O Maior valor digitado foi: " , maior)
    
    Escreva ("O Menor valor digitado foi: " , menor)

Fimalgoritmo