// // kodeBrgBook berfungsi menghasilkan 4 angka random yang akan di simpan kedalam local storage lalu ditangkap dengan tag html yang memiliki id "kodeBrg"
// function kodeBrgBook() {
//     let kodeBrgElements = document.getElementsByClassName("kodeBrg");
  
//     for (let i = 0; i < kodeBrgElements.length; i++) {
//       let element = kodeBrgElements[i];
//       let index = element.getAttribute("data-index");
//       // Membaca nilai kode barang dari localStorage berdasarkan kombinasi "data-index" dan indeks elemen
//       let kodeBarang = localStorage.getItem(index + "_" + i);
//       // angka acak
//       if (!kodeBarang) {
//         kodeBarang = Math.floor(Math.random() * 9999) + 1;
//         localStorage.setItem(index + "_" + i, kodeBarang);
//       }
  
//       element.innerHTML = kodeBarang;
//     }
// }
// document.addEventListener("DOMContentLoaded", kodeBrgBook);