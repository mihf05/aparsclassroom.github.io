function onSubmit(token) {
    document.getElementById("form").submit();
}

function toggleSignIn(e) {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
                document.getElementById("forgotPass").style.display = "inline-block";
            } else {
                alert('You don\'t have Access. To get access, Please Buy our subscription');
                window.location.replace("Buy-Subcription/Hasib.html");
            }
        });
    }
    document.getElementById('access').disabled = false;
    e.preventDefault();
}

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Password Reset Email Sent!\nNow Please Check Your Email Inbox 😊');
        window.location.href = "https://mail.google.com/";
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
            alert("Please Check your Email Address 🤔 \n\nIt is in wrong format 🙃");
        } else if (errorCode == 'auth/user-not-found') {
            alert('You haven\'t purchased our premium subscription yet 😶');
            window.location.replace("Buy-Subcription/Hasib.html");
        }
    });
}

function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.replace("index.html");
        } else {
            console.log("%cDon't YOU Ever Try To STEAL the SOURCE CODE 🤬", "color:red;Background-Color:white;padding:100px;font-size:50px")
        }
    });
    document.getElementById('access').addEventListener('click', toggleSignIn, false);
    document.getElementById('forgotPass').addEventListener('click', sendPasswordReset, false);

}
window.onload = function() {
    initApp();
};