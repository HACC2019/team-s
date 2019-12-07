let signInBTN = document.querySelector("#loginBTN");
let emailInput = document.querySelector("#username");
let passInput = document.querySelector("#password");
let userState = document.querySelector("#userState");

//check for input values
function checkInputs() {
    if (emailInput.value == "" || passInput.value == "") {
        alert('please fill in both forms')
        return false;
    } else {
        return true;
    }
}
signInBTN.addEventListener("click", () => {
    if (checkInputs()) {
        console.log('yeet');
        firebase.auth().signInWithEmailAndPassword(emailInput.value, passInput.value).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            if (errorCode == "auth/invalid-email") {
                userState.innerHTML = "invalid email"
            }
            if (errorCode == "auth/wrong-password") {
                userState.innerHTML = "invalid password"
            }
            // ...
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                window.location.href = "../home.html";
            } else {
                // No user is signed in.
            }
        });
    }

});