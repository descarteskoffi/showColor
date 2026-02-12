import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import { authService } from "@/services/authService";
import ColorsView from "@/views/ColorsView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: { hideNav: true },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: { requiredAuth: true },
  },
  {
    path: "/myColors",
    name: "colors",
    component: ColorsView,
    meta: { requiredAuth: true },
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !authService.isAuthenticated()) {
    next("/");
  } else if (to.path === "/" && authService.isAuthenticated()) {
    next("/home");
  } else {
    next();
  }
});
export default router;
