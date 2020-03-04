import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Competitions from "./views/Competitions.vue";
import RegisterProject from "./views/RegisterProject.vue";
import RegisterVisitor from "./views/RegisterVisitor.vue";
import Gallery from "./views/Gallery.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/competitions",
      name: "Competitions",
      components: {
        header: AppHeader,
        default: Competitions,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors",
      name: "registerProject",
      components: {
        header: AppHeader,
        default: RegisterProject,
        footer: AppFooter
      }
    },
    {
      path: "/register-visitor",
      name: "registerProject",
      components: {
        header: AppHeader,
        default: RegisterVisitor,
        footer: AppFooter
      }
    },
    {
      path: "/gallery",
      name: "Gallery",
      components: {
        header: AppHeader,
        default: Gallery,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
