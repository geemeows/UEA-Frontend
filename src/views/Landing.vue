<template>
  <div>
    <section class="section slider-section section-lg overflow-hidden my-0">
      <div class="py-0 pb-lg">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-12 mb-lg-auto">
            <div class="shadow-lg overflow-hidden">
              <b-carousel
                id="carousel1"
                :interval="3000"
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
              >
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      style="object-fit: cover;"
                      class="slider-img d-block img-fluid w-100"
                      src="@/assets/imgs/hero.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
                <!-- <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="slider-img d-block img-fluid w-100"
                      src="@/assets/imgs/slider-img.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide> -->
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Awesome Features -->
    <section style="padding-top: 0;" class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/project-section.svg" class="img-fluid floating" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon name="ni ni-spaceship" class="mb-5" size="lg" type="primary" shadow rounded></icon>
              <h3>Having a project idea?</h3>
              <p>
                If you're a student, and you have a project idea, then apply in Upper Egypt in Action in its 6
                <sup>th</sup> edition, and
                compete with the others!
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="primary" circle class="mr-3" icon="ni ni-check-bold"></badge>
                    <h6 class="mb-0">Register to UEA'2020</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="primary" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                    <h6 class="mb-0">Give us some data about your project</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="primary" circle class="mr-3" icon="ni ni-user-run"></badge>
                    <h6 class="mb-0">Compete with the others, and do grat things!</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-12">
                <h1 class="display-3 text-white">
                  Upper Egypt in Action
                  <span>
                    6
                    <sup>th</sup> edition, 2020
                  </span>
                </h1>
                <p class="lead text-white">
                  The most prodigious event over whole Upper Egypt is back for its 6th edition consecutively,
                  As Upper Egypt is a source of unlimited creativity and on going innovation we try to bring it to
                  spotlight. UEA is mainly a competition between projects in different categories graduates,
                  undergraduates and school. With a program designed to keep you up-to-date about numerous
                  technologies and trends around the world.
                </p>
                <!-- <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="fa fa-code"
                  >Components</base-button>
                  <base-button
                    tag="a"
                    href="https://www.creative-tim.com/product/argon-design-system"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-cloud-download-95"
                  >Download HTML</base-button>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-shaped my-0">
      <div
        class="shape shape-style-1 bg-gradient-warning shape-skew shape shape-style-1 shape-default shape-skew"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <!-- <div>
                <icon
                  name="ni ni-building"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div> -->
              <div class="pl-4">
                <h4 class="display-4 text-white">About IEEE Aswan Student Branch</h4>
                <p class="text-white">
                  IEEE Aswan Student Branch (IEEE Aswan SB) was founded in the academic year (2010-2011).
                  It is located at the Faculty of Engineering and serves all departments within the faculty, but its
                  services are not limited to these departments as it provides all students with different soft skills
                  sessions and trainings. Our main events are the following
                </p>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <!-- <div>
                  <icon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></icon>
                </div>-->
                <div class="pl-4">
                  <h5 class="title text-success">Upper Egypt in Action</h5>
                  <p>
                    UEA is considered the most important event throw out Upper Egypt, it is mainly a competition 
                    between projects for both graduates, and undergraduates.
                  </p>
                  <a href="https://www.facebook.com/events/547556652595539" target="_blank" class="text-success">Learn more</a>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <!-- <div>
                  <icon name="ni ni-active-40" gradient="warning" color="white" shadow rounded></icon>
                </div> -->
                <div class="pl-4">
                  <h5 class="title text-warning">BEIN Camp</h5>
                  <p>
                     BEIN camp is an engineering camp with 5 tracks, one for each engineering department along 
                     with general track that serves all faculties.
                  </p>
                  <a href="https://www.facebook.com/events/837663860082612" target="_blank" class="text-warning">Learn more</a>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">Our Sponsors</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/brand/ntra.logo.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">NTRA</span>
                  <small class="h6 text-muted">Partner</small>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/brand/vodafone.logo.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Vodafone</span>
                  <small class="h6 text-muted">Sponsor</small>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/brand/uni.logo.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Aswan University</span>
                  <small class="h6 text-muted">Sponsor</small>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/brand/foe.logo.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Faculty of Engineering</span>
                  <small class="h6 text-muted">Sponsor</small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">Have a question?</h3>
                <p class="lead text-white mt-3">
                  Please feel free to contact us via our Facebook page and we will answer all your inquiries.
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button
                  tag="a"
                  target="_blank"
                  href="https://www.facebook.com/IEEEAswanSB"
                  type="white"
                  block
                  size="lg"
                >IEEE Aswan SB Page</base-button>
              </div>
            </div>
          </div>
        </card>
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
.slider-img {
  height: 500px;
  @include respond-below(md) {
    height: 200px;
  }
}
.slider-section {
  padding-top: 5.3rem;
  padding-bottom: 0;
  @include respond-below(md) {
    padding-top: 3.9rem;
    padding-bottom: 0;
  }
}
.section-shaped .shape-style-1.shape-default {
  background: linear-gradient(150deg, #3d4f8e 15%, #262d73 70%, #354279 94%);
}
</style>
