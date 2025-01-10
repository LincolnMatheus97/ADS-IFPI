class CarroEletrico extends Carro{
    private _autonomia: number;

    constructor(placa: string, ano: number, modelo: number, autonomia: number) {
        super(placa, ano, modelo);
        this._autonomia = autonomia;
    }
}