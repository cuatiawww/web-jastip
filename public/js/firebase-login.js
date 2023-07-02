//Membuat authentication email & password dengan menggunakan firebase
const container = document.querySelector(".container"); //menangkap landing page
//pengkondisian jika user berhail login maka akan masuk ke index.html
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Dashboard(user);
        window.location.href = "index.html ";
    } else {
        Landing(); //jika gagal maka akan tetap berada di halaman login
    }
});
//menangkap form login dan mengirimkan nilai ke database firebase
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
