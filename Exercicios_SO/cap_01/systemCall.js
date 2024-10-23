import fs from 'fs';

function systemCall() {
    const nomeArquivo = "alegria.txt";
    const conteudo = "Só alegria hahaha";

    fs.writeFile(nomeArquivo, conteudo, (err) => {
        if (err) {
            console.error("Erro ao criar arquivo: ", err);
        } else {
            console.log(`Arquivo ${nomeArquivo} criado e editado com sucesso!`);
        }
    });
}

systemCall();