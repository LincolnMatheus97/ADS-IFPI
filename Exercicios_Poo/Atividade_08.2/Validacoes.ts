class AplicacaoError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class ContaInexistente extends AplicacaoError {
  constructor() {
    super("Conta inexistente");
  }
}

class SaldoInsuficiente extends AplicacaoError {
  constructor() {
    super("Saldo insuficiente");
  }
}

class ClienteNaoEncontrado extends AplicacaoError {
  constructor() {
    super("Cliente não encontrado");
  }
}

class ValorInvalidoError extends AplicacaoError {
    constructor() {
        super("Valor inválido");
    }
}

class PoupancaInvalidaError extends AplicacaoError {
    constructor() {
        super("A conta não é uma poupança");
    }
}

class CPFInvalidoError extends AplicacaoError {
    constructor() {
        super("CPF inválido");
    }
}

class DataNascimentoInvalidaError extends AplicacaoError {
    constructor() {
        super("Data de nascimento inválida");
    }
}

class ValorVazioError extends AplicacaoError {
    constructor() {
        super("Valor não pode ser vazio");
    }
}

class NumeroInvalidoError extends AplicacaoError {
    constructor() {
        super("Número inválido");
    }
}

export {ContaInexistente, SaldoInsuficiente, ClienteNaoEncontrado, ValorInvalidoError, 
        PoupancaInvalidaError, CPFInvalidoError, DataNascimentoInvalidaError,
        ValorVazioError, NumeroInvalidoError};