class SituacaoFinanceira {
    valorCredito: number = 0;
    valorDebito: number = 0;

    calcular_Saldo(): number {
        return this.valorCredito - this.valorDebito;
    }

}

let situacaofinanceira: SituacaoFinanceira;
situacaofinanceira = new SituacaoFinanceira();

situacaofinanceira.valorCredito = 1790;
situacaofinanceira.valorDebito = 755.55;

console.log(`O valor do saldo da conta é: R$ ${situacaofinanceira.calcular_Saldo()}`);