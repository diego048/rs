<template>
    <div>
        <br />
        <br />
        <div id="background1">
            <br />
            <div class="container">
            <h1 align="center" style="color: white">ESTAMOS CAMBIANDO EL MUNDO</h1>
        </div>
        </div>
        <br />
        <br />
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 align-self-center" v-scrolls>
                        <p align="justify">
                            Somos una empresa dedicada a la comercialización y distribución de 
                            material médico, dispositivos médicos y productos farmacéuticos 
                            oncológicos de procedencia nacional y extranjera
                        </p>
                        <br />
                        <div align="center">
                            <img
                                style="height: 200px"
                                src="/imag/imagen35.png"
                            >
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 align-self-center" style="position: relative" v-scrolls>
                        <div id="circle1" style="right: 0px; top: 20px"></div>
                        <div id="circle1" style="right: 10px"></div>
                        <div align="center">
                            <img
                                class="d-none d-sm-flex"
                                style="height: 180px"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/3M_wordmark.svg/1200px-3M_wordmark.svg.png"
                            >
                        </div>
                        <br />
                        <h3>
                            Distribuidor autorizado de la empresa 3M PERU
                        </h3>
                        <p>
                            Gracias a nuestra vasta experiencia en el sector salud, es que desde 
                            el año 2019 contamos con esto. para la comercialización y distribución 
                            de su línea médica más reconocidas en el mercado mundial
                        </p>
                        <br class="d-flex d-sm-none" />
                        <img
                            class="d-flex d-sm-none"
                            height="180px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/3M_wordmark.svg/1200px-3M_wordmark.svg.png"
                        >
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div style="background: rgba(173, 216, 230, 0.5); z-index:-2; position: relative">
            <div id="circle2"></div>
            <div id="circle3"></div>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 align-self-center" v-scrolls>
                        <h2 style="color: #1A2A33" align="center">NUESTRA MISIÓN</h2>
                        <p align="justify">
                            Es ofrecer a nuestros clientes del sector salud tanto público como privado 
                            productos de alta calidad, tecnología y seguridad, logrando satisfacer sus 
                            necesidades que permite con ello ser su mejor aliado para el logro de sus 
                            objetivos, que es el de otorgar a sus pacientes una mejor calidad de vida.
                        </p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6" v-scrolls>
                        <div class="card1" style="height: 350px" align="center">
                            <img
                                style=" height: 100%;"
                                src="https://www.emprendedorinteligente.com/wp-content/uploads/2021/06/Que-es-la-mision-de-una-empresa.jpg"
                            >
                        </div>
                </div>
                </div>
            </div>
            <br />
        </div>
        <br />
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 d-none d-sm-flex" v-scrolls>
                        <div class="card2" style="width: 100%">
                            <img
                                style="height:350px; width: 100%"
                                src="https://aprendihoy.com/wp-content/uploads/2021/08/imagen-destacada-mision-y-vision-930x620.png"
                            >
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 align-self-center" style="position: relative" v-scrolls>
                        <div id="circle4" style="bottom: 100px" class="d-none d-sm-flex"></div>
                        <div id="circle4" style="right: 0; top: 100px"></div>
                        <h2 style="color: #1A2A33" align="center">NUESTRA VISIÓN</h2>
                        <p>
                            Es ser reconocidos como una empresa sólida en el mercado nacional, con un 
                            amplio portafolio de productos dirigido al sector de la salud, así como 
                            ofrecer a nuestros clientes un servicio personalizado, orientándolos siempre 
                            a una mejora continua de sus objetivos.
                        </p>
                    </div>
                    <div cols="12" sm="6" md="6" class="col-12 col-sm-6 col-md-6 d-flex d-sm-none" v-scrolls>
                        <div class="card2" style="width: 100%">
                            <img
                                style="height:350px; width: 100%"
                                src="https://aprendihoy.com/wp-content/uploads/2021/08/imagen-destacada-mision-y-vision-930x620.png"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>
<style scoped>
.card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card2 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card-header1 {
  padding: 16px;
  padding-bottom: 0px;
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
#circle {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 350px;
    height: 300px;
    position: absolute;
    bottom: 0;
    left: -150px;
    z-index:-1;
}
#circle1 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index:-1;
}
#circle2 {
    background: white;
    border-radius: 50%;
    width: 300px;
    height: 250px;
    position: absolute;
    bottom: -150px;
    left: -150px;
    z-index:-1;
}
#circle3 {
    background: white;
    border-radius: 50%;
    width: 300px;
    height: 250px;
    position: absolute;
    top: -150px;
    right: -150px;
    z-index:-1;
}
#circle4 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index:-3;
}
#circle5 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    top: -40px;
    right: 400px;
    z-index: -1;
}
#circle6 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -20px;
    z-index: -1;
}
#background1 {
    background: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),
      url("/imag/imagen76.jpeg");
    background-position: 50% 40%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px
  }
</style>