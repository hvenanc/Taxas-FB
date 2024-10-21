document.addEventListener("DOMContentLoaded", function () {
    const token = sessionStorage.getItem("user");
    if (!token) {
        window.location.href = "pages/login.html";
    } else {
        document.getElementById("main-content").style.display = "block";
    }
});