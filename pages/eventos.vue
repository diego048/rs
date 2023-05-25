<template>
    <div>
        <br />
        <br />
        <div id="background">
            <br />
            <br />
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-6" style="color: white">
                        <h1>EVENTOS</h1>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
        <br />
        <div>
            <div class="container">
                <div class="row" v-scrolls>
                    <div class="col-12 col-sm-6 col-md-6">
                        <div style="height:400px; width: 100%">
                            <div class="card1" style="height:400px; width: 100%">
                                <swiper :modules="[SwiperAutoplay]" :autoplay="{delay: 5000}"  :loop="true" style="height: 100%; width: 100%; min-height: 287px; color: black">
                                    <swiper-slide v-for="card in cards3" :key="card">
                                        <img :src="card.ima" style="width:100%; height: 100%; object-fit: cover" :alt="card.texto" />
                                    </swiper-slide>
                                    <div class="boton1">
                                        <boton />
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div style="position: relative" class="col-12 col-sm-6 col-md-6 align-self-center">
                        <div id="circle4" style="bottom: 100px" class="d-none d-sm-flex"></div>
                        <div id="circle4" style="right: 0; top: 100px"></div>
                        <h2 style="color: #1A2A33" align="center">Capacitación en el manejo de los equipos y mantas Bair Hugger</h2>
                        <br />
                        <p>
                        Algunas de nuestras fotos son:
                            <br />
                        -	Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) – Reunión con médicos residentes Anestesiólogos
                            <br />
                            <br />
                        -	Capacitación a Licenciados de la Unidad de Cuidados Intensivos (UCI) y del Servicio de Hemodiálisis del Hospital Naval.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div>
            <div class="container" v-scrolls>
                <div class="row">
                    <div class="col>
                    <swiper 
                      :autoplay="{delay: 12000}"
                      :modules="[SwiperAutoplay]" 
                      :slides-per-view="2" 
                      :spaceBetween="20" 
                      :loop="true" 
                      style="height: 100%; width: 100%; color: black"
                      :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                      }"
                    >
                        <swiper-slide v-for="card in cards" :key="card"  @click="showDialog(card)">
                            <img :src="card.ima" style="cursor: pointer ;width:100%; height: 100%; object-fit: cover" :alt="card.texto" />
                        </swiper-slide>
                        <div class="boton1">
                            <boton />
                        </div>
                    </swiper>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div style="background: rgba(173, 216, 230, 0.5); z-index: -15">
            <br />
            <div class="container">
                <div class="row" v-scrolls>
                    <div style="position: relative; z-index: 100" class="col-12 col-sm-6 col-md-6 align-self-center">
                        <div style="z-index: 100">
                            <p>
                                - Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) - Reunión con médicos residentes anestesiólogos
                                <br />
                                <br />
                                -Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) - Reunión con Licenciadas del Centro Quirúrgico
                            </p>
                        </div>
                        <div id="circle4" style="right: 0; bottom: 100px; background: rgba(255, 255, 255, 0.4); z-index: -1" class="d-none d-sm-flex"></div>
                        <div id="circle4" style="left: 0; top: 100px; background: rgba(255, 255, 255, 0.5); z-index: -1"></div>
                        
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <div style="height:400px; width: 100%">
                            <div class="card1" style="height:400px; width: 100%">
                                <swiper :modules="[SwiperAutoplay]" :autoplay="{delay: 5000}" :loop="true" style="height: 100%; width: 100%; min-height: 287px; color: black">
                                    <swiper-slide v-for="card in cards2" :key="card">
                                        <img :src="card.ima" style="width:100%; height: 100%; object-fit: cover" :alt="card.texto" />
                                    </swiper-slide>
                                    <div class="boton1">
                                        <boton />
                                    </div>
                                </swiper>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <br />
        </div>
        <br />
        <div>
            <div class="container" v-scrolls>
                <div class="row">
                    <div class="col">
                    <swiper 
                      :autoplay="{delay: 12000}"
                      :modules="[SwiperAutoplay]" 
                      :slides-per-view="2" 
                      :spaceBetween="20" 
                      :loop="true" 
                      style="height: 100%; width: 100%; color: black"
                      :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                      }"
                    >
                        <swiper-slide v-for="card in cards1" :key="card"  @click="showDialog(card)">
                            <img :src="card.ima" style="cursor: pointer;width:100%; height: 100%; object-fit: cover" :alt="card.texto" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen24.jpg" style="width:100%; height: 100%; object-fit: cover" alt="imsgen" />
                        </swiper-slide>
                        <div class="boton1">
                            <boton />
                        </div>
                    </swiper>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div v-for="card in cards">
            <dibox v-show="card.show" @close="hideDialog(card)">
                <div class="d-flex justify-content-end">
                <div class="d-flex justify-start">
                    <button
                    type="button" class="btn btn-danger"
                    @click="hideDialog(card)"
                    >
                    <h2>x</h2>
                    </button>
                </div>
                </div>
                <hr class="solid">
                <p>
                    {{ card.texto }}
                </p>
            </dibox>
        </div>
        <div v-for="card in cards1">
            <dibox v-show="card.show" @close="hideDialog(card)">
                <div class="d-flex justify-content-end">
                <div class="d-flex justify-start">
                    <button
                    type="button" class="btn btn-danger"
                    @click="hideDialog(card)"
                    >
                    <h3>x</h3>
                    </button>
                </div>
                </div>
                <hr class="solid">
                <p>
                    {{ card.texto }}
                </p>
            </dibox>
        </div>
    </div>
