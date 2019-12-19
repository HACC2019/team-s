let emailInput = document.querySelector('#email_input');
let passwordInput = document.querySelector('#pass_input');
let loginBtn = document.querySelector('#loginBtn');


var provider = new firebase.auth.GoogleAuthProvider();
var googleBtn = document.querySelector('#googleBtn');

loginBtn.addEventListener('click', () => {
    let email = emailInput.value;
    let password = passwordInput.value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location = './pages/noculatePlatform.html'; //After successful login, user will be redirected to home.html
        }
    });
})

googleBtn.addEventListener('click', () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...


        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                window.location = './pages/noculatePlatform.html'; //After successful login, user will be redirected to home.html
            }
        });
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });


})
//creates a checker system
function createChecker(user, pass) {
    //create a funciton that checks if the user inputs correct
    return pass;
}