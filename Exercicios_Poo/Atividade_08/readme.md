Tipos Comuns de Tratamento de Erros

1.  
1.1)
O primeiro tipo comum de tratamento de erros é desconsiderar que o erro possa existir.
Como no exemplo de evitarmos ficar com saldo negativo em metodo de sacar em uma classe conta, criamos uma expressao booleana para dizer que só
haverá saque se o valor do saldo da conta for superior ou igual ao valor que queremos sacar. E isso pode fazer com fiquemos na duvida se a opreção foi feita ou não.
Exemplo com meu codigo: "
    public transferirEntreContas(numContaRemetente: string, contasDestino: string[], valorDesejado: number): string {
    	let remetenteProcurada = this.\_banco.consultarConta(numContaRemetente);
    	if (remetenteProcurada) {
    		if (remetenteProcurada.saldo >= valorDesejado \* contasDestino.length) {
    			this.\_banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
    		}	
    	}
    }
". 
Ele so fará a transferência se o valor do saldo for maior ou igual ao desejado.
1.2)
O segundo tipo comum de tratamento é exibir uma mensagem de erro.
Esse tipo gera um problema que ficamos dependentes das interfaces de texto, e caso estivessemos usando uma interface gráfica a mensagem não seria notada, pois não estariamos olhando o console.
Exemplo com um codigo meu: "
    public totalizarSaldos(cpf: string): void {
    	let clienteProcurado = this.\_banco.consultarCliente(cpf);
    	if (clienteProcurado) {
    		let saldoTotal: number = this.\_banco.totalizarSaldoCliente(clienteProcurado.cpf);
    		print (\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.);
    	} else {
    		print (\n\rO cliente de CPF: ${cpf} não foi encontrado...);
    	}
    }
".
Usando as funçôes prints que faz o mesmo trabalho que o console.log para mostrar essas mensagens.
1.3)
O terceiro tipo comum é retornar um codigo de erro.
Normalmente utilizamos valores de retorno como (1 - verdade / true), (2 - falso / false) e (-1 - erro), e isso pode gerar varios problemas como
se o metodo já retorna um número calculado é dificil reservar codigos de erro que não se confundem com o possivel valor calculado, sem contar que
não é nada intuitivo e vai precisar ser documentado para que outras pessoas entendam o que aquilo é para fazer.
Exemplo com um codigo da internet: "
    public verificarNumero(numero: number): number {
    	if (numero > 0) {
    		return 1; // Indica sucesso (número positivo)
    	} else if (numero === 0) {
    		return 2; // Indica um caso especial (número é zero)
    	} else {
    		return 3; // Indica erro (número negativo)
    	}
    }
".
Esse é um exemplo classico.

2.
Explicações na primeira questão.

3. 
Criadas as contas e feito os depositos. Tentei tranferir mais que o valor que existia em conta. Na minha classe App, expecificamente no metodo
Tranferir, usei um dos tipos comuns de tratamento que foi desconsiderar o erro. Ele so tranfere, se tiver o saldo suficiente. Entao foi mostrada uma mensagem no console, dizendo saldo insuficiente e programa retorna para o menu. Não acontece um erro brusco de interrupção do programa ou parada dele.

4.  
Bom, o lançamento desse erro não foi propragado para as outras classe pois fiz esse tratamento previo por meio desconsiderar o erro. Mas assim que lancei o erro ele me retorna no console: 
"
    C:\Users\linco\ADS-IFPI\Exercicios_Poo\dist\Atividade_08\App.js:94
    throw new Error(Saldo insuficiente para transferir...);
    ^
    Error: Saldo insuficiente para transferir...
    at App.transferirEntreContas (C:\Users\linco\ADS-IFPI\Exercicios_Poo\dist\Atividade_08\App.js:94:23)
    at main (C:\Users\linco\ADS-IFPI\Exercicios_Poo\dist\Atividade_08\Main.js:71:21)
    at Object.<anonymous> (C:\Users\linco\ADS-IFPI\Exercicios_Poo\dist\Atividade_08\Main.js:142:1)
    at Module.\_compile (node:internal/modules/cjs/loader:1376:14)
    at Module.\_extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module.\_load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
". 
É um pouco confiavel, já que não se propaga para outras classes, mas tenho que tratar do como correto esse tipo de erro.