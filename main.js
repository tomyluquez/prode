// elementos guarados en variables //
let menuBurger = document.getElementById("burger")
let listado = document.getElementById("contenedor")
let letrasFondo = document.getElementById("instruc")
let iconoQatar = document.getElementById("logo")
let BotonSimulador = document.getElementById("simuButt")
let listadoSmulador = document.getElementById("simuList")

// funciones click //
menuBurger.addEventListener("click", () => {
    listado.classList.toggle("listado")
    letrasFondo.classList.toggle("opacity")
})

iconoQatar.addEventListener("click", ()=> {
    document.location="index.html"  
})

BotonSimulador.addEventListener("click", ()=> {
    document.location="simulador.html"
})

listadoSmulador.addEventListener("click", ()=> {
    document.location="simulador.html"
})

