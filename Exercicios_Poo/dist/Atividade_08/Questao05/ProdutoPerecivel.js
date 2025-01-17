"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPerecivel = void 0;
const Produto_1 = require("./Produto");
class ProdutoPerecivel extends Produto_1.Produto {
    constructor(identificador, descricao, quantidadeEstoque, preco, dataValidade) {
        super(identificador, descricao, quantidadeEstoque, preco);
        this._dataValidade = dataValidade;
    }
    get dataValidade() {
        return this._dataValidade;
    }
    set dataValidade(dataValidade) {
        this._dataValidade = dataValidade;
    }
    estaVencido() {
        return this._dataValidade < new Date();
    }
    baixarEstoque(quantidade) {
        if (!this.estaVencido()) {
            super.baixarEstoque(quantidade);
        }
    }
    reporEstoque(quantidade) {
        if (!this.estaVencido()) {
            super.reporEstoque(quantidade);
        }
    }
}
exports.ProdutoPerecivel = ProdutoPerecivel;
//# sourceMappingURL=ProdutoPerecivel.js.map