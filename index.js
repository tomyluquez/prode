let button = document.getElementById("buttonPass")
// let inputPass = document.getElementById("pass")
let form = document.getElementById("form")

form.addEventListener("submit", ingresar) // el evento submit es para que funcione con la tecla enter
button.addEventListener("click", ingresar)

function ingresar (evento) {
    evento.preventDefault() //esto es para que mantenga el valor del input
    let passTomas = "tenista1"
    let passInput = document.getElementById("pass").value

     if (passInput === passTomas) {
        document.location="main.html"
    } else alert("Contraseña incorrecta")
}

