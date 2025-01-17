"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
const ProdutoPerecivel_1 = require("./ProdutoPerecivel");
class Estoque {
    constructor() {
        this._itens = [];
        this._itens = [];
    }
    get itens() {
        return this._itens;
    }
    set itens(itens) {
        this._itens = itens;
    }
    incluirProduto(produto) {
        if (!this.existe(produto.identificador, produto.descricao)) {
            this._itens.push(produto);
        }
    }
    excluirProduto(produto) {
        let indiceProcurado = -1;
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
    reporEstoque(produto, quantidade) {
        let produtoEncontrado = this.consultarProduto(produto.identificador);
        if (produtoEncontrado) {
            produtoEncontrado.reporEstoque(quantidade);
        }
    }
    baixarEstoque(produto, quantidade) {
        let produtoEncontrado = this.consultarProduto(produto.identificador);
        if (produtoEncontrado) {
            produtoEncontrado.baixarEstoque(quantidade);
        }
    }
    consultarProduto(identificador) {
        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i].identificador === identificador) {
                return this._itens[i];
            }
        }
        return null;
    }
    existe(identificador, descricao) {
        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i].identificador === identificador || this._itens[i].descricao === descricao) {
                return true;
            }
        }
        return false;
    }
    listarVencidos() {
        let produtosVencidos = [];
        for (let i = 0; i < this._itens.length; i++) {
            if (this._itens[i] instanceof ProdutoPerecivel_1.ProdutoPerecivel) {
                let produtoPerecivel = this._itens[i];
                if (produtoPerecivel.estaVencido()) {
                    produtosVencidos.push(produtoPerecivel);
                }
            }
        }
        return produtosVencidos;
    }
}
exports.Estoque = Estoque;
//# sourceMappingURL=Estoque.js.map