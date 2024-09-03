<template>
  <div class="product-item">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} €</p>
    <button @click="addToCart">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      // Логика добавления товара в корзину
      console.log('Added to cart:', this.product.name);
    },
  },
};
</script>

<style scoped>
.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 200px;
}

.product-image {
  width: 100%;
  height: auto;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
