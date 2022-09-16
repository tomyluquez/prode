let button = document.getElementById("buttonPass")
let inputPass = document.getElementById("pass")

button.addEventListener("click", ()=> {
    let passTomas = "tenista1"
    let passInput = document.getElementById("pass").value

    if (passInput === passTomas) {
        document.location="main.html"
    } else {
        alert("Contraseña incorrecta")
    }
})