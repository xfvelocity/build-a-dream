import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../home/Home.vue";
import OurWork from "../our-work/OurWork.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ourwork",
    name: "OurWork",
    component: OurWork,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
