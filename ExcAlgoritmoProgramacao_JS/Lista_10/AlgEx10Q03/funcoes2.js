export function formatarCPF(cpf) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
}

export function formatarData(data) {
    return `${data.slice(0, 2)}/${data.slice(2, 4)}/${data.slice(4)}`
}

export function formatarSalario(salario) {
    return `${parseFloat(salario).toFixed(2)}`;
}