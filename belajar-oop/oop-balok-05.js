class Balok {
    
    tinggi;
    panjang;
    lebar;
    constructor(cT, cP, cL) {
        this.tinggi = cT;
        this.panjang = cP;
        this.lebar = cL;
    }


    hitung () {
        var nVol = this.tinggi * this.panjang * this.lebar;
        return nVol;
    }
}

const tesBalok = new Balok (5, 2, 4);
nilaiVolume = tesBalok.hitung ();
console.log("hasil ke-5 : " + nilaiVolume);