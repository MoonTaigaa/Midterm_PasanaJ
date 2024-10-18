<template>
  <ul class="product-list">
    <li v-for="(product, index) in products" :key="index">
      <div v-if="editingIndex === index" class="edit-form">
        <input v-model="editedProduct.name" placeholder="Edit name" />
        <input
          type="number"
          v-model="editedProduct.price"
          placeholder="Edit price"
        />
        <textarea
          v-model="editedProduct.description"
          placeholder="Edit description"
        ></textarea>
        <button @click="saveEdit(index)">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </div>
      <div v-else>
        <strong>{{ product.name }}</strong> - ${{ product.price }}
        <p>{{ product.description }}</p>
        <button @click="editProduct(index)">Edit</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      editingIndex: null,
      editedProduct: {},
    };
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index;
      this.editedProduct = { ...this.products[index] };
    },
    saveEdit(index) {
      this.$emit("edit-product", { index, product: this.editedProduct });
      this.resetEdit();
    },
    cancelEdit() {
      this.resetEdit();
    },
    resetEdit() {
      this.editingIndex = null;
      this.editedProduct = {};
    },
  },
};
</script>
