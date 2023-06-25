const carousel = document.getElementById('carousel');
const kategori = document.getElementById('kategori');
const katalog = document.getElementById('katalog');
const detailProduct = document.getElementById('proDetails');
// Carousel
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
fetch('./detailProduct').then(function(snap){
    snap.text().then(function(result){
        detailProduct.innerHTML = result;
    })
})

