var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid = user.uid;
  }else {
      window.location.replace("/HSC-Full-Course/must-login.html");
  }
});
})()