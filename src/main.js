import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Router
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/Home.vue";
import ErrorPage from "./views/Error.vue";
import DetailsPage from "./views/Details.vue";

// Slider
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

// Pinia
import { createPinia } from "pinia";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  // {
  //   path: "/users/update/:id",
  //   component: updateUser,
  // },
  {
    path: "/games/:id",
    component: DetailsPage,
  },
  // {
  //   path: "/create",
  //   component: createUser,
  // },
  {
    path: "/:NotFound(.*)*",
    component: ErrorPage,
    meta: {
      hideHeader: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VueSplide).use(createPinia()).mount("#app");