</template>
<style scoped>
.boton1 {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    position: absolute; 
    top: 30px; 
    width: 98%; 
    height: 100%
  }
  .swiper:hover .boton1 {
  opacity: 1
}
  .swiper-slide:hover .overlay {
  opacity: 1;
  background-color: rgba(129, 129, 129, 0.171);
}
    .swiper {
      width: 100%;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    }

    .swiper-slide {
    height: 400px;
    object-fit: cover;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    background-color: #eee;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}
.card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
#background {
  background: url("https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen49.png");
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
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
  #circle4 {
    background: rgba(173, 216, 230, 0.5);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index:-3;
}
.slide-group {
  margin: 20px 0;
}
.carousel-item img {
  height: 100%;
  object-fit: cover;
}

</style>
<script setup>
useHead({
          title: "Eventos",
          meta: [
          {
            name: "robots",
            content: "index, follow"
          },
          {
            name: "description",
            content: "Eventos y Capacitaciones en el manejo de los equipos",
          },
          {
            property: "site_name",
            content: "RSpharma"
          },
          {
            property: "og:title",
            content: "Nosotros"
          },
          {
            property: "og:description",
            content: "Eventos y Capacitaciones en el manejo de los equipos"
          },
          {
            property: "og:image",
            content: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen37.png",
          },
          {
            property: "og:url",
            content: "/eventos"
          },
          {
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            name: "twitter:tittle",
            content: "eventos"
          },
          {
            name: "twitter:description",
            content: "Eventos y Capacitaciones en el manejo de los equipos"
          },
          {
            name: "twitter:image",
            content: "https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen37.png"
          },
        ],
        })
