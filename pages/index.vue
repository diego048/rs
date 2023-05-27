<template>
    <div>
        <br />
        <div style="position: relative">
            <swiper :modules="[SwiperAutoplay]" :loop="true" :autoplay="{delay: 2500}" style="z-index: -1; height: 100%; width: 100%; min-height: 287px; color: black; position:relative" v-scrolls>
                <swiper-slide v-for="card in cards1" :key="card" style="height: 450px; position: relative">
                        <div  style="position: absolute ;top: 0; width: 100%; height: 100%;background-color:rgba(24, 91, 122, 0.28); z-index: 100"></div>
                        <img :src="card.src" :alt="card.alt" style="width:100%; height: 100%; object-fit: cover; filter: brightness(50%); z-index: -1" alt="..." />
                    </swiper-slide>
             </swiper>
             <div class="container" style="position: relative; position: absolute; left: 0; top:30%">
                    <div class="row">
                        <div class="col">
                            <div class="d-none d-sm-block text-start text-justify" style="width: 50%; left: 0; top:30%; margin-left: 70px; z-index: 1000; color: white">
                                <h1>SOMOS TU SOPORTE EN LA GESTIÓN DE SERVICIOS PARA LA SALUD…..</h1>
                                <p>
                                    Nos dedicamos a la comercialización y distribución de 
                                    material médico, Apreta abajo para ver nuestros productos
                                </p>
                                <button type="button" class="btn btn-primary boton">
                                    NUESTROS PRODUCTOS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-block d-sm-none text-start" style="width: 100%; left: 0; top: 50px; z-index: 1000; position: absolute; color: white">
                    <div class="container">
                    <h1 style="font-size: 7.7vw" align="center">SOMOS TU SOPORTE EN LA GESTIÓN DE SERVICIOS PARA LA SALUD…..</h1>
                    <p>
                        Nos dedicamos a la comercialización y distribución de 
                        material médico.
                    </p>
                    <br />
                    <button type="button" class="btn btn-primary boton">
                        NUESTROS PRODUCTOS
                    </button>
                </div>
                </div>
            </div>
        <br />
        <div style="position: relative">
            <div id="circle"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 order-2 order-md-1" v-scrolls>
                        <div class="row">
                            <div class="col">
                                <div class="image-container" style="height: 150px">
                                    <img src="https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen4.png" style="width: 100%" alt="imagen de corazon, doctor">
                                </div>
                            </div>
                            <div class="col">
                                <div class="image-container" style="height: 150px">
                                    <img src="https://ik.imagekit.io/ui7iolk9r/tr:w-800/imagen5.png" style="width: 100%" alt="imagen de doctora">
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col">
                                <div class="image-container" style="height: 200px">
                                    <img src="https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen6.png" style="width: 100%" alt="mascarilla">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 align-center order-1 order-md-2" v-scrolls>
                        <p style="color: #0167FF; margin-bottom: 0">NOSOTROS</p>
                        <h2 style="color: #1A2A33">
                            ESTAMOS LISTOS Y PREPARADOS PARA CUBRIR SUS NECESIDADES
                        </h2>
                        <p>
                            Desde el año 2018 hemos logrado consolidar una cartera considerable 
                            de clientes horientandonos siempre a su mejora continua de sus practicas clinicas, entre ellos Essalud, Minsa y Clínicas privadas como la Clínica 
                            Internacional, Good Hope, San Felipe, entre otras, quienes nos siguen 
                            premiando nuestros esfuerzos a través de la atención de sus necesidades y 
                            requerimientos, garantizándoles resultados óptimos y a los mejores precios
                            del mercado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div style="background: rgba(239, 239, 239); position:relative;" v-scrolls>
            <div id="circle1"></div>
            <div id="circle2"></div>
            <br />
            <div class="container">
                <h2 align="center" style="color: #1A2A33; z-index: 9999">
                    PRODUCTOS
                </h2>
                <p align="center">
                    Estos son algunos productos que nuestra empresa esta dispuesta a brindarle con la 
                    mejor calidad de servicio.
                </p>
                <br />
                <div class="d-flex row">
                    <div 
                        class="col-12 col-sm-6 col-md-4 flex d-flex align-self-stretch cuadro"
                        v-for="card in cards"
                        :key="card.id"
                        align="center"
                        style="z-index: 200; padding-bottom: 20px"
                    >
                        <div class="card1" style="position: relative;width: 100%; background-color: #f7f7f7; cursor: pointer; pointer-events:auto"  @click="showDialog(card)">
                                <div class="overlay"></div>
                                <div style="height: 200px; width: 100%; overflow: hidden; background: white">
                                    <img :src="card.src" style="height: 100%; width: 100%; object-fit: contain;" :alt="card.alt">
                                </div>
                                <div class="card-header1 text-justify">
                                    <h5>{{ card.title }}</h5>
                                </div>
                                <div class="card-content1 text justify" style="color: #8C8C8C">
                                    {{card.info}}
                                </div>
                        </div>
                    </div>
                </div>
                <br />
                <div align="center">
                    <NuxtLink to="/productos" class="link" style="z-index: 9999">
                    <button type="button" class="btn btn-primary boton" style="height:50px">
                        NUESTROS PRODUCTOS
                    </button>
                    </NuxtLink>
                </div>
                <br />
            </div>
        </div>
        <div style="position: relative">
            <div id="circle3" style="background: rgba(173, 216, 230, 0.5); left: 20px" v-scrolls></div>
            <div id="circle3" style="background: rgba(10, 76, 176, 0.5); left: 30px; top: 20px" v-scrolls></div>
            <div class="container">
                <br />
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6" v-scrolls>
                        <h1 align="center" style="color: #1A2A33">
                            EVENTOS
                        </h1>
                        <p align="justify">
                            El mundo siempre esta en pleno cambio, por eso nosotros nos enfocamos en brindar 
                            un servicio unico para que nuestros clientes nunca pierdan la confianza en nosotros
                        </p>
                        <br />
                        <div align="center">
                            <NuxtLink to="/eventos" class="link">
                            <button type="button" class="btn btn-primary boton" style="height: 40px">
                                MÁS INFORMACIÓN
                            </button>
                        </NuxtLink>
                        </div>
                        <div id="circle4" style="right: 20px; bottom: 40px"></div>
                        <div id="circle4" style="right: 50px; bottom: 40px"></div>
                        <div id="circle4" style="right: 35px; bottom: 15px"></div>
                        <br />
                    </div>
                    <div class="col-12 col-sm-6 col-md-6" v-scrolls>
                            <div class="image-container" style="height: 300px">
                                <img src="https://ik.imagekit.io/ui7iolk9r/tr:w-800/imagen13.jpg" style="height: 300px; width: 100%" alt="Capacitación a las licenciadas de la Unidad de Cuidados Intensivos Pediátricos del Hospital “Edgardo Rebagliati Martins”.">
                            </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
        <div id="formulario" style="background: linear-gradient(0.32turn, #101D64, rgba(10,146,176,0.81));" v-scrolls>
            <br />
            <h1 style="color: white" align="center">CONTACTANOS</h1>
            <div class="container" style="color: white">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6">
                        <br />
                        <h3>
                            RUC: 20602907067
                            <br />
                            <br />
                            Calle Cantuarias N° 160 Of. 505 - Miraflores -Lima.
                            <br />
                            <br />
                            (01) 5918989
                            <br />
                            <br />
                            comercial.rspharma@gmail.com
                            <br />
                            <br />
                            ventas@rspharmaperu.com
                        </h3>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 register">
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder="E-mail" />
                        <textarea type="text" rows="6" placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="card in cards" :key="card.id">
            <LazyDibox v-show="card.show" @close="hideDialog(card)">
                <div class="d-flex justify-content-between">
                    <div>
                        <h3>{{ card.title }}</h3>
                    </div>
                    <div class="">
                        <button
                        type="button"
                        class="btn btn-danger"
                        @click="hideDialog(card)"
                        >
                        <h1>X</h1>
                        </button>
                    </div>
                  </div>
                  <hr class="solid" />
                <div align="justify" class="text-pre-wrap" style="overflow-y: scroll; height: 60vh; width: 100%; overflow-x: hidden;">
                    <div v-show="card.show1">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6">
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img  src="https://ik.imagekit.io/ui7iolk9r/tr:w-800/imagen62.png" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img :src="card.src" class="d-block w-100" :alt="card.alt">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <h2>Descripción</h2>
                                <br />
                                <p>
                                    Cinta quirúrgica de polietileno de baja densidad, transparente,
                                    macroperforada, libre de látex e hipoalergénica que puede
                                    cortarse fácilmente en dirección longitudinal y transversal
                                    sin necesidad de usar tijeras. Posee una alta adhesión inicial
                                    en piel seca y moderada en piel húmeda. Es versátil y segura
                                    para aplicaciones de corta duración que requieren rapidez
                                    y facilidad de manejo, incluso con guantes.
                                </p>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <h2>Ventajas</h2>
                                <ul class="list-group">
                                    <li class="list-group-item border-0" v-for="item in items13" :key="item.title">
                                        <div>
                                            <span class="dot"></span>
                                            {{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                                <h2>beneficios</h2>
                                <ul class="list-group">
                                    <li class="list-group-item border-0" v-for="item in items14" :key="item.title">
                                        <div>
                                            <span class="dot"></span>
                                            {{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-none d-sm-flex">
                            <table class="table" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>
                                            Presentación
                                        </th>
                                        <th>
                                            Tamaño
                                        </th>
                                        <th>
                                            Rollos/Caja
                                        </th>
                                        <th>
                                            Cajas/Cartón.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>    
                                        <td>1527-1</td>
                                        <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                        <td>12 rollos/caja.</td>
                                        <td>10 cajas/cartón.</td>
                                    </tr>
                                    <tr>    
                                        <td>1527-2</td>
                                        <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                        <td>6 rollos/caja.</td>
                                        <td>10 cajas/cartón.</td>
                                    </tr>
                                    <tr>    
                                        <td>1527-3</td>
                                        <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                        <td>4 rollos/caja.</td>
                                        <td>10 cajas/cartón.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex d-sm-none">
                            <table class="table" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>
                                            Presentación
                                        </th>
                                        <th>
                                            Tamaño
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>    
                                        <td>1527-1</td>
                                        <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                    </tr>
                                    <tr>    
                                        <td>1527-2</td>
                                        <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                    </tr>
                                    <tr>    
                                        <td>1527-3</td>
                                        <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex d-sm-none">
                            <table class="table" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>
                                            Rollos/Caja
                                        </th>
                                        <th>
                                            Cajas/Cartón.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>    
                                        <td>12 rollos/caja.</td>
                                        <td>10 cajas/cartón.</td>
                                    </tr>
                                    <tr>    
                                        <td>6 rollos/caja.</td>
                                        <td>10 cajas/cartón.</td>
                                    </tr>
                                    <tr>    
                                        <td>4 rollos/caja.</td>
                                        <td>10 cajas/cartón.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div v-show="card.show2">
                        <h2>Descripción</h2>
                        <p>
                            Cinta quirúrgica de rayón no tejida, microporosa, libre de látex
                            e hipoalergénica que es suave con la piel del paciente, aunque,
                            se adhiere bien especialmente, en piel húmeda y en aplicaciones
                            prolongadas. Es económica y la marca de mayor confianza para
                            los profesionales de la salud por más de 50 años.
                            <br />
                            <br />
                            Disponible en color blanco, con y sin dispensador, y en tonalidad 
                            piel.
                        </p>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6" >
                                <h2>Ventajas</h2>
                                <ul class="list-group">
                                    <li class="list-group-item  border-0" v-for="item in items10" :key="item.title">
                                        <div>
                                            <span class="dot"></span>
                                            {{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <h2>Beneficios</h2>
                                <ul class="list-group">
                                    <li class="list-group-item  border-0" v-for="item in items17" :key="item.title">
                                        <div>
                                            <span class="dot"></span>{{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="divider1"></div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item border-0" v-for="item in items11" :key="item.title">
                                        <div>
                                            <span class="dot"></span>{{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item border-0" v-for="item in items12" :key="item.title">
                                        <div>
                                            <span class="dot"></span>{{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="divider1"></div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item border-0">
                                        <div>
                                            <span class="dot"></span>
                                            Permite corte recto y estético sin necesidad de usar tijeras.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item border-0">
                                        <div>
                                            <span class="dot"></span>Fácil de usar
                                        </div>
                                    </li>
                                    <li class="list-group-item border-0">
                                        <div>
                                            <span class="dot"></span>Conveniencia.
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div  class="d-none d-sm-flex">
                            <div style="width: 100%">
                                <table class="table" div style="width: 100%">
                                    <thead>
                                        <tr>
                                            <th>
                                                Presentación
                                            </th>
                                            <th>
                                                Tamaño
                                            </th>
                                            <th>
                                                Rollos/Caja
                                            </th>
                                            <th>
                                                Cajas/Cartón.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>    
                                            <td>1530-1</td>
                                            <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                            <td>12 rollos/caja.</td>
                                            <td>10 cajas/cartón.</td>
                                        </tr>
                                        <tr>    
                                            <td>1530-2</td>
                                            <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                            <td>6 rollos/caja.</td>
                                            <td>10 cajas/cartón.</td>
                                        </tr>
                                        <tr>    
                                            <td>1530-3</td>
                                            <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                            <td>4 rollos/caja.</td>
                                            <td>10 cajas/cartón.</td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div> 
                        </div>                              
                        <div class="d-flex d-sm-none">
                            <div div style="width: 100%">
                                <table  class="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                Presentación
                                            </th>
                                            <th>
                                                Tamaño
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>    
                                            <td>1530-1</td>
                                            <td>1 in x 10 yd /2,5 cm x 9,14 m</td>
                                        </tr>
                                        <tr>    
                                            <td>1530-2</td>
                                            <td>2 in x 10 yd / 5,0 cm x 9.14 m</td>
                                        </tr>
                                        <tr>    
                                            <td>1530-3</td>
                                            <td>3 in x 10 yd/ 7,5 cm x 9,14 m</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table  class="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                Rollos/Caja
                                            </th>
                                            <th>
                                                Cajas/Cartón.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>    
                                            <td>12 rollos/caja.</td>
                                            <td>10 cajas/cartón.</td>
                                        </tr>
                                        <tr>    
                                            <td>6 rollos/caja.</td>
                                            <td>10 cajas/cartón.</td>
                                        </tr>
                                        <tr>    
                                            <td>4 rollos/caja.</td>
                                            <td>10 cajas/cartón.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div v-show="card.show3">
                        <div class="row">
                            <div class="col">
                                <h3>
                                    Cavilon Película Protectora Sin Ardor es una versátil 
                                    solución para ayudar a prevenir el daño de la piel antes 
                                    que suceda y para proteger la piel ya dañada de sufrir mayores 
                                    lesiones.
                                </h3>
                                <br />
                                <p>
                                    El trauma adhesivo, los fluidos corporales y la fricción pueden 
                                    deteriorar la piel rápidamente. Cavilon Película Protectora Sin 
                                    Ardor es la película protectora libre de alcohol original y la única 
                                    a base de terpolímero que otorga protección contra el daño de la piel. 
                                    Su formulación única contiene polímeros que forman una capa protectora
                                    que no produce ardor al aplicar y que resiste el agua. Es respirable y 
                                    transparente, permitiendo la visualización y monitoreo continuo de la 
                                    piel. Gracias a que contiene un plastificante, es flexible y se adapta a 
                                    la piel durante movimientos o cambios de posición.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item border-0" v-for="item in items9" :key="item.title">
                                        <div>
                                            <span class="dot"></span>{{ item.title }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="d-flex justify-center align-self-center col-12 col-sm-6 col-md-6">
                                <div align="center" style="width: 100%">
                                    <img :src="card.src" style="width: 40vh; min-width: 300px">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>
                                    Cavilon Película Protectora Sin Ardor está excepcionalmente formulada
                                    para proteger la piel de las heces, orina y adhesivos. Su formulación no
                                    citotóxica y libre de alcohol, otorga comodidad al paciente, incluso cuando
                                    la piel está dañada.
                                </p>
                                <br />
                                <p>
                                    Cavilon Película Protectora Sin Ardor está especialmente indicada para proteger 
                                    la piel intacta (DAI categoría 1) o dañada (DAI categoría 2) y cumple todas
                                    características de un producto ideal para la DAI.
                                </p>
                            </div>
                        </div>
                        <img src="https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen61.png" style="width: 100%" alt="Cuadros">
                    </div>
                </div>
            </LazyDibox>
        </div>
    </div>
</template>
<script>
export default {
    unmounted(){
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
    },
     methods: {
        showDialog(card) {
            this.scrollPosition = window.pageYOffset;
            (card.show) = true;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${this.scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflowY = 'hidden';
        },
        hideDialog(card) {
            document.body.style.position = 'static';
            window.scroll({top:this.scrollPosition, behavior: "instant"});
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            (card.show) = false;
        }
    },
    data() {
      return {
        activador: false,
        nombre: "",
        cards1: [
            { src: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen18.jpg", alt: "Capacitación dirigida a las Licenciadas de la Unidad de Cuidados Intensivos Pediátricos"}, 
            { src: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen22.jpg", alt: "Capacitación a las Licenciadas del Hospital “Guillermo Almenara Irigoyen"}, 
            { src: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen23.jpg", alt: "Capacitación en el Hotel Crowne sobre Eficiencia"}
        ],
        cards: [
            {
                id: 1, 
                title: "Cinta Quirúrgica de Plástico Macroperforado", 
                info: "Cinta quirúrgica de polietileno de baja densidad, transparente, macroperforada, libre de latex.....", 
                show1: true,
                show: false, 
                src: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen7.png",
                alt: "Cinta Quirúrgica de Plástico Macroperforado",
            },
            {
                id: 2, 
                title: "Cinta Quirúrgica de Papel Microporosa", 
                info: "Cinta quirúrgica de rayón no tejida, microporosa, libre de latex e hipoalergénica......", 
                show2: true,
                show: false, 
                src: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen41.png",
                alt: "Cinta Quirúrgica de Papel Microporosa",
            },
            {
                id: 3, 
                title: "CavilonTM Película Protectora Sin Ardor", 
                info: "Es una versátil solución para ayudar a prevenir el daño de la piel antes que suceda.", 
                show3: true,
                show: false, 
                src: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen9.png",
                alt: "CavilonTM Película Protectora Sin Ardor",
            },
        ],
        items9: [
        {title: "Solución versátil para muchos problemas de la piel"},
        {title: "Compatible con gluconato de clorhexidina (CHG) y povidona yodada"},
        {title: "Seca rápidamente y no deja sensación pegajosa"},
        {title: "Hipoalergénica"},
        {title: "Cuenta con presentaciones estériles como hisopos y toallitas"},
        {title: "No produce ardor y no es citotóxica? — se puede usar sobre la piel intacta o dañada"},
        {title: "Costo-efectiva"},
        ],
        items13: [
            {title: "Permite el normal funcionamiento e intercambio gaseoso de la piel."},
            {title: "Evita la maceración y el compromiso de la integridad de la piel al ser porosa."},
            {title: "Permite un fácil corte bi-direccional: tanto en forma longitudinal como transversal sin necesidad de usar tijeras u otros dispositivos corto punzantes"},
            {title: "Puede cortarse en tiras más angostas según la necesidad clínica y el tipo de paciente"},
            {title: "Buena resistencia a la penetración del agua o la humedad de la piel (sudor)"},
            {title: "Transparencia que permite observar la piel. Menos notorio que respaldo de papel."},
            {title: "Permite visualizar el sitio de aplicación. Facilita la detección de problemas en forma precoz (ej. Hebitis, irritación)"},
        ],
        items14: [
            {title: "Seguridad"},
            {title: "Versatilidad"},
            {title: "Comodidad"},
            {title: "Fácil de usar"},
            {title: "Estético"},
            {title: "Complacencia"},
        ],
        items10: [
            {title: "Permite el normal funcionamiento"},
            {title: "intercambio gaseoso de la piel"},
            {title: "Evita la maceración y el compromiso de la integridad de la piel. No es oclusivo"},
            {title: "Suave con la piel. Ideal para ser usada en pacientes con piel delicada o sensible (niños, ancianos) o en vendajes con alta frecuencia de cambio."},
            {title: "Buena adaptabilidad a sitios anatómicos complejos"},
            {title: "Excelente apariencia que mimetiza el color de la piel"},
        ],
        items11: [
            {title: "Hipoalérgico: reduce el riesgo de una reacción alérgica en el paciente. Suave con la piel. Balance adhesivo optimizado. Adhesión inicial baja que incrementa  con el paso del tiempo. Ideal para . aplicaciones de larga duración (>72hrs.)"},
            {title: "Buena adhesión en pieles húmedas debido a estado febril o condición climática calurosa o húmeda. Menor desprendimiento no programado de la cinta."},
            {title: "Mínimo residuo del adhesivo post remoción."},
            {title: "Versatilidad"},
            {title: "Estética"},
            {title: "Complacencia"},
        ],
        items12: [
            {title: "Seguridad"},
            {title: "Confiabilidad"},
            {title: "Ahorro de tiempo"},
            {title: "Ahorro de dinero"},
            {title: "Mayor Productividad"},
            {title: "Mejor calidad de salud"},
        ],
        items17: [
            {title: "Seguridad"},
            {title: "Comodidad"},
            {title: "Protección"},
            {title: "Versatilidad"},
            {title: "Estética"},
            {title: "Complacencia"},
        ],
      };},
};
</script>
<style scoped>
.dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
    margin-right: 10px;
  }
.cuadro:hover .overlay {
  opacity: 1;
  background-color: rgba(129, 129, 129, 0.171);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.divider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.divider {
  height: 100%;
  width: 1px;
  background-color: #000;
}
.divider1 {
    border-top: 1px solid #e0e0e0;
    margin-top: 4px;
    margin-bottom: 16px;
}
.carousel-item .square {
    width: 100%;
    height: 100%;
    z-index: 1;
}
.image-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.image-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
}
.boton {
    background: linear-gradient(0.3turn, #101D64, rgba(10,146,176,0.81)); 
    color: white;
    z-index: 1000;
    border: none;
}
  #circle {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    right: -150px;
    z-index:-1;
}
  #circle1 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    left: -150px;
    
}
#circle2 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    bottom: 0;
    right: -150px;
    
}
#circle3 {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    z-index:-1;
}
#circle4 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: absolute;
    z-index:-1;
}
#circle5 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    top: 0;
    left: -300px;
    z-index:-1;
}
.register input {
    width: 100%;
    height: 40px;
    display: block;
    margin: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    padding-left: 20px;
    background: white;
}
.register textarea {
    width: 100%;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    resize: none;
    padding-left: 20px;
    margin-bottom: 30px;
    background: white;
}
.register button {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    background-color: #2640d3;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
}
.before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
}
.enter {
    opacity: 1;
    transform: translateX(0px);
}
.card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card-header1 {
  padding: 16px;
  padding-bottom: 0px;
}

.card-content1 {
  padding-top: 0px;
  padding: 16px;
}
</style>
