console.log('test');
let signUPNOWbtn = document.querySelector("#signUPNOW");
let passwordInput = document.querySelector('#passForm');
let checkToS = document.querySelector('#checkToS');
console.log(signUPNOW);

$('#signUPNOW').click(function () {
  if (passwordInput.value === "") {
    alert('make password');
  } else {
      let email = localStorage.getItem("emailInput");
      let password = passwordInput.value;
      console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log('error');
      });
      console.log('success! redirecting to main platform');
      //window.location.href = "./pages/noculatePlatform.html";
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          window.location = './pages/noculatePlatform.html'; //After successful login, user will be redirected to home.html
        }
      });
    }
    console.log('oof');
})