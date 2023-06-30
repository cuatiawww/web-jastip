const carousel = document.getElementById('carousel');
const kategori = document.getElementById('kategori');
const katalog = document.getElementById('katalog');
const detailProduct = document.getElementById('proDetails');
const serviceByJastip = document.getElementById('serviceByJastip');
const brand = document.getElementById('brandLogo');
const liveJastip = document.getElementById('liveJastip');
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
fetch('./liveJastip.html').then(function(snap){
    snap.text().then(function(result){
        liveJastip.innerHTML = result;
    })
})


// Brand
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

