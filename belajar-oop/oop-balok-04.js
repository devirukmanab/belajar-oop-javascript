class Balok {
    // Attribute //
    tinggi;
    panjang;
    lebar;

    // Method atau Behavior //
    hitunng (nT, nP, nL)
    {
        var nVol = nT * nP * nL;
        console.log("hasil ke-4 : " +nVol);
    }
}

const tesBalok = new Balok();
tesBalok.tinggi = 5;
tesBalok.panjang = 2;
tesBalok.lebar = 4;
tesBalok.hitunng(tesBalok.tinggi, tesBalok.panjang, tesBalok.lebar);