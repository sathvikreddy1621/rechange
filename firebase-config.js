// Firebase config - keep your original keys
const firebaseConfig = {
apiKey: "AIzaSyCUrRU_ubnBguUGXGMFTgIAkikv_2urpbE",
authDomain: "crytoedge.firebaseapp.com",
projectId: "crytoedge",
storageBucket: "crytoedge.firebasestorage.app",
messagingSenderId: "349797044522",
appId: "1:349797044522:web:e20aa12a701c502f734e53",
measurementId: "G-NQSKXY2DJ6"
};


// Initialize Firebase (compat)
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}


// Export firebase for simple usage in other scripts (compat global still available)
window.firebase = firebase;
