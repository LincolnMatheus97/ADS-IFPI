Algoritmo "Caixa Eletronico"
//  
//  
// 
//  
// Descrição   : Sacar dinheiro em um caixa eletronico
// Autor(a)    : Lincoln Matheus
// Data atual  : 03/10/2023
Var
// Seção de Declarações das variáveis
 VALOR_SAQUE, SALDO: REAL
 SENHA_SAQUE, NUM_CONTA, NUM_AGENCIA: INTEIRO



Inicio

    VALOR_SAQUE <- 0
    SENHA_SAQUE <- 0
    NUM_CONTA <- 0
    SALDO <- 1000

 Escreva ("SEJA BEM-VINDO ! INSIRA SEU CARTÃO E INFORME O NÚMERO DE SUA AGÊNCIA:")
 Leia (NUM_AGENCIA)

 Escreva ("INFORME O NÚMERO DE SUA CONTA:")
 Leia (NUM_CONTA)
 // Após ler os dados, o sistema deverá trazer do banco de dados o valor do saldo do usuário na variável SALDO
 Escreva ("INFORME O VALOR O VALOR DO SAQUE:")
 Leia (VALOR_SAQUE)
 Se VALOR_SAQUE <= SALDO  Entao
 SALDO <- SALDO - VALOR_SAQUE
       Escreva ("SAQUE EFETUADO COM SUCESSO. SEU SALDO ATUAL É R$:")
       Escreva (SALDO)
       Escreva ("RETIRE SEU CARTÃO, O COMPROVANTE E O DINHEIRO DE SAQUE")
 Senao
       Escreva ("SALDO INSUFICENTE. NÃO FOI POSSIVEL EFETUAR O SAQUE")
 Fimse
Fimalgoritmo