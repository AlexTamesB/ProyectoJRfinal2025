console.log(`Funcionando Archivo: Practica_IF`);



//caso1
function verificarEdad(){


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
