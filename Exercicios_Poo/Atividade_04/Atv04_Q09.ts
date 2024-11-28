class ContaModificada {
    num_Conta: string;
    saldo_Conta: number;

    constructor(num: string, saldo: number) {
        this.num_Conta = num;
        this.saldo_Conta = saldo;
    }

    sacarValor(valor: number): boolean {
        if (valor >= this.saldo_Conta) {
            this.saldo_Conta = this.saldo_Conta - valor;
            return true;
        }
        return false;
    }

    depositarValor(valor: number): boolean {
        if (valor > 0) {
            this.saldo_Conta = this.saldo_Conta + valor;
            return true;
        }
        return false;
    }

    consultarValor(): number {
        return this.saldo_Conta;
    }

    transferirValor(contaDestino: ContaModificada, valor: number): boolean {
        if (this.sacarValor(valor)) {
            contaDestino.depositarValor(valor);
            return true;
        }
        return false;
    }
}

let conta11 = new ContaModificada("1", 50);
let conta22 = new ContaModificada("2", 150);

conta11.sacarValor(50);

if (conta11.transferirValor(conta22, 10)) {
    console.log(`A transferencia falhou, Saldo Insuficiente!`);
} else {
    console.log(`A transferencia concluida!`);
}