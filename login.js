function login() {
    var input = document.getElementById("email").value;
    if (input.includes("@")) {
        window.location.href = "emaillogin.html";
    } else {
        window.location.href = "phonelogin.html";
    }
}
