const campos = document.querySelectorAll('.requerid');
const spans = document.querySelectorAll('.span-requerid');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function setError(index) {
    campos[index].style.border = "2px solid #e63636"
    spans[index].style.display = "block";
}

function clearError(index) {
    campos[index].style.border = ""
    spans[index].style.display = "none";
}

const form = document.getElementById("registerForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    validEmail();
    validPassword();
    confirmePassword();
})

function validEmail() {
    const email = campos[0].value;
    if(!emailRegex.test(email)) {
        setError(0)
    }
    else {
        clearError(0)
    }
}

function validPassword() {
    if(campos[1].value.length < 8) {
        setError(1)
    }
    else {
        clearError(1)
    }
}

function confirmePassword() {
    if(campos[1].value != campos[2].value) {
        setError(2)
    }
    else {
        clearError(2)
    }
}