import fs from 'fs';

export function lerArquivo(nomeArquivo) {
    return fs.readFileSync(nomeArquivo, `utf-8`);  
}

export function localizarPalavra(palavra, texto) {
    if (texto.filter(textos => textos === palavra)) {
        return true;
    } else {
        return false;
    }
}

export function registrarArquivo(nomeArquivo, conteudo) {
    return fs.writeFileSync(nomeArquivo, conteudo);
}

