var firebaseConfig = {
    apiKey: "AIzaSyD4WuQA56koZ-qWV56rDXDTtczaCVnGft8",
    authDomain: "asg-shop.firebaseapp.com",
    projectId: "asg-shop",
    storageBucket: "asg-shop.appspot.com",
    messagingSenderId: "374714320984",
    appId: "1:374714320984:web:d2d308f1ea2a9f46bbe22d",
    measurementId: "G-P18HXDWK2Y"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const appCheck = firebase.appCheck();
appCheck.activate('6Lf0LO8ZAAAAAJIoAsd13Ld2Dp5GyXUPmB9cZj7v');