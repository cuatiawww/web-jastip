const carousel = document.getElementById('carousel');
const kategori = document.getElementById('kategori');
const katalog = document.getElementById('katalog');
const detailProduct = document.getElementById('proDetails');
const serviceByJastip = document.getElementById('serviceByJastip');
const brand = document.getElementById('brandLogo');
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

// Brand
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});


