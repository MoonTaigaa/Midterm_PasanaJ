<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <div v-if="editedIndex !== index">
          <span>{{ product.name }}</span>
          <span>{{ product.price }}</span>
          <span>{{ product.description }}</span>
          <button @click="editProduct(index)">Edit</button>
        </div>
        <div v-else>
          <input v-model="editedProduct.name" />
          <input v-model="editedProduct.price" />
          <textarea v-model="editedProduct.description"></textarea>
          <button @click="saveProduct(index)">Save</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      editedIndex: null,
      editedProduct: { name: "", price: 0, description: "" },
    };
  },
  methods: {
    editProduct(index) {
      this.editedIndex = index;
      this.editedProduct = { ...this.products[index] };
    },
    saveProduct(index) {
      this.$emit("update-product", { index, product: this.editedProduct });
      this.editedIndex = null;
    },
  },
};
</script>
