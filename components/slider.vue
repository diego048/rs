<template>
  <Swiper
    style="height: 300px"
    :slides-per-view="1"
    :spaceBetween="30"
    :effect="'creative'"
    :pagination="{
      clickable: true
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
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
    
    <SwiperSlide v-for="card in cards" :key="card">
      <div class="container" style="height:100%">
      <div style="width:; height: 90%; margin-right:30px; margin-top: 15px">
        <img :src="card" style="width:100%; height: 100%">
      </div>
    </div>
    </SwiperSlide>
  </Swiper>
</template>
<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    }
  }
}
</script>


  
  