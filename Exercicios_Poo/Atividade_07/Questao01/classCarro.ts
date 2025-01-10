class Carro extends Veiculo {
    private _modelo: number;

    constructor(placa: string, ano: number, modelo: number) {
        super(placa, ano);
        this._modelo = modelo;
    }
}