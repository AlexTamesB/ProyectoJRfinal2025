
console.log(`Funcionando Archivo: Practica_Calculadora`);

function enviarDatos() {
    debugger
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    //mostrar: alert , console.log, /inner 
    //mostrar al usuario la informacion 
    console.log('Mostrar Nombre:', nombre);
    console.log('Mostrar Edad:', edad);
    alert(`nombre ${edad}`)
}

function realizarSuma() {
    console.log("Funcionando realizarSuma")

    let numero1 = document.getElementById('numero1').value;//value se agrega al final
    let numero2 = document.getElementById('numero2').value;


    //LS.LO,LA
    //creando suma
    let Suma = parseInt(numero1) + parseInt(numero2);

    document.getElementById('resultado').innerText = Suma;

    console.log(numero1)
    console.log(numero2)
    console.log(Suma)
}

