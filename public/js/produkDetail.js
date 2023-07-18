window.addEventListener('DOMContentLoaded', function () {
    function getProductIndex() {
      let urlParams = new URLSearchParams(window.location.search);
      return parseInt(urlParams.get('index'));
    }
  
    let index = getProductIndex();
    let produkDetail = produk[index];
  
    let mainImg = document.getElementById('MainImg');
    let smallImgs = document.querySelectorAll('.small-img');
    let productName = document.getElementById('productName');
    let productPrice = document.getElementById('productPrice');
    let sizeSelect = document.getElementById('sizeSelect');
    let details = document.getElementById('details');
  
    mainImg.src = produkDetail.gambar;
    mainImg.alt = produkDetail.judul;
    smallImgs[0].src = produkDetail.gambar;
    smallImgs[0].alt = produkDetail.judul;
    productName.textContent = produkDetail.judul;
    productPrice.textContent = 'Rp. ' + produkDetail.harga;
    details.textContent = produkDetail.deskripsi;
  });
  