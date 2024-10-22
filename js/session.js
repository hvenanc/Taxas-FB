document.addEventListener("DOMContentLoaded", function () {
    const token = sessionStorage.getItem("user");
    if (!token) {
        window.location.href = "login.html";
    } else {
        document.getElementById("main-content").style.display = "block";
    }
});


const logout = document.querySelector('.logout');
logout.addEventListener("click", function() {
    const token = sessionStorage.getItem("user");
    if (token) {
        sessionStorage.removeItem("user");
        setTimeout(5)
        window.location.href = "login.html";
      }
})