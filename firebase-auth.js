/* ------------------- EMAIL LOGIN ------------------- */
const email = document.getElementById('email').value.trim();
const pass = document.getElementById('password').value;
if (!email || !pass) return alert('Provide email and password');


firebase.auth().signInWithEmailAndPassword(email, pass)
.then(() => window.location.href = 'dashboard.html')
.catch(e => alert(e.message));
}


/* ------------------- GOOGLE LOGIN ------------------- */
function googleLogin() {
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(() => window.location.href = 'dashboard.html')
.catch(e => alert(e.message));
}


/* ------------------- PHONE LOGIN ------------------- */
let confirmationResult;


function initRecaptcha() {
if (window.recaptchaVerifier) return; // already initialized


window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
'size': 'normal',
'callback': function(response) {
// recaptcha solved
}
});
window.recaptchaVerifier.render().catch(err => console.warn('Recaptcha render error', err));
}


// initialize recaptcha as soon as script loaded (safe) and again on focus
setTimeout(initRecaptcha, 500);
window.addEventListener('focus', initRecaptcha);


function sendOTP() {
const phone = document.getElementById('phone').value.trim();
if (!phone) return alert('Enter phone number in E.164 format (e.g. +919876543210)');


initRecaptcha();
firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier)
.then(res => {
confirmationResult = res;
alert('OTP Sent!');
})
.catch(e => alert(e.message));
}


function verifyOTP() {
const otp = document.getElementById('otp').value.trim();
if (!otp) return alert('Enter the OTP');
if (!confirmationResult) return alert('No OTP request found. Please send OTP again.');


confirmationResult.confirm(otp)
.then(() => window.location.href = 'dashboard.html')
.catch(e => alert(e.message));
}


/* ------------------- Auth state change (optional debug) ------------------- */
firebase.auth().onAuthStateChanged(user => {
// No action here for auth page; dashboard handles redirect
});
