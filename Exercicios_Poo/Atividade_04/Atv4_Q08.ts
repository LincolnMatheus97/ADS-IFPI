class Equipamento {
    ligado: boolean;

    constructor(valor: boolean) {
        this.ligado = valor;
    }

    liga(): void {
        if(!this.ligado) {
            this.ligado = true;
        } else {
            console.log("O equipamento já está Ligado!");
        }

    }

    desliga(): void {
        if(this.ligado) {
            this.ligado = false;
        } else {
            console.log("O equipamento já está Desligado!");
        }
    }

    inverter(): void {
        if(this.ligado) {
            this.desliga();
        } else {
            this.liga();
        }
    }

    estaLigado(): void {
        console.log(this.ligado);
    }
}

let equip = new Equipamento(false);
equip.liga();
equip.estaLigado();
equip.inverter();
equip.estaLigado();
equip.desliga();