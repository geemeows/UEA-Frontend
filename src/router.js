import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Competitions from "./views/Competitions.vue";
import RegisterProject from "./views/RegisterProject.vue";
import RegisterVisitor from "./views/RegisterVisitor.vue";
import Gallery from "./views/Gallery.vue";
import Graduates from "./views/Graduates"
import Undergraduates from './views/Undergraduates'
import Schools from './views/Schools'
import TechSchools from './views/TechSchools'
import MicroMouse from './views/MicroMouse'
import ARC6 from './views/ARC6'
import Spagetti from './views/Spagetti'
import Hackathon from './views/Hackathon'

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
      path: "/register-exhibitors/graduates",
      name: "gradsRegister",
      components: {
        header: AppHeader,
        default: Graduates,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/undergraduates",
      name: "undergradsRegister",
      components: {
        header: AppHeader,
        default: Undergraduates,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/schools",
      name: "schoolsRegister",
      components: {
        header: AppHeader,
        default: Schools,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/tech-schools",
      name: "techSchoolsRegister",
      components: {
        header: AppHeader,
        default: TechSchools,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/micro-mouse",
      name: "microMouseRegister",
      components: {
        header: AppHeader,
        default: MicroMouse,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/arc6",
      name: "arcRegister",
      components: {
        header: AppHeader,
        default: ARC6,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/spagetti",
      name: "spagettiRegister",
      components: {
        header: AppHeader,
        default: Spagetti,
        footer: AppFooter
      }
    },
    {
      path: "/register-exhibitors/hackathon",
      name: "hackathonRegister",
      components: {
        header: AppHeader,
        default: Hackathon,
        footer: AppFooter
      }
    },
    {
      path: "/register-visitor",
      name: "registerVisitor",
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
