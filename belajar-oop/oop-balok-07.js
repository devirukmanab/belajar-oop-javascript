// Inheritance //
class Shape{
    // Attribute //
    tinggi;
    panjang;
    lebar;
    alas;
}

class Balok extends Shape {
    luas;
    hitungLuas()
    {
        this.luas = this.tinggi * this.panjang * this.lebar;
        return this.luas;
    }
}

const tesBalok = newBalok();
tesBalok.tinggi = 5;
tesBalok.panjang = 4;
tesBalok.lebar = 2;
nilaiLuasBalok = tesBalok.hitungLuas();
console.log("Luas Balok : " + nilaiLuasBalok);
