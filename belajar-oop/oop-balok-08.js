// Polymorphisme Overriding //
class Mahasiswa {
    sifat() {
        console.log("Pada dasarnay sifat mahasiswa baik");
    }
}
class coolMahasiswa extends Mahasiswa {
    sifat() {
        console.log("Sekarang sifatnya menjadi lebih baik");
    }
}
class badMahasiswa extends Mahasiswa {
    sifat() {
        console.log("Sekarang sifatnya buruk");
    }
}

const budi = new Mahasiswa();
const arif = new coolMahasiswa();
const Joko = new badMahasiswa();
budi.sifat();
arif.sifat();
Joko.sifat();