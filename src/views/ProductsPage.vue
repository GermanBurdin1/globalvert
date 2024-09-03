<template>
  <div>
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
h1 {
  margin-bottom: 20px;
}
</style>
