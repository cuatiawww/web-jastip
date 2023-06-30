const footer = document.getElementById('footer-kategori');
fetch('./footerKategori.html').then(function(snap){
    snap.text().then(function(result){
        footer.innerHTML = result;
    })
})