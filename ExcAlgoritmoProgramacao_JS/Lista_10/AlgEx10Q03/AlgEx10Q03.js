import { print } from "../../utils/io_utils.js";
import { lerArquivo, registrarArquivo } from "../funcoes.js";
import { formatarCPF, formatarData, formatarSalario } from "./funcoes2.js";

function main() {
    let texto = lerArquivo(`cadastros.txt`);
    let frases = texto.split(`\n`).map(frase => frase.replace(`\r`, ``).trim());
    let cadastro = ``;
    frases.forEach(linha =>{
        let cpf = formatarCPF(linha.slice(0, 11).trim());
        let nome = linha.slice(11, 61).trim();
        let dataNascimento = formatarData(linha.slice(61, 69).trim());
        let pagamento = formatarSalario(linha.slice(69).trim());

        cadastro += `\nCPF: ${cpf}`;
        cadastro += `\nNome: ${nome}`;
        cadastro += `\nData de Nascimento: ${dataNascimento}`;
        cadastro += `\nSalário: R$${pagamento}`;
        cadastro += `\n`
        
    });
    let registro = `registros.txt`;
    registrarArquivo(registro, cadastro);
    print(`Cadrastros Registrados no arquivo registros.txt`);
}

main();