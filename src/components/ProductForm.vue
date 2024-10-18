<template>
  <form class="product-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Product Name</label>
      <input type="text" v-model="name" id="name" required />
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" v-model="price" id="price" required min="0" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="description" id="description" required></textarea>
    </div>
    <button type="submit" class="submit-button">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0,
      description: "",
    };
  },
  methods: {
    submitForm() {
      const product = {
        name: this.name,
        price: this.price,
        description: this.description,
      };
      this.$emit("add-product", product);
      this.resetForm();
    },
    resetForm() {
      this.name = "";
      this.price = 0;
      this.description = "";
    },
  },
};
</script>
