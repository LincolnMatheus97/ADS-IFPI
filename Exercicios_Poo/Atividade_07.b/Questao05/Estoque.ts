import { Produto } from "./Produto";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

class Estoque {
    private _itens: (Produto | ProdutoPerecivel)[] = [];

    constructor() {
        this._itens = [];
    }

    get itens(): Produto[] {
        return this._itens;
    }

    set itens(itens: Produto[]) {
        this._itens = itens;
    }

    public incluirProduto(produto: Produto | ProdutoPerecivel): void {
        if (!this.existe(produto.identificador, produto.descricao)) {
            this._itens.push(produto);
        } 
    }

    public excluirProduto(produto: Produto | ProdutoPerecivel): void {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i] === produto) {
                indiceProcurado = i;
                break;
            }
        }

        if (indiceProcurado >= 0) {
            this._itens.splice(indiceProcurado, 1);
        }
    }

    public reporEstoque(produto: Produto | ProdutoPerecivel, quantidade: number): void {
        let produtoEncontrado: Produto | ProdutoPerecivel | null = this.consultarProduto(produto.identificador);
        if (produtoEncontrado) {
            produtoEncontrado.reporEstoque(quantidade);
        }
    }

    public baixarEstoque(produto: Produto | ProdutoPerecivel, quantidade: number): void {
        let produtoEncontrado: Produto | ProdutoPerecivel | null = this.consultarProduto(produto.identificador);

        if (produtoEncontrado) {
            produtoEncontrado.baixarEstoque(quantidade);
        }
    }

    public consultarProduto(identificador: number): Produto | ProdutoPerecivel | null {
        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i].identificador === identificador) {
                return this._itens[i];
            }
        }

        return null;
    }

    public existe(identificador: number, descricao: string): boolean {
        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i].identificador === identificador || this._itens[i].descricao === descricao) {
                return true;
            }
        }
        return false;
    }

    public listarVencidos(): ProdutoPerecivel[] {
        let produtosVencidos: ProdutoPerecivel[] = [];

        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i] instanceof ProdutoPerecivel) {
                let produtoPerecivel = this._itens[i] as ProdutoPerecivel;
                if (produtoPerecivel.estaVencido()) {
                    produtosVencidos.push(produtoPerecivel);
                }
            }
        }

        return produtosVencidos;
    }
}

export { Estoque };