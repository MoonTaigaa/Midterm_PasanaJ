import Vue from "vue";
import Router from "vue-router";
import ProductForm from "../components/ProductForm.vue";
import ProductList from "../components/ProductList.vue";
import Home from "../components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/products",
      component: {
        default: ProductForm,
        list: ProductList,
      },
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});
