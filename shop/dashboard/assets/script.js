var firebaseConfig = {
    apiKey: "AIzaSyD4WuQA56koZ-qWV56rDXDTtczaCVnGft8",
    authDomain: "asg-shop.firebaseapp.com",
    projectId: "asg-shop",
    storageBucket: "asg-shop.appspot.com",
    messagingSenderId: "374714320984",
    appId: "1:374714320984:web:d2d308f1ea2a9f46bbe22d",
    measurementId: "G-P18HXDWK2Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//let redirectUrl = params.signInSuccessUrl ?? getCookie("returnURLCookie");
let redirectUrl = params.signInSuccessUrl;
(function () {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                return false;
            },
            uiShown: function () {
                document.getElementById('loader').style.display = 'none';
            }
        },
        signInFlow: 'popup',
        queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
        signInSuccessUrl: redirectUrl,
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                clientId: "374714320984-7r0b3i1s39tapmudaa4poe2b3qkpksst.apps.googleusercontent.com"
            },
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image',
                    size: 'invisible',
                    badge: 'bottomleft'
                },
                defaultCountry: 'BD',
                whitelistedCountries: ['BD', '+880', 'IN', '+91']
            }
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        tosUrl: '/terms.html',
        privacyPolicyUrl: '/privacy.html'
    };
    ui.start('#firebaseui-auth-container', uiConfig);
    ui.disableAutoSignIn();
})()

function onSubmit(token) {
    document.getElementById("form").submit();
}
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (redirectUrl == "https://exam.aparsclassroom.com/?uid=") {
            window.location.href = redirectUrl+ user.uid;
        } else if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            window.location.href = "/shop/dashboard";
        }

    } else {
        nmodal()
    }
});

function nmodal() {
    $('#loginModal').modal();
}
$('#loginModal').modal({
    backdrop: 'static',
    keyboard: false
})
nmodal()