<!doctype html>
<html lang="en">
<head>
    <title>Inicio</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet" />
    <!-- iconos -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
    <!-- SCROOLL REVEAL JS LIBRARY CDN -->
    <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
    <!-- Estilos Personalizados -->
    <link rel="stylesheet" href="CSS/styles.css">
    <link rel="shortcut icon" href="Assets/favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- Inicio: Navbar  100% -->
    <nav class="navbar navbar-expand-sm navbar-light bg-light" id="IdNav"> </nav>
    <!-- Fin: Navbar  -->   
    
    <!-- Inicio: Container 90% -->
    <div class="container">
        <!-- Inicio: Header  -->
        <header id="Header" class="mb-5 mt-5"></header>
        <!-- Fin: Header  -->
        <!-- Inicio: Main  -->
        <main class="mt-5">
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header bg-primary text-white text-center">
                                <h4>Enviar Correo</h4>
                            </div>
                            <div class="card-body">
                                <form id="contact-form">
                                    <div class="form-group">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" placeholder="Tu Nombre" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Correo Electrónico</label>
                                        <input type="email" class="form-control" id="email" placeholder="Tu Email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="asunto">Asunto</label>
                                        <input type="text" class="form-control" id="asunto" placeholder="Asunto" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="comentario">Mensaje</label>
                                        <textarea class="form-control" id="comentario" rows="4" placeholder="Tu Mensaje" required></textarea>
                                    </div>
                                    <button type="button" class="btn btn-primary btn-block" onclick="enviarCorreo()">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>
        <!-- Fin: Main  -->
    </div>
    <!-- Fin: Container  -->
    <!-- Inicio: Footer  100% -->
    <footer id="IdFooter" class="text-center mt-5">  </footer>
    <!-- Fin: Footer  -->
    <!-- Scripts General  -->
    <script type="module" src="JS/General/Nav.js"></script>
    <script type="module" src="JS/General/Footer.js"></script>
    <script type="module" src="JS/General/Header.js"></script>
   
   <!-- Scripts de la Pagina   -->
    <script  src="JS/PagesJS/API_Contacto.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>