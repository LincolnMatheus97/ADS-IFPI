Tipos Comuns de Tratamento de Erros
1.3: Desconsiderar que o erro possa existir
O primeiro tipo comum de tratamento de erros é desconsiderar que o erro possa existir.
Por exemplo, ao evitar saldo negativo em um método de saque em uma classe Conta, podemos criar uma expressão booleana para permitir o saque apenas se o saldo for maior ou igual ao valor desejado. Contudo, isso pode gerar dúvidas sobre se a operação foi realizada ou não.

Exemplo com meu código:

typescript
Copiar
Editar
public transferirEntreContas(numContaRemetente: string, contasDestino: string[], valorDesejado: number): string {
    let remetenteProcurada = this._banco.consultarConta(numContaRemetente);
    if (remetenteProcurada) {
        if (remetenteProcurada.saldo >= valorDesejado * contasDestino.length) {
            this._banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
        }
    } 
}
Nesse caso, a transferência só será realizada se o saldo for suficiente.

1.2: Exibir uma mensagem de erro
Outro tipo comum de tratamento é exibir uma mensagem de erro.
Esse método é problemático porque depende de interfaces de texto e, em interfaces gráficas, a mensagem pode passar despercebida.

Exemplo com um código meu:

typescript
Copiar
Editar
public totalizarSaldos(cpf: string): void {
    let clienteProcurado = this._banco.consultarCliente(cpf);
    if (clienteProcurado) {
        let saldoTotal: number = this._banco.totalizarSaldoCliente(clienteProcurado.cpf);
        print(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
    } else {
        print(`\n\rO cliente de CPF: ${cpf} não foi encontrado...`);
    }
}
As mensagens são exibidas no console com a função print, semelhante ao console.log.

1.3: Retornar um código de erro
O terceiro tipo comum é retornar um código de erro.
Neste método, valores como 1 (sucesso), 2 (falso) e -1 (erro) são utilizados. No entanto, isso pode causar confusão, especialmente se o método já retorna números calculados, e exige documentação para explicar o significado dos códigos.

Exemplo com um código da internet:

typescript
Copiar
Editar
public verificarNumero(numero: number): number {
    if (numero > 0) {
        return 1; // Indica sucesso (número positivo)
    } else if (numero === 0) {
        return 2; // Indica um caso especial (número é zero)
    } else {
        return 3; // Indica erro (número negativo)
    }
}
Esse é um exemplo clássico de retorno de códigos de erro.

2. Explicação na primeira questão.

3.
Criação de contas e depósitos:
Ao tentar transferir mais do que o saldo disponível, o método transferir evita o erro. O programa exibe uma mensagem de saldo insuficiente no console e retorna ao menu, sem interrupção brusca.

4.
Erro não propagado:
O erro foi tratado previamente ao desconsiderar o erro. Contudo, ao lançar o erro diretamente, o console exibe a seguinte mensagem:

plaintext
Copiar
Editar
Error: Saldo insuficiente para transferir...
    at App.transferirEntreContas (...)
    at main (...)
Esse tipo de tratamento evita a propagação para outras classes, mas exige cuidado para garantir uma implementação confiável.

