<template>
  <div class="product-detail">
    <img :src="product.image" alt="Product Image" />
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }} €</p>
      <!-- Добавь дополнительные данные по необходимости -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'], // Оставляем только props
  created() {
    // Если данные о продукте передаются через props, ничего не нужно делать
    // Если нужно загружать данные по productId, добавь код сюда
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

