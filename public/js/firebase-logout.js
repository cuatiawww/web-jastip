//ketika tombol logout diklik maka akan menampilkan alert 'Berhasil Logout' lalu akan pindah kehalaman login.html
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert('Berhasil Logout');
      window.location.href = 'login.html'
    })
    .catch((err) => alert(err));
});
