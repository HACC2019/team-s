

console.log('live bleed test');
let articleList = document.querySelector('#articleListing');
//create function that generates article by listing in firebase
let signOutBtn = document.querySelector('#signoutBtn');


let usernameField = document.querySelector('#emailName');
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var name, email, photoUrl, uid, emailVerified;
      
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
                         // you have one. Use User.getToken() instead.

        console.log(email);
        console.log(name);
        usernameField.innerHTML += email

      }
    } else {
      // No user is signed in.
      console.log('big oof');
    }
  });


  signOutBtn.addEventListener('click', ()=> {
    console.log('sign out');

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('sign out successful');
      window.location='../index.html';
    }).catch(function(error) {
      // An error happened.
    });

  })