</script>
<script>
export default {
    data() {
        return {
            swiper: null,
            swiper1: {
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                },
            },
            activador: false,
            cards: [
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen10.jpg", show: false, texto: "Capacitación a Licenciadas del Hospital “Alberto Sabogal Sologuren” sobre Mantenimiento del Acceso Vascular."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen11.jpg", show: false, texto: "Capacitación a las Licenciadas del Hospital “Guillermo Almenara Irigoyen” sobre Mantenimiento del Acceso Vascular a personal de enfermería."},
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen12.jpg", show: false, texto: "Capacitación a las Licenciadas del Hospital “Guillermo Almenara Irigoyen” sobre Mantenimiento del Acceso Vascular a personal de enfermería."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen13.jpg", show: false, texto: "Capacitación a las licenciadas de la Unidad de Cuidados Intensivos Pediátricos del Hospital “Edgardo Rebagliati Martins”. "}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen14.jpg", show: false, texto: "Capacitación a las licenciadas de la Unidad de Cuidados Intensivos Pediátricos del Hospital “Edgardo Rebagliati Martins”. "}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen15.jpg", show: false, texto: "Capacitación a las Licenciadas de la Unidad de Cuidados Intensivos Neonatología del Hospital “Guillermo Almenara Irigoyen” - Manejo de Luminómetro."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen16.jpg", show: false, texto: "Capacitación dirigida a las Licenciadas del Servicio Cirugía Pediátrica del Hospital “Edgardo Rebagliati Martins” - Capacitación en el manejo de los equipos y mantas Bair Hugger."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen17.jpg", show: false, texto: "Capacitación dirigida a las Licenciadas de la Unidad de Cuidados Intensivos Pediátricos del Hospital “Edgardo Rebagliati Martins” sobre Mantenimiento del Acceso Vascular."}
            ],
            cards1: [
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen18.jpg", show: false, texto: "Capacitación dirigida a las Licenciadas de la Unidad de Cuidados Intensivos Pediátricos del Hospital “Edgardo Rebagliati Martins” sobre Mantenimiento del Acceso Vascular."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen19.jpg", show: false, texto: "Capacitación dirigida a las Licenciadas de la Unidad de Cuidados Intensivos Pediátricos del Hospital “Edgardo Rebagliati Martins” sobre Mantenimiento del Acceso Vascular."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen20.jpg", show: false, texto: "Capacitación a las Licenciadas del Hospital “Guillermo Almenara Irigoyen” sobre Mantenimiento del Acceso Vascular."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen21.jpg", show: false, texto: "Capacitación a las Licenciadas del Hospital “Guillermo Almenara Irigoyen” sobre Mantenimiento del Acceso Vascular."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen22.jpg", show: false, texto: "Capacitación a las Licenciadas del Hospital “Guillermo Almenara Irigoyen” sobre Mantenimiento del Acceso Vascular."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen23.jpg", show: false, texto: "Evento - Capacitación en el Hotel Crowne sobre Eficiencia y calidad en la atención hospitalaria y claves para el éxito - Dirigido a las enfermeras del Hosp. “Edgardo Rebagliati Martins” - Hosp. “Guillermo Almenara Irigoyen” y del Hosp. “Alberto Sabogal Sologuren”"}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen25.jpg", show: false, texto: "Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) - Reunión con Licenciadas del Centro Quirúrgico - Capacitación en el manejo de los equipos y mantas Bair Hugger."}
            ],
            cards2: [
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen30.jpg", texto: "Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN)"},
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen31.jpg", texto: "Capacitación a Licenciados de la Unidad de Cuidados Intensivos (UCI) y del Servicio de Hemodiálisis del Hospital Naval."}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen32.jpg", texto: "Capacitación a Licenciados de la Unidad de Cuidados Intensivos (UCI) y del Servicio de Hemodiálisis del Hospital Naval."}
            ],
            cards3: [
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen26.jpg", texto: "Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) - Reunión con médicos residentes anestesiólogos"},
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen27.jpg", texto: "Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) - Reunión con Licenciadas del Centro Quirúrgico"}, 
                { ima: "https://ik.imagekit.io/ui7iolk9r/tr:w-900/imagen28.jpg", texto: "Sala de Operaciones del Instituto Nacional de Enfermedades Neoplásicas (INEN) - Reunión con Licenciadas del Centro Quirúrgico"}
            ],

        }
    },
    beforeMount(){
        this.activador = true;
    },
    unmounted(){
        this.activador = false;
        document.body.style.position = "static";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";
    },
    mounted() {
       
    },
    methods: {
        showDialog(card) {
            this.scrollPosition = window.pageYOffset;
            card.show = true;
            document.body.style.position = "fixed";
            document.body.style.top = `-${this.scrollPosition}px`;
            document.body.style.width = "100%";
            document.body.style.overflowY = "scroll";
    },
        hideDialog(card) {
        card.show = false;
        document.body.style.position = "static";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";
        window.scrollTo({top: this.scrollPosition, behavior: "instant"});
        },
    }
};
</script>
