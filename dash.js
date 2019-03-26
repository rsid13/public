var config = {
    apiKey: "AIzaSyBArg9ImtmlLgKEGFGSXuCErEqfx55_phQ",
    authDomain: "smart-aquarium-87160.firebaseapp.com",
    databaseURL: "https://smart-aquarium-87160.firebaseio.com",
    projectId: "smart-aquarium-87160",
    storageBucket: "smart-aquarium-87160.appspot.com",
    messagingSenderId: "1040235722521"
  };
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
    } else {
        window.location.href = "./login.html";
    }
  })
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 
const btn=document.getElementById("logbtn");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    firebase.auth().signOut().then(function() {
      window.location.href = "./login.html";
      })
})



// const lightcheckbox=document.querySelector("#light")
// lightcheckbox.on("click",(e)=>{
//     console.log(e.checked)
// })
function handleClick(cb) {
  console.log("Clicked, new value = " + cb.checked);
  fetch(`localhost:80/light?light=${cb.checked}`).then(()=>{
    console.log("light status updated")
  })
}


