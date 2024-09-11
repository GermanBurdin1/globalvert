<template>
  <div class="page-container">
    <h1>Nos Produits</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
};
</script>

<style scoped>
.page-container {
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>
