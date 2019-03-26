  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBArg9ImtmlLgKEGFGSXuCErEqfx55_phQ",
    authDomain: "smart-aquarium-87160.firebaseapp.com",
    databaseURL: "https://smart-aquarium-87160.firebaseio.com",
    projectId: "smart-aquarium-87160",
    storageBucket: "smart-aquarium-87160.appspot.com",
    messagingSenderId: "1040235722521"
  };
  firebase.initializeApp(config);
  const myform = document.getElementById("form");


  myform.addEventListener("submit", function (event) {
    event.preventDefault();
    const email=document.getElementById("login-username").value
    const password=document.getElementById("login-password").value
    console.log({email,password})
    signup(email,password)
  });
 
// if(window.location.href=="http://localhost:5500/login.html"){
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       console.log(user)
//     } else {
//         window.location.href = "./signup.html";
//     }
//   });
// }
  