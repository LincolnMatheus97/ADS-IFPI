"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroInvalidoError = exports.ValorVazioError = exports.DataNascimentoInvalidaError = exports.CPFInvalidoError = exports.PoupancaInvalidaError = exports.ValorInvalidoError = exports.ClienteNaoEncontrado = exports.SaldoInsuficiente = exports.ContaInexistente = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
class ContaInexistente extends AplicacaoError {
    constructor() {
        super("Conta inexistente");
    }
}
exports.ContaInexistente = ContaInexistente;
class SaldoInsuficiente extends AplicacaoError {
    constructor() {
        super("Saldo insuficiente");
    }
}
exports.SaldoInsuficiente = SaldoInsuficiente;
class ClienteNaoEncontrado extends AplicacaoError {
    constructor() {
        super("Cliente não encontrado");
    }
}
exports.ClienteNaoEncontrado = ClienteNaoEncontrado;
class ValorInvalidoError extends AplicacaoError {
    constructor() {
        super("Valor inválido");
    }
}
exports.ValorInvalidoError = ValorInvalidoError;
class PoupancaInvalidaError extends AplicacaoError {
    constructor() {
        super("A conta não é uma poupança");
    }
}
exports.PoupancaInvalidaError = PoupancaInvalidaError;
class CPFInvalidoError extends AplicacaoError {
    constructor() {
        super("CPF inválido");
    }
}
exports.CPFInvalidoError = CPFInvalidoError;
class DataNascimentoInvalidaError extends AplicacaoError {
    constructor() {
        super("Data de nascimento inválida");
    }
}
exports.DataNascimentoInvalidaError = DataNascimentoInvalidaError;
class ValorVazioError extends AplicacaoError {
    constructor() {
        super("Valor não pode ser vazio");
    }
}
exports.ValorVazioError = ValorVazioError;
class NumeroInvalidoError extends AplicacaoError {
    constructor() {
        super("Número inválido");
    }
}
exports.NumeroInvalidoError = NumeroInvalidoError;
//# sourceMappingURL=Validacoes.js.map