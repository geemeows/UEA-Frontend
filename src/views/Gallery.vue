<template>
  <div>
    <section class="section">
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-lg-12 order-lg-1">
            <h2 class="py-5">Coming Soon...</h2>
            <img src="img/theme/comingsoon.svg" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_breakpoints";
h2 {
  text-align: center;
}
img {
  width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
  @include respond-below(md) {
    width: 300px;
  }
}
</style>
