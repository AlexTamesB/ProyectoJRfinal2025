console.log(`Funcionando Archivo: Practica_IF`);



//caso1
function verificarEdad() {


    let edad = document.getElementById('edad').value; //value se agrega al final
    let pais = document.getElementById('pais').value;


    console.log(edad)
    console.log(pais)


    //IFELSE

    if (edad >= 18) {
        alert(`Eres mayor de edad`)
    } else {
        alert(`No eres mayor de edad`)

    }

}

//parImpar
function verificarParImpar() {

    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {

        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es par`;

    } else {
        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es impar`;
    }
    console.log(numeroconvertido)
}