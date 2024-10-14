<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Product Name:</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="price" />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="description"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
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
      this.$emit("add-product", {
        name: this.name,
        price: this.price,
        description: this.description,
      });
      this.name = "";
      this.price = 0;
      this.description = "";
    },
  },
};
</script>
