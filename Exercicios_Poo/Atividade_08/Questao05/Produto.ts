class Produto {
    private _identificador: number;
    private _descricao: string;
    private _quantidadeEstoque: number;
    private _preco: number;

    constructor(identificador: number, descricao: string, quantidadeEstoque: number, preco: number) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
        this._preco = preco;
    }

    get identificador(): number {
        return this._identificador;
    }

    get descricao(): string {
        return this._descricao;
    }

    get quantidadeEstoque(): number {
        return this._quantidadeEstoque;
    }

    get preco(): number {
        return this._preco;
    }

    set identificador(identificador: number) {
        this._identificador = identificador;
    }

    set descricao(descricao: string) {
        this._descricao = descricao;
    }

    set quantidadeEstoque(quantidadeEstoque: number) {
        this._quantidadeEstoque = quantidadeEstoque;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    public baixarEstoque(quantidade: number): void {
        this._quantidadeEstoque -= quantidade;
    }

    public reporEstoque(quantidade: number): void {
        this._quantidadeEstoque += quantidade;
    }

}

export { Produto };