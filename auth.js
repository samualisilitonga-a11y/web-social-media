const CORRECT_USER = "kelompok4";
const CORRECT_PASS = "pass99";

if (localStorage.getItem("isLogin") === "true" && window.location.pathname.includes("login.html")) {
    window.location.href = "index.html";
}

if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("isLogin") !== "true") {
        window.location.href = "login.html";
    }
}


const form = document.getElementById("loginForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let errorMsg = document.getElementById("errorMsg");

        if (user === CORRECT_USER && pass === CORRECT_PASS) {
            localStorage.setItem("isLogin", "true");
            window.location.href = "index.html";
        } else {
            errorMsg.innerHTML = "Username atau Password salah!";
            errorMsg.style.color = "red";
        }
    });
}
