class Conta {
    num_Conta: string;
    saldo_Conta: number;

    constructor (num: string, saldo: number) {
        this.num_Conta = num;
        this.saldo_Conta = saldo;
    }

    sacar(valor: number): void {
        this.saldo_Conta = this.saldo_Conta - valor;
    }

    depositar(valor: number): void {
        this.saldo_Conta = this.saldo_Conta + valor;
    }

    consultar(): number {
        return this.saldo_Conta;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultar());
console.log(c2.consultar());
console.log(c3.consultar());