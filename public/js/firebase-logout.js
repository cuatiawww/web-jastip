const authButton = document.getElementById('authButton');
const buyThisButton = document.getElementById('buyThisBtn');

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        authButton.textContent = 'Logout';
        authButton.addEventListener('click', () => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              alert('Logout successful');
              window.location.href = 'index.html';
            })
            .catch((err) => alert(err));
        });
          // buyThisButton.addEventListener("click", () => {
          //   window.location.href = '../paymentForm.html';
          // });
      } else {
        // User is not logged in
        authButton.textContent = 'Sign Up / Login';
        authButton.addEventListener('click', () => {
          window.location.href = 'login.html';
        });
          // buyThisButton.addEventListener("click", () => {
          //   alert("Silakan login terlebih dahulu");
          //   window.location.href = "../login.html";
          // });
      }
    });