// function randomKodeBrg() {
//     // Mencari semua elemen dengan class "kodeBrg"
//     let kodeBrg = document.getElementsByClassName("kodeBrg");

//     // ;oop setiap elemen dengan class "kodeBrg" dan memastikan semunya memiliki angka yang berbeda
//     for (let i = 0; i < kodeBrg.length; i++) {
//         // Memeriksa kode brg di local storage
//         let kodeBarang = localStorage.getItem("kodeBrg" + i);
//         // angka acak
//         if (!kodeBarang) {
//             kodeBarang = Math.floor(Math.random() * 9999) + 1;
//             localStorage.setItem("kodeBrg" + i, kodeBarang);
//         }
//         kodeBrg[i].innerHTML = kodeBarang;
//     }
// }
function generateUniqueCode() {
    // Menghasilkan angka acak antara 1000 dan 9999
    var uniqueCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return uniqueCode;
  }
  
  function kodeBrgBook() {
    var kodeBrgElements = document.getElementsByClassName("kodeBrg");
  
    for (var i = 0; i < kodeBrgElements.length; i++) {
      var index = kodeBrgElements[i].getAttribute("data-index");
      var kodeBarang = generateUniqueCode();
  
      kodeBrgElements[i].innerHTML = kodeBarang;
    }
  }
  
  // Memanggil fungsi kodeBrgBook saat halaman dimuat
  document.addEventListener("DOMContentLoaded", kodeBrgBook);
  
  