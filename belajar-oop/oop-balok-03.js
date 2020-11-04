class Balok {
    
    // Attribute //
    tinggi;
    panjang;
    lebar;

    // Method atau Attribute //
    hitung ()
    {
        var nVol = this.tinggi * this.panjang * this.lebar;
        return nVol;
    }
}

const tesBalok = newBalok();
tesBalok.tinggi = 5;
tesBalok.panjang = 2;
tesBalok.lebar = 4;
nilaiVolume = tesBalok.hitung();
console.log("hasil ke-3 : " +nilaiVolume);

