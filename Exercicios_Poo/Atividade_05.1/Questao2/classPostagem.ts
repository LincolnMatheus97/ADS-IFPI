class Postagem {
    id: number;
    texto: string;
    curtidas: number;

    constructor(idPostagem: number, textoPostagem: string, curtidas: number) {
        this.id = idPostagem;
        this.texto = textoPostagem;
        this.curtidas = curtidas;
    }

    curtir(): void {
        this.curtidas += 1;
    }

    toString(): string {
        return `
        \n\tPostagem: 
        \r\t${this.texto}
        \n\tCurtidas: ${this.curtidas}`;
    }
}

class Microblog {
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    inserirPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    consultarPostagem(idPostagem: number): Postagem {
        let postagemProcurada!:  Postagem;

        for (let post of this.postagens) {
            if (post.id === postagemProcurada.id) {
                postagemProcurada = post;
                break;
            }
        }

        return postagemProcurada;
    }

    consultarPorIndice(idPostagem: number): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this.postagens.length; i++) {
            if(this.postagens[i].id === idPostagem) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado
    }

    excluirPostagem(idPostagem: number): void {
        let indiceProcurado: number = this.consultarPorIndice(idPostagem);

        if (indiceProcurado != 0) {
            for (let i = indiceProcurado; i < this.postagens.length - 1; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }

    postagemMaisCurtido(): Postagem {
        let maiorCurtida: number = -1;
        let postMaisCurtido!: Postagem;

        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].curtidas > maiorCurtida) {
                postMaisCurtido = this.postagens[i];
            }
        }

        return postMaisCurtido;
    }

    curtirPostagem(idPostagem: number): void {
        let postagemProcurada = this.consultarPostagem(idPostagem);
        postagemProcurada.curtir();
    }

    toString(): string {
        let texto: string = ``;
        for (let i = 0; i < this.postagens.length; i++) {
            texto += `\n\t${this.postagens[i].toString()}`;
        }

        return texto
    }
}