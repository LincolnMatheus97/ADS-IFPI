class Hotel {
    quantReservas: number;

    constructor (num: number) {
        this.quantReservas = num;
    }

    adicionarReservas(): void {
        this.quantReservas++;
    }
}

let h1 = new Hotel(2);
console.log(h1.quantReservas);