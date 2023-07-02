const footer = document.getElementById('footer-kategori');
fetch('./footerKategori.html').then(function(snap){
    snap.text().then(function(result){
        footer.innerHTML = result;
    })
})
// HEADER
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header-component");
    var scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
      header.classList.add("floating-header");
    } else {
      header.classList.remove("floating-header");
    }
  });