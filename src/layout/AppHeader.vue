<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img class="logo-lg" src="@/assets/imgs/logos/uea.logo.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <img class="logo-lg" src="@/assets/imgs/logos/uea.logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
        <base-dropdown tag="li" class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            style="cursor: pointer;"
            slot="title"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
            :class="[$route.path === '/register-exhibitors' || $route.path === '/register-visitor' ? 'active-link' : '']"
          >
            <span class="nav-link-inner--text">Registration</span>
          </a>
          <div class="dropdown-menu-inner">
            <router-link to="/register-exhibitors" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Exhibitors Registration</h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Prepare your project with your colleagues, and register now in Upper Egypt in Action in
                  its 6
                  <sup>th</sup> edition.
                </p>
              </div>
            </router-link>
            <router-link to="/register-visitor" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-single-02"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Attendees Registration</h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Want to get more knowledge, and see where the world has reached? Tap here and
                  register as a visitor to Upper Egypt in Action 6
                  <sup>th</sup> edition.
                </p>
              </div>
            </router-link>
          </div>
        </base-dropdown>
        <li class="nav-item">
          <router-link
            tag="a"
            to="/competitions"
            slot="title"
            class="nav-link"
            :class="[$route.path === '/competitions' ? 'active-link' : '']"
          >
            <span class="nav-link-inner--text">Competitions</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            to="/gallery"
            slot="title"
            class="nav-link"
            :class="[$route.path === '/gallery' ? 'active-link' : '']"
          >
            <span class="nav-link-inner--text">Gallery</span>
          </router-link>
        </li>

        <!-- <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/creativetim"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/creativetimofficial/vue-argon-design-system"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Star us on Github"
          >
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a
            href="https://www.creative-tim.com/product/vue-argon-design-system"
            target="_blank"
            rel="noopener"
            class="btn btn-neutral btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-cloud-download mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Download</span>
          </a>
        </li>-->
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_breakpoints";
.header-global::v-deep {
  .logo-lg {
    width: 200px;
    height: auto;
    @include respond-below(md) {
      width: 180px;
    }
  }
  h3 {
    color: white;
    font-weight: bold;
  }
  .navbar-main {
    position: fixed;
    background: #201841;
  }
  .navbar-transparent .navbar-nav .nav-link:hover,
  .active-link {
    font-weight: bold;
    color: #f53d78;
  }
  .active-link {
    font-weight: bold;
    color: #f53d78 !important;
  }
}
</style>
