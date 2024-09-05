<template>
  <main class="main-content">
    <Banner />
    <ProductList />
  </main>
</template>

<script>
import ProductList from './ProductList.vue';

export default {
  components: {
    ProductList,
  },
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}
</style>
