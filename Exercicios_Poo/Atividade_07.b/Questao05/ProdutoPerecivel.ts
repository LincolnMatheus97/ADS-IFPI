import { Produto } from "./Produto";

class ProdutoPerecivel extends Produto {
    private _dataValidade: Date;

    constructor(identificador: number, descricao: string, quantidadeEstoque: number, preco: number, dataValidade: Date) {
        super(identificador, descricao, quantidadeEstoque, preco);
        this._dataValidade = dataValidade;
    }

    get dataValidade(): Date {
        return this._dataValidade;
    }

    set dataValidade(dataValidade: Date) {
        this._dataValidade = dataValidade;
    }

    public estaVencido(): boolean {
        return this._dataValidade < new Date();
    }

    public baixarEstoque(quantidade: number): void {
        if (!this.estaVencido()) {
            super.baixarEstoque(quantidade);
        }
    }

    public reporEstoque(quantidade: number): void {
        if (!this.estaVencido()) {
            super.reporEstoque(quantidade);
        }
    }
}

export { ProdutoPerecivel };