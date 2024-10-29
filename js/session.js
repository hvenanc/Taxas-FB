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


function updateInfoUser() {
    let info = sessionStorage.getItem("userInfos");
    let infoJson = JSON.parse(info)
    console.log(infoJson);

    document.getElementById("userName").textContent = infoJson.displayName;
    document.getElementById("userEmail").textContent = infoJson.email;
    document.getElementById("userPhoto").src = infoJson.photoURL;
}

updateInfoUser()