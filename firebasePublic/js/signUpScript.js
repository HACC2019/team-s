console.log('test');
var provider = new firebase.auth.GoogleAuthProvider();
var inputForm = document.querySelector('#inputGoogle')
$('#submitEmail').click(function () {
    if ($('#first_name').val() == '' || $('#email').val() == '') {
        alert('Input can not be left blank');
    } else {
        localStorage.setItem("emailInput", $('#email').val());
        location.href = '../almostThere.html';
    }
});

$('#googleBtn').click(function () {
    console.log('mega oof');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log('oofo');
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

//create alert system 
function alertSystem(alert) {
    return alert
}
//create sign up validation
function createSignupVal(user, pass) {

    if (inputGoogle.val === "") {
        //if user input is empty
        alertSystem();
    }
    //create validation later.
    //kelii this is your job.
    return user
}

