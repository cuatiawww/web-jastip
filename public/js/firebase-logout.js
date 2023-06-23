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


// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         // Dashboard(user);
//         window.location.href = "login.html";
//     } else {
//         Landing();
//     }
// });

// const Dashboard = (user) => {
//     const element = document.createElement("div");
//     element.classList.add("Dashboard");
//     element.innerHTML = (`
//         <div>Email: ${user.email}</div>
//         <div>UID: ${user.uid}</div>
//         <button data-button="logout">Logout</button>
//     `);

//     container.innerHTML = "";
//     container.appendChild(element);

//     const logout = element.querySelector(`[data-button="logout"]`);
//     logout.onclick = () => firebase.auth().signOut().then(() => {
//         alert("Berhasil Logout");
//     }).catch((err) => alert(err));
// }