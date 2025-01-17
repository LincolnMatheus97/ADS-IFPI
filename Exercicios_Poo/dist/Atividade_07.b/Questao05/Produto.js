"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(identificador, descricao, quantidadeEstoque, preco) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
        this._preco = preco;
    }
    get identificador() {
        return this._identificador;
    }
    get descricao() {
        return this._descricao;
    }
    get quantidadeEstoque() {
        return this._quantidadeEstoque;
    }
    get preco() {
        return this._preco;
    }
    set identificador(identificador) {
        this._identificador = identificador;
    }
    set descricao(descricao) {
        this._descricao = descricao;
    }
    set quantidadeEstoque(quantidadeEstoque) {
        this._quantidadeEstoque = quantidadeEstoque;
    }
    set preco(preco) {
        this._preco = preco;
    }
    baixarEstoque(quantidade) {
        this._quantidadeEstoque -= quantidade;
    }
    reporEstoque(quantidade) {
        this._quantidadeEstoque += quantidade;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map