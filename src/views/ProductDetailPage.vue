<template>
  <div class="product-detail">
    <img :src="product.image" alt="Product Image" />
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }} €</p>
      <!-- unité 9.95 euros + 8 euros livraison; caisse => 10 euros livraison 64 euros = 8 euros/ unité  -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'], // Оставляем только props
  created() {

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

