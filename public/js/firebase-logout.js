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
