
import { nombrePagina } from '../Datos/ConsultaDatos.js'



//aela
document.addEventListener('DOMContentLoaded', (e) => {

    Mostrar_Footer()

});




function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('Header'); //gi ls

    Contenedor_IdFooter.innerHTML
        = `

  <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-6 col-sm-6 ">
                        <img src="https://media.istockphoto.com/id/1287966083/es/foto/estudio-de-tatuajes.jpg?s=612x612&w=0&k=20&c=T_7M_1KAG0nmns5rHMyLHlHS8pnLOpxzl6BphfWTX0Q=" class="w-100" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->

                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-6 col-sm-6">
                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h3 class="lead text-center">Página  ${nombrePagina}</h3>
                            <p class="lead mt-5">
                                ¡Bienvenidos alex tatto Studio! El estudio de tatuajes tu pasión por todo lo relacionado con el mundo arte y pop,
y esa misma pasión nos motivó a crear este espacio único.
  Tattoo Studio, no solo te ofrecemos una amplia gama de
   estilos de tatuajes,ino también una experiencia inolvidable acompañada por un equipo de profesionales 
 que te guiarán en cada paso del proceso.
¡Vení y transformá tus ideas en creaciones únicas con nosotros</p>


                            <a class="btn btn-secondary btn-lg mt-2 d-flex justify-content-center" href="Galeria" role="button">Galeria</a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;

}