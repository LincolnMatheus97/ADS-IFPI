class Saudacao {
    texto: string;
    destinatario: string;

    constructor (texto: string, destinatario: string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string {
        return this.texto + ", " + this.destinatario;
    }
}

let cumprimento = new Saudacao("Boa Tarde", "Brenda");
console.log(cumprimento.obterSaudacao());