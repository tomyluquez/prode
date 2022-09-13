let menuBurger = document.getElementById("burger")
let listado = document.getElementById("contenedor")
let letras = document.getElementById("instruc")
menuBurger.addEventListener("click", () => {
    listado.classList.toggle("listado")
    letras.classList.toggle("opacity")
})