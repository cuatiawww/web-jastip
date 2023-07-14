const kategori = document.getElementById('kategori');
const katalog = document.getElementById('katalog');
const detailProduct = document.getElementById('proDetails');
const serviceByJastip = document.getElementById('serviceByJastip');
const brand = document.getElementById('brandLogo');
const liveJastip = document.getElementById('liveJastip');
const ourTeam = document.getElementById('ourTeam');
const footer = document.getElementById('footer');
const katalogWomen = document.getElementById('item-container2');
const katalogMen = document.getElementById('item-container3');
// Carousel
// Mengambil file html('./carousel.html) lalu dimasukkan ke dalam index.html  yang memiliki id 'carousel'
// Ini berfungsi agar kode html tidak menumpuk di 1 file
const carousel = document.getElementById('carousel');
fetch('./carousel.html').then(function(snap){
    snap.text().then(function(result){
        carousel.innerHTML = result;
    })
})
fetch('./kategori.html').then(function(snap){
    snap.text().then(function(result){
        kategori.innerHTML = result;
    })
})
fetch('./katalog.html').then(function(snap){
    snap.text().then(function(result){
        katalog.innerHTML = result;
    })
})
fetch('./detailProduct.html').then(function(snap){
    snap.text().then(function(result){
        detailProduct.innerHTML = result;
    })
})
fetch('./serviceByJastip.html').then(function(snap){
    snap.text().then(function(result){
        serviceByJastip.innerHTML = result;
    })
})
fetch('./brand.html').then(function(snap){
    snap.text().then(function(result){
        brand.innerHTML = result;
    })
})
fetch('./liveJastip.html').then(function(snap){
    snap.text().then(function(result){
        liveJastip.innerHTML = result;
    })
})
fetch('./ourTeam.html').then(function(snap){
    snap.text().then(function(result){
        ourTeam.innerHTML = result;
    })
})
fetch('./footer.html').then(function(snap){
    snap.text().then(function(result){
        footer.innerHTML = result;
    })
})

// HEADER
// window.addEventListener("scroll", function() {
//     let header = document.querySelector(".header-component");
//     let scrollPosition = window.pageYOffset;

//     if (scrollPosition > 0) {
//       header.classList.add("floating-header");
//     } else {
//       header.classList.remove("floating-header");
//     }
//   });
  
// FITUR REALEATED PRODUCT
// fetch('../../public/kategori/katalogWomen.html')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(result) {
//         var tempDiv = document.createElement('div');
//         tempDiv.innerHTML = result;
//         // Memasukkan konten ke dalam elemen
//         let katalogWomenItems = tempDiv.querySelectorAll('#katalogWomen');
//         // katalogWomen.innerHTML = result;
//         katalogWomenItems.forEach(function(item) {
//             katalogWomen.appendChild(item.cloneNode(true));
//         });
//     })
//     .catch(function(error) {
//         console.log('Terjadi kesalahan:', error);
//     });
// fetch('../../public/kategori/katalogMen.html')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(result) {
//         var tempDiv = document.createElement('div');
//         tempDiv.innerHTML = result;
//         // Memasukkan konten ke dalam elemen
//         let katalogMenItems = tempDiv.querySelectorAll('#katalogMen');
//         // katalogMen.innerHTML = result;
//         katalogMenItems.forEach(function(item) {
//             katalogMen.appendChild(item.cloneNode(true));
//         });
//     })
//     .catch(function(error) {
//         console.log('Terjadi kesalahan:', error);
//     });

// Brand Animasi
setInterval(scrollImage, 3000);

function scrollImage() {
    const block = document.querySelector('.block');
    const firstImage = block.querySelector('div');
    const imageWidth = firstImage.offsetWidth;
    block.style.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
        block.appendChild(firstImage);
        block.style.transform = 'translateX(0)';
    }, 500);
}
//Membuat function search ketika diinput oleh user dan menampilkan produk berdasarkan nama produk dari inputan user 
function search() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
  
    // Pindah ke halaman produk.html dengan parameter pencarian
    window.location.href ="./katalogSearch.html"+"?search=" + encodeURIComponent(searchInput);
  }
  
// Fungsi untuk mendapatkan nilai parameter pencarian dari URL
function getSearchParameter() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("search");
  }
  
  // Fungsi untuk melakukan pencarian pada elemen-elemen produk
  function performSearch() {
    let searchInput = getSearchParameter();
  
    // Mendapatkan semua element card
    let items = document.getElementsByClassName("card");
  
    // Loop melalui semua elemen dan sembunyikan yang tidak sesuai
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let title = item.getElementsByTagName("h5")[0].innerText.toLowerCase();
  
      if (title.includes(searchInput)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  }
  
  // Panggil fungsi performSearch saat halaman selesai dimuat
  window.addEventListener("load", performSearch);

//   ANIMASI
  

