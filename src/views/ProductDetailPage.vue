<template>
  <div>
    <h1>Détails du Produit</h1>
    <div class="product-detail">
      <!-- Замените на реальную логику показа деталей продукта -->
      <p>Détails pour le produit avec ID: {{ $route.params.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.product-detail {
  padding: 20px;
  border: 1px solid #ddd;
}
</style>

