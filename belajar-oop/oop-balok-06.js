// Constructor //
class Kubus {
    
    sisi;
    constructor(cS){
        this.sisi = cS;
    }
    setSisi(s) {
        this.sisi = s;
    }
    getSisi(s) {
        return this.sisi;
    }
    luas() {
        return this.sisi * this.sisi * this.sisi;
    }
}

const tesKubus = new Kubus (s);
console.log("Sisi : " + tesKubus.getSisi());
console.log("Luas : " + tesKubus.luas());