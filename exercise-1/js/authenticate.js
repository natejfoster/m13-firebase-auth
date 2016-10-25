// JavaScript authentication file
$(function() {

    // Initialize Firebase
   var config = {
     apiKey: "AIzaSyDgV87ldKLFUioC9gYyBHmjJmGanLhgi4s",
     authDomain: "authentication-48749.firebaseapp.com",
     databaseURL: "https://authentication-48749.firebaseio.com",
     storageBucket: "authentication-48749.appspot.com",
     messagingSenderId: "1087575989290"
   };
   firebase.initializeApp(config);

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var userName = $('#userName').val();
        var password = $('#password').val();

        // Create user, then set the user's display name
        var auth = firebase.auth();
        firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(function(user) {
             // Set display name
             user.updateProfile({
                 displayName: userName
             }).then(function() {
                 window.location = '/';
             });
         }).catch(function(error) {
             alert(error.message);
         });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var password = $('#password').val();
        var email = $('#email').val();

        // Authenticate using email and password, then redirect
        var auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password).then(function() {
          window.location = 'index.html';
        });
    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect
        firebase.auth().signOut().then(function() {
          window.location = 'sign-up.html';
        });
    };

    // Assign event lister to form submission
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formId = $(this).attr('id');
        if (formId == 'sign-up') {
            signUp();
        } else if (formId == 'sign-in') {
            signIn();
        }
    });


    // Assign click event to logout button
    $('#log-out').on('click', function() {
        signOut();
    })


    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
