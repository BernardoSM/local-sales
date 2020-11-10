import Vue from "vue";
import VueRouter from "vue-router";
const Default = () =>
  import(/* webpackChunkName: "common" */ "@/components/layouts/Default.vue");
const clients = () =>
  import(/* webpackChunkName: "common" */ "@/views/clients.vue");
const headoffices = () =>
  import(/* webpackChunkName: "common" */ "@/views/headoffices.vue");
const products = () =>
  import(/* webpackChunkName: "common" */ "@/views/products.vue");
const resume = () =>
  import(/* webpackChunkName: "common" */ "@/views/resume.vue");

import store from "@/store";
Vue.use(store);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Default,
    redirect: "headoffices",
    children: [
      {
        path: "/clients",
        name: "clients",
        component: clients
      },
      {
        path: "/headoffices",
        name: "headoffices",
        component: headoffices
      },
      {
        path: "/products",
        name: "products",
        component: products
      },
      {
        path: "/resume",
        name: "resume",
        component: resume
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
