"use strict";
class Postagem {
    constructor(idPostagem, textoPostagem, curtidas) {
        this.id = idPostagem;
        this.texto = textoPostagem;
        this.curtidas = curtidas;
    }
    curtir() {
        this.curtidas += 1;
    }
    toString() {
        return `
        \n\tPostagem: 
        \r\t${this.texto}
        \n\tCurtidas: ${this.curtidas}`;
    }
}
class Microblog {
    constructor() {
        this.postagens = [];
    }
    inserirPostagem(postagem) {
        this.postagens.push(postagem);
    }
    consultarPostagem(idPostagem) {
        let postagemProcurada;
        for (let post of this.postagens) {
            if (post.id === postagemProcurada.id) {
                postagemProcurada = post;
                break;
            }
        }
        return postagemProcurada;
    }
    consultarPorIndice(idPostagem) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id === idPostagem) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluirPostagem(idPostagem) {
        let indiceProcurado = this.consultarPorIndice(idPostagem);
        if (indiceProcurado != 0) {
            for (let i = indiceProcurado; i < this.postagens.length - 1; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }
    postagemMaisCurtido() {
        let maiorCurtida = -1;
        let postMaisCurtido;
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].curtidas > maiorCurtida) {
                postMaisCurtido = this.postagens[i];
            }
        }
        return postMaisCurtido;
    }
    curtirPostagem(idPostagem) {
        let postagemProcurada = this.consultarPostagem(idPostagem);
        postagemProcurada.curtir();
    }
    toString() {
        let texto = ``;
        for (let i = 0; i < this.postagens.length; i++) {
            texto += `\n\t${this.postagens[i].toString()}`;
        }
        return texto;
    }
}
//# sourceMappingURL=classPostagem.js.map