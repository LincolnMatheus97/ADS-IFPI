Algoritmo "Caixa Eletronico"
//  
//  
// 
//  
// Descri��o   : Sacar dinheiro em um caixa eletronico
// Autor(a)    : Lincoln Matheus
// Data atual  : 03/10/2023
Var
// Se��o de Declara��es das vari�veis
 VALOR_SAQUE, SALDO: REAL
 SENHA_SAQUE, NUM_CONTA, NUM_AGENCIA: INTEIRO



Inicio

    VALOR_SAQUE <- 0
    SENHA_SAQUE <- 0
    NUM_CONTA <- 0
    SALDO <- 1000

 Escreva ("SEJA BEM-VINDO ! INSIRA SEU CART�O E INFORME O N�MERO DE SUA AG�NCIA:")
 Leia (NUM_AGENCIA)

 Escreva ("INFORME O N�MERO DE SUA CONTA:")
 Leia (NUM_CONTA)
 // Ap�s ler os dados, o sistema dever� trazer do banco de dados o valor do saldo do usu�rio na vari�vel SALDO
 Escreva ("INFORME O VALOR O VALOR DO SAQUE:")
 Leia (VALOR_SAQUE)
 Se VALOR_SAQUE <= SALDO  Entao
 SALDO <- SALDO - VALOR_SAQUE
       Escreva ("SAQUE EFETUADO COM SUCESSO. SEU SALDO ATUAL � R$:")
       Escreva (SALDO)
       Escreva ("RETIRE SEU CART�O, O COMPROVANTE E O DINHEIRO DE SAQUE")
 Senao
       Escreva ("SALDO INSUFICENTE. N�O FOI POSSIVEL EFETUAR O SAQUE")
 Fimse
Fimalgoritmo