class Hora {
    private _hora: number;
    private _minuto: number;
    private _segundo: number;

    constructor(novaHora: number, novoMinuto: number, novoSegundo: number) {
        this._hora = novaHora;
        this._minuto = novoMinuto;
        this._segundo = novoSegundo;
    }

    public set hora(horinha: number) {
        this._hora = horinha;
    }

    public set minuto(minutinho: number) {
        this._minuto = minutinho;
    }

    public set segundo(segundinho: number) {
        this._segundo = segundinho;
    }

    public get horaMarcada(): string {
        return `${this._hora}:${this._minuto}:${this._segundo}`;
    }

}

let hora = new Hora(23, 15, 59);
console.log(hora.horaMarcada);