class Balok {

    // Attribute //
    tinggi;
    panjang;
    lebar;

    // Method atau Behavior ?/
    hitung () {
        var nVol = this.tinggi * this.panjang * this.lebar;
        console.log("hasil ke-2 : " + nVol);
    }
}

const tesBalok = new Balok();
tesBalok.tinggi = 5;
tesBalok.panjang = 2;
tesBalok.lebar = 4;
tesBalok.hitung();