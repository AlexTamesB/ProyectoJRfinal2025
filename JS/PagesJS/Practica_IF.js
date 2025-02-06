console.log(`Funcionando Archivo: Practica_IF`);


//Caso 1
function verificarEdad() {

    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    //IFELSE

    if (edad >= 18) {

        alert(`Eres mayor de edad en ${pais} `)
    } else {

        alert(`No eres mayor de edad en ${pais}`)
    }

}

function verificarParImpar() {

    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {

        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es par`;
    } else {
        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es Impar`;
    }

    console.log(numeroconvertido)
}


function evaluarNota() {

    let nota = document.getElementById('nota').value;

    let numeroconvertido = parseInt(nota)
    console.log(numeroconvertido)

//mayor de 90 excelente nota //mayor a 70 aprobado //menor 70 reprobado 

    if (numeroconvertido >= 90) {
        // alert("excelente nota")
        document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
    }
    else if (numeroconvertido >= 70) {
        // alert("aprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
    }
    else {
        //alert("reprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
    }
}

//parse int//parseFloat decimales//monto * 0.9


//<//!-- Cálculo de Descuento en Compras -->
//Tarea # 4 Proyecto

//la voy a cambiar por un 0.25%

function calcularDescuento() {

    let monto = document.getElementById('monto').value;

    if (monto > 0) {

        if (monto > 10) {

            let descuento = monto * 0.25;

            let total = monto - descuento;
            document.getElementById('mensajeDescuento').innerHTML = `Su descuento sera de $${descuento.toFixed(2)}. Cancela $${total.toFixed(2)}.`;
        } else {
            document.getElementById('mensajeDescuento').innerHTML = 'El monto debe ser mayor a $100 para obtener un descuento del 10%.';
        }

    }
}


//<!-- Verificación rápida de Mayor o Menor de Edad -->
//tarea #5 proyecto

function verificarMayorMenor() {
    //se solicitara la edad que sea mayor a las 18

    let edad = document.getElementById('edadSimple').value;
    if (edad === "" || isNaN(edad) || edad <= 0) {
        document.getElementById('mensajeEdadSimple').innerHTML = "Por favor, ingresa una edad válida.";
        return;
    }
    if (edad >= 18) {
       
        document.getElementById('mensajeEdadSimple').innerHTML = "Mayor de edad!";
    } else {
        
        document.getElementById('mensajeEdadSimple').innerHTML = "Menor de edad   !Detener!";
    }
}