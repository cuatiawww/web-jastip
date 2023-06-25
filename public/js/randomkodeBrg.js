function randomKodeBrg() {
    // Mencari semua elemen dengan class "kodeBrg"
    let kodeBrg = document.getElementsByClassName("kodeBrg");

    // ;oop setiap elemen dengan class "kodeBrg" dan memastikan semunya memiliki angka yang berbeda
    for (let i = 0; i < kodeBrg.length; i++) {
        // Memeriksa kode brg di local storage
        let kodeBarang = localStorage.getItem("kodeBrg" + i);
        // angka acak
        if (!kodeBarang) {
            kodeBarang = Math.floor(Math.random() * 9999) + 1;
            localStorage.setItem("kodeBrg" + i, kodeBarang);
        }
        kodeBrg[i].innerHTML = kodeBarang;
    }
}