<template>
  <div>
    <nav>
      <router-link to="/products">Products</router-link>
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import ProductForm from "./ProductForm.vue";
import ProductList from "./ProductList.vue";

export default {
  components: {
    ProductForm,
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    },
    updateProduct({ index, product }) {
      this.$set(this.products, index, product);
    },
  },
};
</script>
