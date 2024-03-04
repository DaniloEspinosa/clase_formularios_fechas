/*
function cambioDeColor() {
    let color = document.getElementById("color").value
    console.log(color)  // Probamos si se ha elegido correctamente el color
    //Seleccionamos el body para poder aplicarle los cambios
    let body = document.querySelector("body")
    body.style.backgroundColor = color
}

function degradado() {
    // Primer paso seleccionar los 2 colores del degradado
    let color1 = document.getElementById("color1").value
    let color2 = document.getElementById("color2").value
    //Seleccionamos el body para poder aplicarle los cambios
    let body = document.querySelector("body")
    body.style.backgroundImage = `linear-gradient(120deg, ${color1}, white, ${color2})`

}

function degradadoConico() {
    // Primer paso seleccionar los 2 colores del degradado cónico
    let color3 = document.getElementById("color3").value
    let color4 = document.getElementById("color4").value
    let conic = document.querySelector(".conic")
    conic.style.backgroundImage = `conic-gradient(${color3}, ${color4})`
}*/

function obtenerFecha() {
    let fecha = document.getElementById("fecha").value
    console.log(fecha)

    mayorOMenor(fecha)
}


function mayorOMenor(fecha) {

    let fechaActual = "2024-03-04"
    
    let nacimiento = fecha.split("-")
    let actual = fechaActual.split("-")


    if (
        (Number(actual[0]) - Number(nacimiento[0])) >= 18 &&
        Number(actual[1]) >= Number(nacimiento[1]) &&
        Number(actual[2]) >= Number(nacimiento[2])) {
        console.log("Eres mayor de edad")
        document.querySelector(".mayor").innerText = "Eres mayor de edad"
        document.querySelector(".mayor").style.color = "green"
    } else {
        document.querySelector(".mayor").innerText = "Eres menor de edad"
        document.querySelector(".mayor").style.color = "red"
        
    }
}

/*  //Primera solucion contemplando solo el año de nacimiento
function mayorOMenor(fecha) {
    let edad = 0
    let fechaActual = "2024-03-04"
    
    let arrayFecha = fecha.split("-")
    let arrayFechaActual = fechaActual.split("-")

    edad = Number(arrayFechaActual[0]) - Number(arrayFecha[0])
    console.log(edad)



    if (edad >= 18) {
        console.log("Eres mayor de edad")
        document.querySelector(".mayor").innerText = "Eres mayor de edad"
        document.querySelector(".mayor").style.color = "green"
    } else {
        document.querySelector(".mayor").innerText = "Eres menor de edad"
        document.querySelector(".mayor").style.color = "red"
        
    }
}
*/