class Radio {
    volume: number;

    constructor (volume: number) {
        this.volume = volume;
    }
}

let r = new Radio(10);
console.log(r.volume);