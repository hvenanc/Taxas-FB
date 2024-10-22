import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { setError } from "./ui.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGc0GGEBSXDSIEPR9eVMQn1L7KQIkni4Y",
    authDomain: "taxas-32cd4.firebaseapp.com",
    databaseURL: "https://taxas-32cd4-default-rtdb.firebaseio.com",
    projectId: "taxas-32cd4",
    storageBucket: "taxas-32cd4.appspot.com",
    messagingSenderId: "1087273371079",
    appId: "1:1087273371079:web:03953096d574943d15c5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//Register User
async function setUser(user) {
    const userRef = doc(db, "users", user.uid);
    return await setDoc(userRef, {
        email: user.email
    });
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                location.reload();
            })
            .catch((error) => {
                if (emailRegex.test(email)) {
                    setError("message2", "E-mail já cadastrado!")
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                }
            });
    })
}

//Login User

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email-lg").value;
        const password = document.getElementById("password-lg").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                sessionStorage.setItem("user", user.uid)
                window.location.href = "menu.html";
            })
            .catch((error) => {
                setError("message", "E-mail ou Senha Inválidos!")
                console.log(error.message)
            });
    })
}

