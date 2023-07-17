const container = document.querySelector(".container"); 
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "index.html";
    } else {
        Landing(); 
    }
});
const Landing = () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const registerBtn = document.querySelector(`[data-button="register"]`);
    const loginBtn = document.querySelector(`[data-button="login"]`);
    //ketika tombol regist di klik
    registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((cred) => {
        alert(`Account created successfully. User ID: ${cred.user.uid}`); //jika berhasil regist
        })
        .catch((error) => {
        alert(error.message); //jika gagal regist
        });
    });
    //ketika tombol login di click
    loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((cred) => {
        alert(`Welcome, User: ${cred.user.uid}`); //jika berhasil login
        })
        .catch((error) => {
        alert(error.message);//jika gagal login
        });
    });
}
